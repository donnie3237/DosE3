#!/usr/bin/env node
import install from "./install.ts";
import { runCommand } from "./runCommand.ts";
import { choices, packageModule } from "./config.ts";
import * as p from "@clack/prompts";
import { kill, scan } from "./port.ts";
import { showDirTable } from "./lsfile.ts";

const args = process.argv.slice(2);
const args2 = process.argv.slice(3);

async function main(): Promise<void> {
  if (args.includes("update")) {
    await runCommand("npm install -g dose3@latest");
    console.log("update finished!!");
  } else if (args.includes("fmt")) {
    console.log("work in progress try again later");
    await runCommand("deno fmt");
  } else if (args.includes("-v") || args.includes("--version")) {
    console.log(packageModule.version);
  } else if (args.includes("scan")) {
    scan();
  } else if (args.includes("kill")) {
    kill(args2[0]);
  } else if (args.includes("ls")) {
    await showDirTable(".", 0)
  } else if (args.includes("ls2")) {
    showDirTable(".", 1)
  } else {
    const group: any = await p.group(
      {
        name: () => p.text({ message: "Your project name?" }),
        framework: ({ results }: { results: { name: string } }) =>
          p.select({
            message: `Select framework of ${results.name}?`,
            options: choices,
          }),
      },
      {
        onCancel: () => {
          p.cancel("Operation cancelled.");
          process.exit(0);
        },
      },
    );

    install(group.framework, group.name);
  }
}

main();

export default main;
