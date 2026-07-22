import js from "@eslint/js";
import globals from "globals";
import pluginSecurity from "eslint-plugin-security";
import securityNode from "eslint-plugin-security-node";

export default [
  {
    ignores: [
      "node_modules/**",
      "reports/**",
      "coverage/**"
    ]
  },

  js.configs.recommended,

  {
    files: ["src/**/*.js", "tests/**/*.js", "tests/**/*.mjs"],

    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",

      globals: {
        ...globals.node,
        ...globals.browser,
        describe: "readonly",
        it: "readonly",
        before: "readonly",
        after: "readonly",
        beforeEach: "readonly",
        afterEach: "readonly"
      }
    },

    plugins: {
      security: pluginSecurity,
      "security-node": securityNode
    },

    rules: {
      ...pluginSecurity.configs.recommended.rules,

      "security/detect-eval-with-expression": "error",
      "security-node/detect-crlf": "error",

      "no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_"
        }
      ],

      "no-undef": "error"
    }
  }
];