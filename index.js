#!/usr/bin/env node
import inquirer from 'inquirer'
import chalk from 'chalk';
import install from './install.js';

const choices = [
  chalk.rgb(0,0,255)('ReactTS'),
  chalk.rgb(0,255,127)('ElectronJS'),
  chalk.yellow('TauriJS'),
  chalk.rgb(0,255,255)('SolidTS'),
  chalk.rgb(0,255,0)('ExpressTS'),
];
inquirer.prompt(
  [
    {type:"input",
    name:"name",
    message: "project name :",
    default:"dose"}
    ,{
      type: "list",
      name: "framework",
      message: "Select framework of this project :",
      choices
    }
  ]
).then ( answers => {install(answers.framework , answers.name)});
