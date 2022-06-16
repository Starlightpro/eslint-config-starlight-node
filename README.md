# `eslint-config-starlight-node`

> Eslint configurations for every situation.

[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

## Plugins & Rulesets

Included:

- eslint-config-airbnb
- TypeScript
- [`Import`](https://github.com/benmosher/eslint-plugin-import)
- [`Prettier`](https://github.com/prettier/eslint-plugin-prettier)

## Install

1. Install everything needed by the config:

```bash
npx install-peerdeps --dev @starlightpro/eslint-config-starlight-node -y
```

2. In your package.json there should now be additional devDependencies listed.

3. Create a `.eslintrc` file in the root of your project's directory (it should live where package.json does). Your `.eslintrc` file should look like this:

```json
{
  "extends": [ "@starlightpro/eslint-config-starlight-node" ]
}
```

For TypeScript projects, use `starlight/typescript`.

```json
{
  "extends": [ "@starlightpro/eslint-config-starlight-node/typescript" ]
}
```

TypeScript users will also need a `tsconfig.json` file in their project. An empty object (`{}`) will do if this is a new project.

## Settings

If you'd like to overwrite eslint or prettier settings, you can add the rules in your `.eslintrc` file. The [ESLint rules](https://eslint.org/docs/rules/) go directly under `"rules"` while [prettier options](https://prettier.io/docs/en/options.html) go under `"prettier/prettier"`. Note that prettier rules overwrite anything in this config.

```js
{
  "extends": [
    "@starlightpro/eslint-config-starlight-node"
  ],
  "rules": {
    "no-console": 2,
    "prettier/prettier": [
      "error",
      {
        "trailingComma": "es5",
        "singleQuote": true,
        "printWidth": 120,
        "tabWidth": 8,
      }
    ]
  }
}
```

## With VS Code

Here are the instructions for VS Code:

1. Install the [ESLint package](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
2. Now we need to setup some VS Code settings via `Code/File` → `Preferences` → `Settings`. It's easier to enter these settings while editing the `settings.json` file, so click the Open (Open Settings) icon in the top right corner:

  ```js
  // These are all my auto-save configs
  "editor.formatOnSave": true,
  // turn it off for JS and JSX, we will do this via eslint
  "[javascript]": {
    "editor.formatOnSave": false
  },
  "[javascriptreact]": {
    "editor.formatOnSave": false
  },
  // show eslint icon at bottom toolbar
  "eslint.alwaysShowStatus": true,
  // tell the ESLint plugin to run on save
  "editor.codeActionsOnSave": {
    "source.fixAll": true
  }
  ```

After attempting to lint your file for the first time, you may need to click on 'ESLint' in the bottom right and select 'Allow Everywhere' in the alert window.

Finally you'll usually need to restart VS code. They say you don't need to, but it's never worked for me until I restart.
