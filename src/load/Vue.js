import Logo from "./process/Logo.js";
import { runCommand } from "./process/runCommand.js";
import { end } from "./process/end.js";

function Vue(name){
    const gitVue = `git clone --depth 1 https://github.com/JKTheRipperTH/vue-dose3-Template.git ${name}`
    runCommand(gitVue);
    Logo();
    end(name);
}

export default Vue;