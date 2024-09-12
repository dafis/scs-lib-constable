import cjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import tsc from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import terser from "@rollup/plugin-terser";

export default [
  {
    input: "src/constable.ts",
    output: [
      {
        file: "dist/constable.umd.js",
        format: "umd",
        name: "constable",
      },
      {
        file: "dist/constable.umd.min.js",
        format: "umd",
        name: "constable",
        plugins: [terser()],
      },
      {
        file: "dist/constable.cjs.js",
        format: "cjs",
      },
      {
        file: "dist/constable.es.js",
        format: "es",
      },
    ],
    plugins: [
      cjs(),
      resolve({
        moduleDirectories: ["node_modules"],
      }),
      tsc(),
    ],
    external: [],
  },
  {
    input: './dist/dts/src/constable.d.ts',
    output: [{ file: 'dist/constable.d.ts', format: 'es' }],
    plugins: [dts()],
  },
];
