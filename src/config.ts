export const Github = {
  react: "https://github.com/donnie3237/React-template2.git",
  svelte: "https://github.com/donnie3237/svelte-template.git",
  express: "https://github.com/donnie3237/ExpressJS-Template.git",
  hono: "https://github.com/donnie3237/Hono-template.git",
  gin: "https://github.com/donnie3237/Gin-template.git",
  nextjs: "https://github.com/donnie3237/Nextjs-template",
  astro: "https://github.com/donnie3237/Astro-template.git",
  tauri: "https://github.com/donnie3237/Tauri-template.git",
  typescript: "https://github.com/JKTheRipperTH/vue-dose3-Template.git",
} as const;

import * as Pkg from "../package.json";
export const packageModule = Pkg;

interface Choice {
  value: string;
  label: string;
}

export const choices: Choice[] = [
  { value: "ReactTS", label: "ReactTS" },
  { value: "Svelte", label: "Svelte" },
  { value: "NextJS", label: "NextJS" },
  { value: "AstroJS", label: "AstroJS" },
  { value: "TauriJS", label: "TauriJS" },
  { value: "ExpressTS", label: "ExpressTS" },
  { value: "Hono", label: "Hono" },
  { value: "Gin", label: "Gin" },
  { value: "Typescript", label: "Typescript" },
];
