use std::fs;
use std::time::{SystemTime, UNIX_EPOCH};
use chrono::{DateTime, Local};

/// 📂 แสดงไฟล์ในโฟลเดอร์ปัจจุบัน (ไม่ recursive)
pub fn ls_file() {
    println!("{:<30} {:<10} {:<10} {:<20}", "Name", "Type", "Size", "Modified");
    visit_dir(".", 0, false);
}

/// 📁 แสดงไฟล์ทั้งหมดแบบ recursive พร้อม depth
pub fn ls_file_recursive() {
    println!("{:<30} {:<10} {:<10} {:<20}", "Name", "Type", "Size", "Modified");
    visit_dir(".", 0, true);
}

// 🧠 ฟังก์ชันหลักภายในสำหรับวนลูปไฟล์
fn visit_dir(path: &str, depth: usize, recursive: bool) {
    let indent = "  ".repeat(depth);

    match fs::read_dir(path) {
        Ok(entries) => {
            for entry in entries.flatten() {
                let path_buf = entry.path();
                let metadata = match entry.metadata() {
                    Ok(m) => m,
                    Err(_) => continue,
                };

                let file_type = if metadata.is_dir() {
                    "DIR"
                } else if metadata.is_file() {
                    "FILE"
                } else {
                    "OTHER"
                };

                let file_size = format_bytes(metadata.len());
                let modified = match metadata.modified() {
                    Ok(time) => system_time_to_string(time),
                    Err(_) => "N/A".into(),
                };

                println!(
                    "{}{:<30} {:<10} {:<10} {:<20}",
                    indent,
                    entry.file_name().to_string_lossy(),
                    file_type,
                    file_size,
                    modified
                );

                if recursive && metadata.is_dir() {
                    visit_dir(path_buf.to_str().unwrap_or(""), depth + 1, true);
                }
            }
        }
        Err(e) => {
            eprintln!("{}Error reading directory {}: {}", indent, path, e);
        }
    }
}

/// 💡 แปลง byte เป็น KB / MB / GB
fn format_bytes(bytes: u64) -> String {
    const UNITS: [&str; 5] = ["B", "KB", "MB", "GB", "TB"];
    let mut size = bytes as f64;
    let mut unit = 0;

    while size >= 1024.0 && unit < UNITS.len() - 1 {
        size /= 1024.0;
        unit += 1;
    }

    format!("{:.1} {}", size, UNITS[unit])
}

/// 🕒 แปลงเวลาเป็น string สวยงาม
fn system_time_to_string(time: SystemTime) -> String {
    match time.duration_since(UNIX_EPOCH) {
        Ok(duration) => {
            let datetime = DateTime::<Local>::from(UNIX_EPOCH + duration);
            datetime.format("%Y-%m-%d %H:%M:%S").to_string()
        }
        Err(_) => "Invalid".into(),
    }
}
