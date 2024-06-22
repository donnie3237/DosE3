import { cloneAndEnd } from "./runCommand.ts";
import { Github } from "./config.ts";

function install(framework: string, name: string) {
	switch (framework) {
	  case "VueJS":
		cloneAndEnd(Github.vue , name)
		break;
	  case "Fastify":
		cloneAndEnd(Github.fastify , name)
		break;
	  case "Typescript":
		cloneAndEnd(Github.typescript , name)
		break;
	  case "Axum":
		cloneAndEnd(Github.axum , name)
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

