use std::process::Command;

pub fn open_in_vscode(path: &str) {
    let is_windows = std::env::consts::OS == "windows";
    let result = if is_windows {
        Command::new("cmd")
            .args(&["/C", &format!("cd {} && code .", path)])
            .status()
    } else {
        Command::new("bash")
            .arg("-c")
            .arg(format!("cd {} && code .", path))
            .status()
    };

    match result {
        Ok(status) if status.success() => println!("✅ Opened in VSCode."),
        Ok(_) => eprintln!("⚠️ Failed to open VSCode."),
        Err(e) => eprintln!("❌ Failed to execute command: {}", e),
    }
}
