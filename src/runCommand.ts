import { execSync } from "node:child_process";
import { end } from "./end";
import { spinner } from "@clack/prompts";

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

export async function cloneAndEnd(git: string, name: string) {
  const s = spinner();
  s.start("loading......");
  const cloneCommmand = `git clone --depth 1 ${git} ${name}`;
  await runCommand(cloneCommmand);
  s.stop("Successfully install!!       ");
  console.log("Learn more : https://dose3.dossware.com/");
  end(name);
}
