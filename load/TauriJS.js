import chalk from "chalk";
import { execSync } from 'child_process';
import inquirer from 'inquirer'
import Logo from "./LOgo/Logo";

function TauriJS(name){
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
        console.log('  ' + chalk.bgBlue( `  With :  ${awnser.framework}   `))
        const awn = awnser.framework
        if(awn === "+ReactTS"){
          const checkOut = runCommand(gitTauri_react)
          if(!checkOut) process.exit(-1)
        }else if(awn === "+SolidTS"){
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

export default TauriJS ;