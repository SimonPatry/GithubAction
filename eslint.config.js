import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "module",
      ecmaVersion: 2021,
      globals: {
        ...globals.browser,  // Include browser globals
        ...globals.node,     // Include Node.js globals
        ...globals.jest,     // Include Jest globals
        // includes manually set globals for jest
        incrementTestCount: "readonly",
        getTestCount: "readonly",
        resetTestCount: "readonly",
        testCount: "readonly",
      },
    },
    rules: {
      "constructor-super": "error",
    },
  },
  pluginJs.configs.recommended,  // Include recommended rules
];
