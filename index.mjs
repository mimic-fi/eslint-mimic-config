import eslintPluginTypeScript from '@typescript-eslint/eslint-plugin'
import eslintParserTypeScript from '@typescript-eslint/parser'
import eslintConfigPrettier from 'eslint-config-prettier'
import eslintPluginImport from 'eslint-plugin-import'
import eslintPluginMochaNoOnly from 'eslint-plugin-mocha-no-only'
import eslintPluginNoSecrets from 'eslint-plugin-no-secrets'
import eslintPluginPrettier from 'eslint-plugin-prettier'
import eslintPluginSimpleImportSort from 'eslint-plugin-simple-import-sort'

export default [
  {
    ignores: ['node_modules/**', '**/dist/**', '**/.prettierrc.*'],
  },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: eslintParserTypeScript,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      '@typescript-eslint': eslintPluginTypeScript,
      prettier: eslintPluginPrettier,
      import: eslintPluginImport,
      'no-secrets': eslintPluginNoSecrets,
      'mocha-no-only': eslintPluginMochaNoOnly,
      'simple-import-sort': eslintPluginSimpleImportSort,
    },
    rules: {
      ...eslintPluginTypeScript.configs.recommended.rules,

      'prettier/prettier': [
        'error',
        {
          semi: false,
          singleQuote: true,
          trailingComma: 'es5',
          arrowParens: 'always',
          bracketSpacing: true,
          printWidth: 120,
          tabWidth: 2,
          useTabs: false,
        },
      ],

      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['error'],
      '@typescript-eslint/no-unused-expressions': 'off',
      'comma-spacing': ['error', { before: false, after: true }],
      'mocha-no-only/mocha-no-only': ['error'],
      'no-secrets/no-secrets': 'error',
      'import/named': 'off',
      'import/no-extraneous-dependencies': 'off',
      'import/no-unresolved': 'off',
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            ['^@?\\w'],
            ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
            ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
            ['^.+\\.s?css$'],
          ],
        },
      ],
      'simple-import-sort/exports': 'error',
      'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1 }],
    },
    settings: {
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: './tsconfig.json',
        },
      },
    },
  },
  eslintConfigPrettier,
]
