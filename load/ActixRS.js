import Logo from "./process/Logo.js";
import { runCommand } from "./process/runCommand.js";
import { end } from "./process/end.js";

function Actix_RS(name){
    const gitActix_Mongodb = `git clone --depth 1 https://github.com/donnie3237/Actix-web-template.git ${name}`
    runCommand(gitActix_Mongodb)
    Logo()
    end(name)
}

export default Actix_RS;