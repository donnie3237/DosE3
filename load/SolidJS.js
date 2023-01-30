import chalk from "chalk";
import inquirer from 'inquirer'
import { execSync } from 'child_process';
import Logo from "./LOgo/Logo.js";

function SolidJS(name){
    const gitSolid_Basic = `git clone --depth 1 https://github.com/donnie3237/SolidTS-Template.git ${name}`
    const gitSolid_Auth = `git clone -b auth --depth 1 https://github.com/donnie3237/SolidTS-Template.git ${name}`
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
            "Auth  + SolidStart"]
        }
      ).then(awnser =>{
        console.log('  ' + chalk.bgGreen( `  With : ${awnser.framework}   `))
        const chosen = awnser.framework ;
        console.log('');
        console.log(chalk.red("Installing.......   "))
        if(chosen === "Basic + viteJS"){
            const checkOut = runCommand(gitSolid_Basic)
            if(!checkOut) process.exit(-1)
        }else if(chosen === "Auth  + SolidStart"){
            const checkOut = runCommand(gitSolid_Auth)
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

export default SolidJS ;