use clap::{Command};

pub fn get_cli_args() -> clap::ArgMatches {
    Command::new("dose")
        .version("1.0")
        .about("🚀 Dose3 Starter Kit CLI")
        .subcommand_required(false)
        .subcommand(
            Command::new("check")
                .about("🔍 Check if Git and Node.js are installed"),
        )
        .subcommand(
            Command::new("ls")
                .about("📂 List files in the current directory"),
        )
        .get_matches()
}
