import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import terser from "@rollup/plugin-terser";

export default {
  input: "src/constable.ts",
  output: [
    {
      file: "dist/constable.js",
      format: "esm",
    },
    {
      file: "dist/constable.min.js",
      format: "esm",
      sourcemap: true,
      plugins: [terser()],
    },
  ],
  plugins: [typescript(), resolve(), commonjs()],
};
