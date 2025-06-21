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
        .subcommand(
            Command::new("ls2")
                .about("📁 List all files recursively with depth"),
        )
        .subcommand(
            Command::new("scan")
                .about("🔍 Scan open ports from 1 to 65535"),
        )
        .subcommand(
            Command::new("kill")
                .about("❌ Kill a specific port")
                .arg(
                    clap::Arg::new("port")
                        .short('p')
                        .long("port")
                        .value_name("PORT")
                        .help("Port number to kill")
                        .required(true)
                        .value_parser(clap::value_parser!(u16)),
                ),
        )
        .get_matches()
}
