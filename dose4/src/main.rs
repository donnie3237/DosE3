mod cli;
mod prompt;
mod framework;
mod git;
mod vscode;

fn main() {
    let matches = cli::get_cli_args();

    if let Some(arg) = matches.get_one::<String>("arg") {
        match arg.as_str() {
            "check" => {
                git::check_dependencies();
                return;
            }
            "ls" => {
                git::ls_file();
                return;
            }
            _ => {}
        }
    }
    
    let name = prompt::ask_name();
    println!("Hello, {}!", name);

    let frameworks = framework::get_frameworks();
    let names: Vec<&str> = frameworks.iter().map(|(name, _)| *name).collect();
    let selected = prompt::ask_framework(&names);

    if let Some((_, repo_url)) = frameworks.iter().find(|(n, _)| *n == selected) {
        if git::clone_repo(repo_url, &name) {
            let action = prompt::ask_action();
            if action == "Open in VSCode" {
                vscode::open_in_vscode(&name);
            } else {
                println!("✅ Process completed. Have a nice day!");
            }
        }
    } else {
        eprintln!("❌ Framework not found!");
    }
}
