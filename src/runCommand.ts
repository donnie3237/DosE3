import { execSync } from "node:child_process";
import { end } from "./end";

export function runCommand(command: string) {
	try {
		console.log("loading.......");
		execSync(`${command}`, { stdio: "pipe" });
		return true;
	} catch (e) {
		console.error(`Failed to execute ${command}`, e);
		return false;
	}
}

export async function cloneAndEnd(git : string , name : string) {
	const cloneCommmand = `git clone --depth 1 ${git} ${name}`;
	await runCommand(cloneCommmand);
	console.log("");
	console.log("Successfully install!!       ");
	console.log("Learn more : https://dose3.dxse.site/");
	console.log("");
	end(name);
}
