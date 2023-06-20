import inquirer from "inquirer"
import chalk from 'chalk'
import { execSync } from 'child_process';

const runCommand = command => {
    try {
        execSync(`${command}`,{stdio:'inherit'});
    } catch (e) {
        console.error(`Failed to execute ${command}`,e)
        return false ;
    }
    return true ;
}

export function end(name){

    inquirer.prompt(
        { 
          type: "list",
          name: "con",
          message: chalk.green("End : "),
          choices : [
            "finish",
            "VScode"]
        }).then(awn =>{
            if(awn.con === "VScode"){
                runCommand(`cd ${name} && code .`)
            }
        }
    )
}