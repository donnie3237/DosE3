use clap::{Command, Arg, ArgAction};

pub fn get_cli_args() -> clap::ArgMatches {
    Command::new("dose")
        .version("1.0")
        .about("🚀 Dose3 Starter Kit CLI")
        .subcommand_required(true) // <--- เพิ่มบรรทัดนี้
        .arg_required_else_help(true) // <--- เพิ่มบรรทัดนี้ด้วยจะดีมาก
        .disable_version_flag(true) // 1. ปิด flag --version/-V อัตโนมัติ
        .arg(                       // 2. สร้าง flag ของเราเอง
            Arg::new("version")
                .short('v') // 3. กำหนดให้ใช้ -v (ตัวพิมพ์เล็ก)
                .long("version")
                .action(ArgAction::Version) // 4. บอกว่า action ของ flag นี้คือการแสดงเวอร์ชั่น
                .help("Prints version information")
        )
        .subcommand(
            Command::new("init")
                .about("🛠️  Initialize a new project")
        )
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
        .subcommand(
            Command::new("sys")
                .about("🖥️  Show system status"),
        )
        .subcommand(
            Command::new("deps")
            .about("🔧 Check dependencies like Git and Node.js")
        )
        .subcommand(
            Command::new("fmt")
                .about("📝 Format files programmatically"),
        )
        .get_matches()
}
