import { execSync } from "node:child_process";
import os from "node:os";
import { select } from "@clack/prompts";

function runCommand(command: string): boolean {
  try {
    execSync(`${command}`, { stdio: "inherit" });
  } catch (e) {
    console.error(`Failed to execute ${command}`, e);
    return false;
  }
  return true;
}

function removeGit(name: string): void {
  if (os.platform() === "win32") {
    runCommand(`cd ${name} && rd /s /q .git`);
  } else {
    runCommand(`cd ${name} && rm -rf .git`);
  }
}

export async function end(name: string): Promise<void> {
  await removeGit(name);

  const End = await select({
    message: "End : ",
    options: [
      { value: "f", label: "finish" },
      { value: "vs", label: "VScode" },
    ],
  });

  if (End === "vs") {
    runCommand(`cd ${name} && code .`);
  }
}
