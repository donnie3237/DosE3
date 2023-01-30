import chalk from "chalk";
import { execSync } from 'child_process';
import inquirer from 'inquirer'

function Tauri(name){
    const gitTauri_Basic = `git clone --depth 1 https://github.com/donnie3237/SolidTS-Template.git ${name}`
    const gitTauri_bar = `git clone -b auth --depth 1 https://github.com/donnie3237/SolidTS-Template.git ${name}`
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
            "Basic + viteJS",
            "auth  + SolidStart"]
        }
      ).then(awnser =>{
        console.log('  ' + chalk.bgBlue( `  With :  ${awnser.framework}   `))
        runCommand(gitSolid_Auth)
      })
}

export default Tauri ;