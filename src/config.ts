import os from 'node:os'

export const Github = {
    react : "https://github.com/donnie3237/React-template.git",
    vue : "https://github.com/JKTheRipperTH/vue-dose3-Template.git",
    express : "",
    axum : "",
    fastify : "https://github.com/JKTheRipperTH/fastify-dose3-Template.git",
    nextjs : "https://github.com/donnie3237/Nextjs-template",
    astro : "https://github.com/donnie3237/Astro-template.git" ,
    tauri : "https://github.com/donnie3237/Tauri-template.git",
    typescript : "https://github.com/JKTheRipperTH/vue-dose3-Template.git"
} as const

import * as GG from "../package.json" 
export  const packageModule = GG;

interface Choice {
	value: string;
	label: string;
}
export const choices : Choice[]  = [
	{ value: 'VueJS', label: 'VueJS' },
	{ value: 'Fastify', label: 'Fastify' },
	{ value: 'ReactTS', label: 'ReactTS' },
	{ value: 'NextJS', label: 'NextJS' },
	{ value: 'AstroJS', label: 'AstroJS' },
	{ value: 'TauriJS', label: 'TauriJS' },
	{ value: 'ExpressTS', label: 'ExpressTS' },
	{ value: 'Axum', label: 'Axum' },
	{ value: 'Typescript', label: 'Typescript' },
];