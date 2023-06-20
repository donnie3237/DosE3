import chalk from "chalk";
import inquirer from 'inquirer'
import Logo from "./process/Logo.js";
import { end } from "./process/end.js";
import { runCommand } from "./process/runCommand.js";

function SolidJS(name){
    const gitSolid_Basic = `git clone --depth 1 https://github.com/donnie3237/SolidTS-Template.git ${name}`
    const gitSolid_SSR = `git clone -b auth --depth 1 https://github.com/donnie3237/SolidTS-Template.git ${name}`

    inquirer.prompt(
        { 
          type: "list",
          name: "framework",
          message: "Select tool of project :",
          choices : [
            "Basic + viteJS",
            "+ AstroJS"]
        }
      ).then(awnser =>{
        console.log('  ' + chalk.bgGreen( `  With : ${awnser.framework}   `))
        const chosen = awnser.framework ;
        console.log('');
        console.log(chalk.red("Installing.......   "))
        if(chosen === "Basic + viteJS"){
            const checkOut = runCommand(gitSolid_Basic)
            if(!checkOut) process.exit(-1)
        }else if(chosen === "+ AstroJS"){
            const checkOut = runCommand(gitSolid_SSR)
            if(!checkOut) process.exit(-1)
        }
        Logo();
        end(name)
    })
}

export default SolidJS ;