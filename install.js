import chalk from "chalk";
import ExpressTS from "./load/ExpressTS.js";
import ReactTS from "./load/ReactJS.js";
import SolidJS from "./load/SolidJS.js";
import TauriRS from "./load/TauriRS.js";
import Actix_RS from "./load/ActixRS.js";

function install(Para , name){        
  if(Para === chalk.rgb(0,255,255)('SolidTS')){
    console.log('  '+ chalk.bgBlue('      SolidTS      '))
    SolidJS(name)
  }else if(Para === chalk.rgb(0,255,127)('Actix-web')){
    console.log('  '+ chalk.bgRed('      Actix-web      '))
    Actix_RS(name)
  }else if(Para === chalk.rgb(0,0,255)('ReactTS')){
    console.log('  '+ chalk.bgBlueBright('      ReactTS      '))
    ReactTS(name)
  }else if(Para === chalk.yellow('TauriJS')){
    console.log('  '+ chalk.bgYellow('      TauriTS      '))
    TauriRS(name)
  }else if(Para === chalk.rgb(0,255,0)('ExpressTS')){
    console.log('  '+ chalk.bgBlue('      ExpressTS      '))
    ExpressTS(name)
  }else{
    console.log("error")
  }
}

export default install;