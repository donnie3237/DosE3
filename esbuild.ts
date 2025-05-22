const { build } = require("esbuild");
const { dependencies, peerDependencies } = require('./package.json');
const { Generator } = require('npm-dts');

// Improved type definitions generation
async function generateTypeDefinitions() {
  const generator = new Generator({
    entry: 'src/**/*.ts',    
  });
  await generator.generate(); // Use async/await for cleaner handling
}

// Combined shared configuration with enhanced comments
const sharedConfig = {
  entryPoints: ["src/**/*.ts"],
  bundle: true,
  minify: true,
};

(async () => {
  try {
    await generateTypeDefinitions(); // Generate type definitions first
    console.log("Type definitions generated");

    // CJS build
    await build({
      ...sharedConfig,
      platform: 'node',
      format: "cjs",
      outdir: "dist/cjs",
      target: "es2022",
    });
    console.log("CJS build done");

    // ESM build
    // await build({
    //   ...sharedConfig,
    //   platform: 'node',
    //   format: "esm",
    //   outdir: "dist",
    //   target: "es2022",
    // });
    // console.log("ESM build done");
  } catch (error) {
    console.error(error);
  }
})();
