import Logo from "./process/Logo.js";
import { runCommand } from "./process/runCommand.js";
import { end } from "./process/end.js";

function VueFastify(name){
    const gitTauri = `git clone --depth 1 https://github.com/JKTheRipperTH/fastify-dose3-Template.git ${name}`
    runCommand(gitTauri);
    Logo();
    end(name);
}

export default VueFastify;