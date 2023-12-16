import { execSync } from "child_process";
export function runCommand(command) {
    try {
        console.log("loading.......");
        execSync(`${command}`, { stdio: "pipe" });
    }
    catch (e) {
        console.error(`Failed to execute ${command}`, e);
        return false;
    }
    return true;
}
