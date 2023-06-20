import chalk from "chalk";
import inquirer from 'inquirer'
import Logo from "./process/Logo.js";
import { runCommand } from "./process/runCommand.js";

function TauriRS(name){
    const gitTauri_react = `git clone --depth 1 https://github.com/donnie3237/Tauri-template.git ${name}`
    const gitTauri_solid = `git clone --depth 1 https://github.com/donnie3237/Tauri-template.git ${name}`

    inquirer.prompt(
        { 
          type: "list",
          name: "framework",
          message: "What you want to do? :",
          choices : [
            "Desktop App",
            "Mobile App"]
        }
      ).then(awnser =>{
        console.log('  ' + chalk.bgGreen( `  With : ${awnser.framework}   `))
        const chosen = awnser.framework ;
        console.log('');
        console.log(chalk.red("Installing.......   "))
        if(chosen === "op App"){
            const checkOut = runCommand(gitTauri_solid)
            if(!checkOut) process.exit(-1)
        }else if(chosen === "Mobile App"){
            const checkOut = runCommand(gitTauri_solid)
            if(!checkOut) process.exit(-1)
        }
        Logo();
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
            })
    })
}

export default TauriRS;