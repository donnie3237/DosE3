import Logo from "./process/Logo.js";
import { runCommand } from "./process/runCommand.js";
import { end } from "./process/end.js";

function NextJS(name) {
	const gitNextjs = `git clone --depth 1 https://github.com/donnie3237/Nextjs-template ${name}`;
	runCommand(gitNextjs);
	Logo();
	end(name);
}

export default NextJS;
