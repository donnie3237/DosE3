import Logo from "./process/Logo.js";
import { end } from "./process/end.js";
import { runCommand } from "./process/runCommand.js";

function SolidJS(name){
    const gitSolid = `git clone --depth 1 https://github.com/donnie3237/SolidTS-Template.git ${name}`
    runCommand(gitSolid)
    Logo();
    end(name)
}

export default SolidJS ;