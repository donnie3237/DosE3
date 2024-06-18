import { cloneAndEnd } from "./runCommand.ts";
import { Github } from "./config.ts";

function install(framework: string, name: string) {
	switch (framework) {
	  case "VueJS":
		cloneAndEnd(Github.vue , name)
		break;
	  case "Fastify":
		cloneAndEnd(Github.vue , name)
		break;
	  case "SolidTS":
		cloneAndEnd(Github.vue , name)
		break;
	  case "Actix-web":
		cloneAndEnd(Github.vue , name)
		break;
	  case "ReactTS":
		cloneAndEnd(Github.vue , name)
		break;
	  case "TauriJS":
		cloneAndEnd(Github.vue , name)
		break;
	  case "ExpressTS":
		cloneAndEnd(Github.vue , name)
		break;
	  case "AstroJS":
		cloneAndEnd(Github.astro , name)
		break;
	  default:
		console.log("error");
	}
}

export default install;

