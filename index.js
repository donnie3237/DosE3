#!/usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
import install from './install.js';
import { runCommand } from './load/process/runCommand.js';

const choices = [
  chalk.rgb(0, 0, 255)('ReactTS'),
  chalk.rgb(0, 255, 255)('SolidTS'),
  chalk.rgb(235, 1, 40)('AstroJS'),
  chalk.yellow('TauriJS'),
  chalk.rgb(0, 255, 0)('ExpressTS'),
  chalk.rgb(84, 84, 84)('Actix-web'),
];

const args = process.argv.slice(2);

if (args.includes('update')) {
  // Run npm install -g dose3@latest
  runCommand('npm install -g dose3@latest', (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return;
    }
    console.log(stdout);
  });
} else if (args.includes('-v') || args.includes('--version')) {
  console.log('Dose3 Version: 1.1.9-beta'); // Replace with your tool's name and version
} else {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'project name :',
        default: 'dose',
      },
      {
        type: 'list',
        name: 'framework',
        message: 'Select framework of this project :',
        choices,
      },
    ])
    .then((answers) => {
      install(answers.framework, answers.name);
    });
}