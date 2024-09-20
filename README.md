<h1 align="center">
  <a href="https://mimic.fi"><img src="https://www.mimic.fi/logo.png" alt="Mimic Finance" width="200"></a> 
</h1>

<h4 align="center">A DeFi automation platform</h4>

<p align="center">
  <a href="https://badge.fury.io/js/eslint-config-mimic">
    <img src="https://badge.fury.io/js/eslint-config-mimic.svg" alt="NPM">
  </a>
  <a href="https://discord.mimic.fi">
    <img src="https://img.shields.io/discord/747115528198332456" alt="Discord">
  </a>
  <a href="./LICENSE">
    <img src="https://img.shields.io/badge/license-GPL_3.0-green">
  </a>
</p>

<p align="center">
  <a href="#content">Content</a> •
  <a href="#setup">Setup</a> •
  <a href="#usage">Usage</a> •
  <a href="#license">License</a>
</p>

---

## Content

This repository contains the ESLint rules shared among all the Mimic repositories.

## Setup

To set up this project, you'll need [Git](https://git-scm.com) and [Yarn](https://classic.yarnpkg.com) installed. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/mimic-fi/eslint-mimic-config

# Go into the repository
$ cd eslint-mimic-config

# Install dependencies
$ yarn
```

## Usage

To use the Mimic ESLint configuration in your own project, follow these steps:

### Prerequisites

- **Node.js** version `>=18.0.0`
- **ESLint** version `>=8.21.0`

### Installation

Install the `eslint-config-mimic` package as a development dependency:

```bash
# Using npm
$ npm install --save-dev eslint-config-mimic

# Using Yarn
$ yarn add --dev eslint-config-mimic
```

### Configuration

1. **Create an ESLint configuration file**

   In the root of your project, create a file named `eslint.config.mjs`. This file will use the new [ESLint flat config](https://eslint.org/docs/latest/use/configure/configuration-files-new) system.

2. **Extend the Mimic configuration**

   Import the Mimic ESLint configuration and include it in your ESLint configuration array:

   ```javascript
   // eslint.config.mjs

    import eslintConfigMimic from "eslint-config-mimic";

    export default [
      ...eslintConfigMimic,
      // You can add your own configurations or overrides here
    ];
   ```

   If your project uses CommonJS modules, you can import the configuration as follows:

   ```javascript
   // eslint.config.mjs

   const mimicEslintConfig = require('eslint-config-mimic');

   module.exports = [
     ...mimicEslintConfig,
     // You can add your own configurations or overrides here
   ];
   ```

3. **Ensure ESLint uses the correct configuration file**

   When running ESLint, specify the configuration file if necessary:

   ```bash
   # Lint your project
   $ eslint . --config ./eslint.config.js
   ```

### Notes

- **Peer Dependencies**: All necessary ESLint plugins and configurations are included as dependencies of `eslint-config-mimic`. You don't need to install them separately.

- **Custom Rules**: You can add custom rules or override existing ones by adding additional configuration objects to the exported array in your `eslint.config.js` file.

- **Compatibility**: Ensure that your project's ESLint version supports the flat config system. If you're using an older version of ESLint, you may need to upgrade.

## License

GPL 3.0

---

> Website [mimic.fi](https://mimic.fi) &nbsp;&middot;&nbsp;
> GitHub [@mimic-fi](https://github.com/mimic-fi) &nbsp;&middot;&nbsp;
> Twitter [@mimicfi](https://twitter.com/mimicfi) &nbsp;&middot;&nbsp;
> Discord [mimic](https://discord.mimic.fi)
