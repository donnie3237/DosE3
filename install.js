import chalk from "chalk";
import ExpressTS from "./load/ExpressTS.js";
import ReactTS from "./load/ReactJS.js";
import SolidJS from "./load/SolidJS.js";
import TauriRS from "./load/TauriRS.js";
import Actix_RS from "./load/ActixRS.js";
import Astro from "./load/Astro.js";

function install(Para , name){        
  if(Para === chalk.rgb(0,255,255)('SolidTS')){
    console.log('  '+ chalk.bgRgb(0,255,255)('      SolidTS      '))
    SolidJS(name)
  }else if(Para === chalk.rgb(84, 84, 84)('Actix-web')){
    console.log('  '+ chalk.bgRgb(84,84,84)('      Actix-web      '))
    Actix_RS(name)
  }else if(Para === chalk.rgb(0,0,255)('ReactTS')){
    console.log('  '+ chalk.bgRgb(0,0,255)('      ReactTS      '))
    ReactTS(name)
  }else if(Para === chalk.yellow('TauriJS')){
    console.log('  '+ chalk.bgYellow('      TauriTS      '))
    TauriRS(name)
  }else if(Para === chalk.rgb(0,255,0)('ExpressTS')){
    console.log('  '+ chalk.bgRgb(0,255,0)('      ExpressTS      '))
    ExpressTS(name)
  }else if(Para === chalk.rgb(235, 1, 40)('AstroJS')){
    console.log('  '+ chalk.bgRgb(0,255,0)('      AstroJS      '))
    Astro(name)
  }else{
    console.log("error")
  }
}

export default install;