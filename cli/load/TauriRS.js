import Logo from "./process/Logo.js";
import { runCommand } from "./process/runCommand.js";
import { end } from "./process/end.js";
function TauriRS(name) {
    const gitTauri = `git clone --depth 1 https://github.com/donnie3237/Tauri-template.git ${name}`;
    runCommand(gitTauri);
    Logo();
    end(name);
}
export default TauriRS;
