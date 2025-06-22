use std::collections::HashSet;
use std::fs;
use std::path::Path;

use regex::Regex;
use serde::Deserialize;
use walkdir::WalkDir;

#[derive(Debug, Deserialize)]
struct PackageJson {
    dependencies: Option<serde_json::Map<String, serde_json::Value>>,

    #[serde(rename = "devDependencies")]
    dev_dependencies: Option<serde_json::Map<String, serde_json::Value>>,
}

pub fn check_dependencies(project_path: &str) {
    let pkg_path = Path::new(project_path).join("package.json");
    let pkg_content = match fs::read_to_string(&pkg_path) {
        Ok(content) => content,
        Err(_) => {
            eprintln!("❌ package.json not found at {}", pkg_path.display());
            return;
        }
    };

    let pkg_json: PackageJson = match serde_json::from_str(&pkg_content) {
        Ok(pkg) => pkg,
        Err(err) => {
            eprintln!("❌ Failed to parse package.json: {}", err);
            return;
        }
    };

    let dependencies: HashSet<_> = pkg_json
        .dependencies
        .unwrap_or_default()
        .keys()
        .cloned()
        .collect();

    let dev_dependencies: HashSet<_> = pkg_json
        .dev_dependencies
        .unwrap_or_default()
        .keys()
        .cloned()
        .collect();

    let mut used_deps = HashSet::new();
    let import_regex = Regex::new(r#"(?:from|require\() ['"](@?[a-zA-Z0-9_\-/]+)['"]"#).unwrap();

    for entry in WalkDir::new(project_path)
        .into_iter()
        .filter_map(Result::ok)
        .filter(|e| e.file_type().is_file())
        .filter(|e| {
            if let Some(ext) = e.path().extension() {
                matches!(
                    ext.to_str(),
                    Some("js" | "ts" | "jsx" | "tsx" | "cjs" | "mjs")
                )
            } else {
                false
            }
        })
    {
        if let Ok(content) = fs::read_to_string(entry.path()) {
            for cap in import_regex.captures_iter(&content) {
                let full_path = cap.get(1).unwrap().as_str();
                let top_level = if full_path.starts_with('@') {
                    full_path
                        .split('/')
                        .take(2)
                        .collect::<Vec<_>>()
                        .join("/")
                } else {
                    full_path.split('/').next().unwrap().to_string()
                };

                used_deps.insert(top_level);
            }
        }
    }

    let unused_deps: Vec<_> = dependencies.difference(&used_deps).cloned().collect();
    let unused_dev_deps: Vec<_> = dev_dependencies.difference(&used_deps).cloned().collect();

    println!("📦 Unused dependencies:");
    if unused_deps.is_empty() {
        println!("✅ All dependencies are used.");
    } else {
        for dep in &unused_deps {
            println!("❌ {}", dep);
        }
    }

    println!("\n🧪 Unused devDependencies:");
    if unused_dev_deps.is_empty() {
        println!("✅ All devDependencies are used.");
    } else {
        for dep in &unused_dev_deps {
            println!("⚠️  {}", dep);
        }
    }
}
