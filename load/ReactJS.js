import chalk from "chalk";
import inquirer from 'inquirer'
import { execSync } from 'child_process';
import Logo from "./LOgo/Logo.js";

function ReactTS(name){
    const gitReact_Basic = `git clone --depth 1 https://github.com/donnie3237/ExpressJS-Template.git ${name}`
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
            "Basic (not finish)",
            "With redux (not finish)"]
        }
      ).then(awnser =>{
        console.log('  ' + chalk.bgGreen( `  With : ${awnser.tool}   `))
        const chosen = awnser.tool ;
        console.log('');
        console.log(chalk.red("Installing.......   "))
        if(chosen === "Basic (not finish)"){
            console.log(chalk.red("Sorry,We are soon ....."))
        }else if(chosen === "With redux (not finish)"){
            console.log(chalk.red("Sorry,We are soon ....."))
        }
    })
}
export default ReactTS ;