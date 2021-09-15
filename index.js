module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:array-func/recommended",
    "plugin:import/recommended",
    "plugin:promise/recommended"
  ],
  plugins: [
    "@typescript-eslint",
    "mocha-no-only",
    "import",
    "simple-import-sort",
    "no-secrets",
    "promise",
    "prettier",
  ],
  rules: {
    "no-unused-vars": ["error"],
    "comma-spacing": ["error", { before: false, after: true }],
    "mocha-no-only/mocha-no-only": ["error"],
    "no-secrets/no-secrets":"error",
    "import/no-extraneous-dependencies": "off",
    "import/no-unresolved": "off",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "prettier/prettier": "error",
  },
};
