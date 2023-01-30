import chalk from "chalk";
import { execSync } from 'child_process';
import inquirer from 'inquirer'
import SolidJS from "./load/SolidJS.js";

function install(Para , name){
    const gitReact = `git clone --depth 1 https://github.com/donnie3237/DosE-WebToDesktopApp ${name}`
    const gitElectron = `git clone --depth 1 https://github.com/donnie3237/DosE-WebToDesktopApp ${name}`
    const gitTauri = `git clone --depth 1 https://github.com/donnie3237/Tauri-template.git ${name}`
    const gitSolid = `git clone --depth 1 https://github.com/donnie3237/SolidTS-Template.git ${name}`
    const gitExpress = `git clone --depth 1 https://github.com/donnie3237/ExpressJS-Template.git ${name}`
    
    const runCommand = command => {
        try {
            execSync(`${command}`,{stdio:'inherit'});
        } catch (e) {
            console.error(`Failed to execute ${command}`,e)
            return false ;
        }
        return true ;
    }
    function CloneGit(gitLink){
        const checkOut = runCommand(gitLink);
        if(!checkOut) process.exit(-1)
        console.log('')
        console.log(chalk.bgGreen('       Successfully install!!       '))
        console.log(chalk.bgBlue('          Hope U Enjoyed!!          '))
        console.log(chalk.green('------------------------------------'))
        console.log(chalk.red('------------------------------------'))
        console.log(' =====      ===    //==\\\\ ||====')
        console.log('  ||  \\\\  ||   ||  ||     ||')
        console.log('  ||   || ||   ||    \\\\   ||====')
        console.log('  ||  //  ||   ||     ||  ||')
        console.log(' =====      ===   \\\\==//  ||====')
        console.log(chalk.red('------------------------------------'))
        console.log(chalk.green('------------------------------------'))
        console.log(chalk.gray('My Github : donnie3237'))
        console.log(chalk.gray('My products : https://dose-products.netlify.app/'))
        console.log("");
        const Code = runCommand(`cd ${name} && code .`);
    }
    if(Para === chalk.rgb(0,255,255)('SolidTS')){
        console.log('  '+ chalk.bgBlue('      SolidTS      '))
        SolidJS(name)
        // CloneGit(gitSolid)
      }else if(Para === chalk.rgb(0,255,127)('ElectronJS')){
        console.log("installing....... [ElectronJS]")
        CloneGit(gitElectron)
      }else if(Para === chalk.rgb(0,0,255)('ReactTS')){
        console.log("installing....... [ReactTS]")
        CloneGit(gitReact)
      }else if(Para === chalk.yellow('TauriJS')){
        console.log("installing....... [Tauri]")
        CloneGit(gitTauri)
      }else if(Para === chalk.rgb(0,255,0)('ExpressJS')){
        console.log("installing....... [ExpressJS]")
        CloneGit(gitExpress)
      }else{
        console.log("error")
      }
}
export default install;