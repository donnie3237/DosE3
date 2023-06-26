import chalk from "chalk";
import inquirer from 'inquirer'
import Logo from "./process/Logo.js";
import { end } from "./process/end.js";
import { runCommand } from "./process/runCommand.js";

function ReactTS(name){
    const gitReact_Basic = `git clone --depth 1 https://github.com/donnie3237/React-template.git ${name}`
    const gitReact_SSR = `git clone -b astro --depth 1 https://github.com/donnie3237/ExpressJS-Template.git ${name}`

    inquirer.prompt(
        { 
          type: "list",
          name: "tool",
          message: "Select tools :",
          choices : [
            "Basic",
            "+AstroJS"]
        }
      ).then(awnser =>{
        console.log('  ' + chalk.bgGreen( `  With : ${awnser.tool}   `))
        const chosen = awnser.tool ;
        console.log('');
        console.log(chalk.red("Installing.......   "))
        if(chosen === "Basic"){
            runCommand(gitReact_Basic);
            Logo();
            end(name)
        }else if(chosen === "+AstroJS"){
            runCommand(gitReact_SSR);
            Logo();
            end(name)
        }
    })
}

export default ReactTS ;