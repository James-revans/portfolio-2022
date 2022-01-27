import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import svelte from "rollup-plugin-svelte";
import babel from "rollup-plugin-babel";
import livereload from "rollup-plugin-livereload";
import json from "@rollup/plugin-json";
import scss from "rollup-plugin-scss";
// import { sass as preSass } from "svelte-preprocess-sass";
import autoPreprocess from "svelte-preprocess";
import copy from "rollup-plugin-copy";
import injectProcessEnv from "rollup-plugin-inject-process-env";
import alias from "@rollup/plugin-alias";
import image from '@rollup/plugin-image';

// import dynamicImportVariables from 'rollup-plugin-dynamic-import-variables';
const globImport = require("rollup-plugin-glob-import");
const INPUT_DIR = "src";
const OUTPUT_DIR = "build";
const production = !process.env.ROLLUP_WATCH;
export default {
    inlineDynamicImports: true,
    input: `${INPUT_DIR}/main.js`,
    output: {
        format: "iife",
        file: `${OUTPUT_DIR}/bundle.js`,
        name: "app",
        sourcemap: true,
    },
    plugins: [
        svelte({
            preprocess: autoPreprocess(),
            // preprocess: {
            //     style: preSass(),
            // },
            // we'll extract any component CSS out into
            // a separate file — better for performance
            dev: !production,
            css: (css) => {
                css.write(`bundle.js.css`);
            },
        }),
        resolve({
            browser: true,
            dedupe: ["svelte"],
        }),
        babel({
            exclude: "node_modules/**",
            runtimeHelpers: true,
        }),
        commonjs(),
        copy({
            targets: [{ src: `${INPUT_DIR}/public/**/*`, dest: OUTPUT_DIR }],
        }),
        scss({
            output: `${OUTPUT_DIR}/main.css`,
        }),
        json(),
        injectProcessEnv({
            NODE_ENV: production,
        }),
        alias({
            entries: [
                { find: "shared", replacement: `./${INPUT_DIR}/shared` },
                {
                    find: "state",
                    replacement: `./${INPUT_DIR}/shared/stores/state.js`,
                },
                { find: "views", replacement: `./${INPUT_DIR}/views` },
                { find: "images", replacement: `./${INPUT_DIR}/images` },
                { find: "icons", replacement: `./${INPUT_DIR}/icons` },
                { find: "textures", replacement: `./${INPUT_DIR}/textures` },
                {
                    find: "mixins",
                    replacement: `./${INPUT_DIR}/shared/styles/mixins`,
                },
                {
                    find: "james",
                    replacement: `./${INPUT_DIR}/james/james.svelte`,
                },
                {
                    find: "jamesRagdoll",
                    replacement: `./${INPUT_DIR}/james/jamesRagdoll.svelte`,
                },
            ],
        }),
        image(),
        globImport({}),
        // dynamicImportVariables(),
        !production && livereload(`${OUTPUT_DIR}`),
        !production && serve(),
    ],
};
function serve() {
    let started = false;
    return {
        writeBundle() {
            if (!started) {
                started = true;
                require("child_process").spawn(
                    "npm",
                    ["run", "serve", "--", "--dev"],
                    {
                        stdio: ["ignore", "inherit", "inherit"],
                        shell: true,
                    }
                );
            }
        },
    };
}
