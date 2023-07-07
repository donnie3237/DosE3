import Logo from "./process/Logo.js";
import { end } from "./process/end.js";
import { runCommand } from "./process/runCommand.js";

function Astro(name){
    const gitAstro = `git clone --depth 1 https://github.com/donnie3237/Astro-template.git ${name}`
    runCommand(gitAstro)
    Logo();
    end(name)
}

export default Astro;