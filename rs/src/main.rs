mod cli;
mod prompt;
mod framework;
mod git;
mod vscode;
mod ls;
mod port;
mod status;

#[tokio::main]
async fn main() {
    let matches = cli::get_cli_args();

    match matches.subcommand() {
    Some(("check", _)) => {
        git::check_dependencies();
        return;
    }
    Some(("ls", _)) => {
        ls::ls_file();
        return;
    }
    Some(("ls2", _)) => {
        ls::ls_file_recursive();
        return;
    }
    Some(("scan", _)) => {
        port::async_scan_ports(1, 65535).await;
        return;
    }
    Some(("kill", sub_m)) => {
        if let Some(port) = sub_m.get_one::<u16>("port") {
            port::kill_port(*port);
        } else {
            eprintln!("❌ Please specify a port to kill.");
        }
        return;
    }
    Some(("sys", _)) => {
        status::show_status();
        return;
    }
    _ => {} // ถ้าไม่ใส่ subcommand ก็รันแบบปกติ
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
