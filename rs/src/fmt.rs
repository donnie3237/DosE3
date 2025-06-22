use std::path::Path;
use tokio::fs;
use walkdir::WalkDir;

use swc_common::{sync::Lrc, SourceMap};
use swc_ecma_parser::{Parser, StringInput, Syntax, TsConfig};
use swc_ecma_codegen::{Emitter, text_writer::JsWriter};
use std::io::BufWriter;

use serde_json;
use parcel_css::stylesheet::{ParserOptions, PrinterOptions, StyleSheet};

use html5ever::parse_document;
use html5ever::serialize::{serialize, SerializeOpts};
use markup5ever_rcdom::{RcDom, SerializableHandle};
use std::default::Default;

pub async fn format_all_code_in_path_async<P: AsRef<Path>>(root_path: P) -> Result<(), Box<dyn std::error::Error>> {
    let root = root_path.as_ref();

    // WalkDir ยังไม่ async แต่ไม่ค่อยช้าเท่าไหร่
    for entry in WalkDir::new(root)
        .into_iter()
        .filter_map(Result::ok)
        .filter(|e| e.file_type().is_file())
        .filter(|e| !e.path().components().any(|c| c.as_os_str() == "node_modules"))
    {
        let path = entry.path();
        let filename = path.to_str().unwrap_or_default();

        if let Some(ext) = path.extension().and_then(|s| s.to_str()) {
            let ext_lower = ext.to_lowercase();

            if matches!(ext_lower.as_str(), "js" | "ts" | "tsx" | "jsx" | "json" | "css" | "html" | "htm") {
                // อ่านไฟล์แบบ async
                let code = fs::read_to_string(path).await?;
                let formatted = match ext_lower.as_str() {
                    "js" | "ts" | "tsx" | "jsx" => {
                        let cm: Lrc<SourceMap> = Default::default();
                        let fm = cm.new_source_file(Default::default(), code.into());

                        let lexer = swc_ecma_parser::lexer::Lexer::new(
                            Syntax::Typescript(TsConfig { tsx: ext_lower == "tsx" || ext_lower == "jsx", ..Default::default() }),
                            Default::default(),
                            StringInput::from(&*fm),
                            None,
                        );

                        let mut parser = Parser::new_from(lexer);
                        let module = parser.parse_module()?;

                        let mut buf = Vec::new();
                        {
                            let wr = Box::new(BufWriter::new(&mut buf));
                            let mut emitter = Emitter {
                                cfg: swc_ecma_codegen::Config { minify: false },
                                comments: None,
                                cm: cm.clone(),
                                wr,
                            };
                            emitter.emit_module(&module)?;
                        }

                        String::from_utf8(buf)?
                    }
                    "json" => {
                        let v: serde_json::Value = serde_json::from_str(&code)?;
                        serde_json::to_string_pretty(&v)?
                    }
                    "css" => {
                        let stylesheet = StyleSheet::parse(
                            filename,
                            &code,
                            ParserOptions::default(),
                        )?;

                        let result = stylesheet.to_css(PrinterOptions {
                            minify: false,
                            ..Default::default()
                        });
                        result.code
                    }
                    "html" | "htm" => {
                        let dom: RcDom = parse_document(RcDom::default(), Default::default())
                            .from_utf8()
                            .read_from(&mut code.as_bytes())?;

                        let mut bytes = Vec::new();
                        serialize(&mut bytes, &SerializableHandle::from(dom.document), SerializeOpts::default())?;
                        String::from_utf8(bytes)?
                    }
                    _ => code,
                };

                // เขียนไฟล์แบบ async
                fs::write(path, formatted).await?;
                println!("✅ Formatted: {}", filename);
            }
        }
    }

    Ok(())
}
