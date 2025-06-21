use inquire::{Select, Text};

pub fn ask_name() -> String {
    Text::new("Your project name?")
        .prompt()
        .expect("Failed to read name")
}

pub fn ask_framework<'a>(options: &'a [&str]) -> &'a str {
    Select::new("Select a framework:", options.to_vec())
        .prompt()
        .expect("Failed to select a framework")
}

pub fn ask_action() -> String {
    Select::new("What would you like to do next?", vec!["Finish", "Open in VSCode"])
        .prompt()
        .expect("Failed to select an action").to_string()
}