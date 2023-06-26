import chalk from "chalk";
import inquirer from 'inquirer'
import Logo from "./process/Logo.js";
import { end } from "./process/end.js";
import { runCommand } from "./process/runCommand.js";

function ExpressTS(name){
    const gitExpress_MongoDB = `git clone --depth 1 https://github.com/donnie3237/ExpressJS-Template.git ${name}`
    const gitExpress_Pg = `git clone -b PostgreSQL --depth 1 https://github.com/donnie3237/ExpressJS-Template.git ${name}`
    const gitExpress_MongoDB_vercel = `git clone -b mongo_vercel --depth 1 https://github.com/donnie3237/ExpressJS-Template.git ${name}`

    inquirer.prompt(
        { 
          type: "list",
          name: "database",
          message: "Select Database :",
          choices : [
            "MongoBD",
            "MongoDB host on vercel",
            "PostgreSQL"
          ]
        }
      ).then(awnser =>{
        console.log('  ' + chalk.bgGreen( `  With : ${awnser.database}   `))
        console.log(chalk.red("Installing.......   "))
        if(awnser.database === "MongoBD"){
            runCommand(gitExpress_MongoDB)
            Logo();
            end(name)
        }else if(awnser.database === "PostgreSQL"){
            runCommand(gitExpress_Pg)
            Logo();
            end(name)
        }else if(awnser.database === "MongoDB host on vercel"){
            runCommand(gitExpress_MongoDB_vercel)
            Logo();
            end(name)
        }else{
            console.log("error")
        }
    })
}

export default ExpressTS ;