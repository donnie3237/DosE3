use indicatif::{ProgressBar, ProgressStyle};
use std::{fs, process::Command, time::Duration};

pub fn check_dependencies() {
    for (name, cmd) in &[("Git", "git --version"), ("Node.js", "node --version")] {
        match Command::new(cmd.split_whitespace().next().unwrap())
            .arg(cmd.split_whitespace().nth(1).unwrap())
            .output()
        {
            Ok(output) if output.status.success() => {
                println!("✅ {} is installed: {}", name, String::from_utf8_lossy(&output.stdout).trim());
            }
            Ok(_) => eprintln!("❌ {} is installed but not working properly.", name),
            Err(_) => eprintln!("❌ {} is not installed. Please install it first.", name),
        }
    }
}

pub fn ls_file(){
    match fs::read_dir(".") {
            Ok(entries) => {
                for entry in entries.flatten() {
                    println!("{}", entry.file_name().to_string_lossy());
                }
            }
            Err(e) => eprintln!("Error reading directory: {}", e),
    }
}
pub fn clone_repo(repo_url: &str, target_directory: &str) -> bool {
    let pb = ProgressBar::new_spinner();
    pb.set_message("Cloning repository...");
    pb.enable_steady_tick(Duration::from_millis(100));
    pb.set_style(
        ProgressStyle::default_spinner()
            .tick_strings(&["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"])
            .template("{spinner} {msg}")
            .unwrap(),
    );

    let result = Command::new("git")
        .arg("clone")
        .arg(repo_url)
        .arg(target_directory)
        .stdout(std::process::Stdio::null())
        .stderr(std::process::Stdio::null())
        .status();

    pb.finish_and_clear();

    match result {
        Ok(status) if status.success() => {
            println!("✅ Successfully cloned repository into folder: {}", target_directory);
            let git_folder = format!("{}/.git", target_directory);
            if fs::remove_dir_all(&git_folder).is_ok() {
                println!("✅ Removed .git folder.");
                true
            } else {
                eprintln!("⚠️ Failed to remove .git folder.");
                false
            }
        }
        Ok(_) => {
            eprintln!("❌ Failed to clone repository.");
            false
        }
        Err(e) => {
            eprintln!("❌ Failed to run git clone: {}", e);
            false
        }
    }
}
