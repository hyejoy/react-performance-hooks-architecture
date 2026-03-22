import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{js,jsx}"],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true },
        sourceType: "module",
      },
    },
    rules: {
      // 변수
      "no-unused-vars": ["warn", { varsIgnorePattern: "^[A-Z]" }],
      "no-console": "off",

      // React
      "react-hooks/rules-of-hooks": "error", // 훅 규칙은 error 유지
      "react-hooks/exhaustive-deps": "warn",
      "react-refresh/only-export-components": "off",
      "react-hooks/refs": "off",
      "no-undef": "error",
      // 코드 스타일 (취향껏)
      "no-var": "error", // var 금지
      "prefer-const": "warn", // let 대신 const 권장
      eqeqeq: "warn", // == 대신 === 권장
    },
  },
]);
