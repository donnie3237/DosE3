import chalk from "chalk";
import inquirer from 'inquirer'
import { execSync } from 'child_process';
import Logo from "./LOgo/Logo.js";

function ReactTS(name){
    const gitReact_Basic = `git clone --depth 1 https://github.com/donnie3237/React-template.git ${name}`
    const gitReact_Redux = `git clone --depth 1 https://github.com/donnie3237/ExpressJS-Template.git ${name}`
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
          name: "tool",
          message: "Select tools :",
          choices : [
            "Basic",
            "With Server Side Rendering (not finish)"]
        }
      ).then(awnser =>{
        console.log('  ' + chalk.bgGreen( `  With : ${awnser.tool}   `))
        const chosen = awnser.tool ;
        console.log('');
        console.log(chalk.red("Installing.......   "))
        if(chosen === "Basic"){
            runCommand(gitReact_Basic)
        }else if(chosen === "With Server Side Rendering (not finish)"){
            console.log(chalk.red("Sorry,We are soon ....."))
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
export default ReactTS ;