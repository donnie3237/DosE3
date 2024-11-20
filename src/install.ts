import { cloneAndEnd } from "./runCommand.ts";
import { Github } from "./config.ts";

function install(framework: string, name: string) {
	switch (framework) {
	  case "Typescript":
		cloneAndEnd(Github.typescript , name)
		break;
	  case "Hono":
		cloneAndEnd(Github.hono , name)
		break;
	  case "Svelte":
		cloneAndEnd(Github.svelte , name)
		break;
	  case "ReactTS":
		cloneAndEnd(Github.react , name)
		break;
	  case "TauriJS":
		cloneAndEnd(Github.tauri , name)
		break;
	  case "ExpressTS":
		cloneAndEnd(Github.express , name)
		break;
	  case "AstroJS":
		cloneAndEnd(Github.astro , name)
		break;
	  case "NextJS":
		cloneAndEnd(Github.nextjs , name)
		break;
	  default:
		console.log("error");
	}
}

export default install;

