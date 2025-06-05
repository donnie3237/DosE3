import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import locales from "./locales.json";
import tailwind from "@astrojs/tailwind";
import solidJs from "@astrojs/solid-js";
const site = "https://dose3.dxse.site";
import sentry from '@sentry/astro';
import metaTags from "astro-meta-tags";
// https://astro.build/config
export default defineConfig({
  site,
  integrations: [ sentry({
    dsn: "https://aeffa41a918f0b3841c08cf2a726ee91@o4506351450980352.ingest.sentry.io/4506368816775168",
    sourceMapsUploadOptions: {
      project: "dose3",
      authToken: process.env.SENTRY_AUTH_TOKEN
    }
  }), starlight({
    title: "DOSE3",
    head: [{
      tag: "meta",
      attrs: {
        property: "og:image",
        content: site + "/banner.png?v=1"
      }
    }, {
      tag: "meta",
      attrs: {
        property: "twitter:image",
        content: site + "/banner.png?v=1"
      }
    },],
    customCss: ["./src/styles/costom.scss"],
    components: {
      Footer: "./src/components/Footer.astro"
    },
    logo: {
      dark: "./src/assets/dark.png",
      light: "./src/assets/light.png",
      replacesTitle: true
    },
    social: {
      github: "https://github.com/donnie3237/DosE3",
      "x.com": "https://twitter.com/Ksfdd1"
    },
    sidebar: [{
      label: "Get started",
      items: [{
        label: "Installation",
        link: "/guides/install"
      }, {
        label: "Create",
        link: "/guides/create"
      }]
    }, {
      label: "Website",
      autogenerate: {
        directory: "web"
      }
    }, {
      label: "Server",
      autogenerate: {
        directory: "server"
      }
    }, {
      label: "SSG",
      autogenerate: {
        directory: "ssg"
      }
    }, {
      label: "More",
      autogenerate: {
        directory: "more"
      }
    }, {
      label: "Native",
      items: [
      // Each item here is one entry in the navigation menu.
      {
        label: "Tauri",
        link: "/native/tauri/"
      }]
    }, {
      label: "Network Port",
      items: [{
        label: "scan",
        link: "/port/scan/"
      }, {
        label: "kill",
        link: "/port/kill/"
      }]
    }],
    locales
  }), tailwind(), solidJs(), metaTags()]
});