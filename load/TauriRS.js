import chalk from "chalk";
import inquirer from 'inquirer'
import { execSync } from 'child_process';
import Logo from "./LOgo/Logo.js";

function TauriRS(name){
    const gitTauri_react = `git clone --depth 1 https://github.com/donnie3237/Tauri-template.git ${name}`
    const gitTauri_solid = `git clone --depth 1 https://github.com/donnie3237/Tauri-template.git ${name}`
    const runCommand = command => {
        try {
            execSync(`${command}`,{stdio:'inherit'});
        } catch (e) {
            console.error(`Failed to execute ${command}`,e)
            return false ;
        }
        return true ;
    }
    inquirer.prompt(
        { 
          type: "list",
          name: "framework",
          message: "Select tool of project :",
          choices : [
            "+ReactTS",
            "+SolidTS"]
        }
      ).then(awnser =>{
        console.log('  ' + chalk.bgGreen( `  With : ${awnser.framework}   `))
        const chosen = awnser.framework ;
        console.log('');
        console.log(chalk.red("Installing.......   "))
        if(chosen === "+ReactTS"){
            const checkOut = runCommand(gitTauri_react)
            if(!checkOut) process.exit(-1)
        }else if(chosen === "+SolidTS"){
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