#!/usr/bin/env node
import chalk from "chalk";
import install from "./install.js";
import inquirer from "inquirer";
import { runCommand } from "./load/process/runCommand.js";
import { scan } from "./load/port/scan.js";
import { kill } from "./load/port/kill.js";

const choices = [
	chalk.rgb(66, 184, 131)("VueJS"),
	chalk.rgb(255, 255, 255)("Fastify"),
	chalk.rgb(0, 0, 255)("ReactTS"),
	chalk.rgb(0, 255, 255)("SolidTS"),
	chalk.blue("NextJS"),
	chalk.rgb(235, 1, 40)("AstroJS"),
	chalk.yellow("TauriJS"),
	chalk.rgb(0, 255, 0)("ExpressTS"),
	chalk.rgb(84, 84, 84)("Actix-web"),
];

const args = process.argv.slice(2);
const args2 = process.argv.slice(3);

if (args.includes("-h")) {
	console.log(" https://dose3.dxse.site/");
} else if (args.includes("update")) {
	// Run npm install -g dose3@latest
	runCommand("npm install -g dose3@latest").then(()=>{
    console.log("update finished!!");
  });
} else if (args.includes("-v") || args.includes("--version")) {
	console.log("Dose3 Version : 2.1.3"); // Replace with your tool's name and version
} else if (args.includes("scan")) {
	scan();
} else if (args.includes("kill")) {
	kill(args2[0]);
} else {
	inquirer
		.prompt([
			{
				type: "input",
				name: "name",
				message: "project name :",
				default: "dose",
			},
			{
				type: "list",
				name: "framework",
				message: "Select framework of this project :",
				choices,
			},
		])
		.then((answers) => {
			install(answers.framework, answers.name);
		});
}
