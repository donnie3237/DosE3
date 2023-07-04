import Logo from "./process/Logo.js";
import { end } from "./process/end.js";
import { runCommand } from "./process/runCommand.js";

function ReactTS(name){
    const gitReact = `git clone --depth 1 https://github.com/donnie3237/React-template.git ${name}`
    runCommand(gitReact);
    Logo();
    end(name)
}

export default ReactTS ;