use tokio::net::TcpStream;
use tokio::time::timeout;
use std::time::Duration;
use futures::stream::{FuturesUnordered, StreamExt};
use std::process::Command;

/// เช็คพอร์ตแบบ async ว่าเปิดหรือไม่
async fn is_port_open(port: u16) -> Option<u16> {
    let addr = format!("127.0.0.1:{}", port);
    let result = timeout(Duration::from_millis(100), TcpStream::connect(&addr)).await;

    if result.is_ok() {
        Some(port)
    } else {
        None
    }
}

/// สแกนพอร์ตช่วง start ถึง end แบบ concurrent
pub async fn async_scan_ports(start: u16, end: u16) {
    println!("Scanning ports {} to {}...", start, end);
    const CONCURRENT_LIMIT: usize = 500;

    let mut tasks = FuturesUnordered::new();

    for port in start..=end {
        tasks.push(is_port_open(port));

        if tasks.len() >= CONCURRENT_LIMIT {
            if let Some(res) = tasks.next().await {
                if let Some(open_port) = res {
                    println!("  --> Port {} is open.", open_port);
                }
            }
        }
    }

    while let Some(res) = tasks.next().await {
        if let Some(open_port) = res {
            println!("  --> Port {} is open.", open_port);
        }
    }

    println!("Scan complete.");
}

/// ปิดพอร์ตที่กำหนด ตามระบบปฏิบัติการ
pub fn kill_port(port: u16) {
    #[cfg(target_os = "windows")]
    {
        let cmd = format!(
            "for /f \"tokens=5\" %%a in ('netstat -aon | findstr :{}') do taskkill /PID %%a /F",
            port
        );

        let output = Command::new("cmd")
            .args(["/C", &cmd])
            .output();

        match output {
            Ok(out) => {
                if out.status.success() {
                    println!("✅ Closed port {}", port);
                } else {
                    eprintln!("⚠️ Could not close port {}", port);
                }
            }
            Err(e) => eprintln!("❌ Error: {}", e),
        }
    }

    #[cfg(not(target_os = "windows"))]
    {
        let cmd = format!("lsof -ti tcp:{} | xargs kill -9", port);

        let output = Command::new("bash")
            .arg("-c")
            .arg(cmd)
            .output();

        match output {
            Ok(out) => {
                if out.status.success() {
                    println!("✅ Closed port {}", port);
                } else {
                    eprintln!("⚠️ Could not close port {}", port);
                }
            }
            Err(e) => eprintln!("❌ Error: {}", e),
        }
    }
}
