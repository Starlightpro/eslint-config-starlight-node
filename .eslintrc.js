module.exports = {
  extends: ['airbnb-base', 'prettier'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
  },
  env: {
    browser: false,
    node: true,
    jquery: false,
    jest: true,
  },
  rules: {
    'no-debugger': 0,
    'no-use-before-define': 'off',
    'no-alert': 0,
    'no-await-in-loop': 0,
    'no-return-assign': ['error', 'except-parens'],
    'no-restricted-syntax': [2, 'ForInStatement', 'LabeledStatement', 'WithStatement'],
    'no-unused-vars': [
      1,
      {
        ignoreRestSiblings: true,
        argsIgnorePattern: 'res|next|^err',
      },
    ],
    'prefer-const': [
      'error',
      {
        destructuring: 'all',
      },
    ],
    'arrow-body-style': [2, 'as-needed'],
    'no-unused-expressions': [
      1,
      {
        allowTaggedTemplates: true,
      },
    ],
    'no-param-reassign': [
      2,
      {
        props: false,
      },
    ],
    'no-console': 0,
    'import/prefer-default-export': 0,
    import: 0,
    'func-names': 0,
    'space-before-function-paren': 0,
    'comma-dangle': 0,
    'max-len': 0,
    'import/extensions': 0,
    'no-underscore-dangle': 0,
    'consistent-return': 0,

    /**
     * Disallow the unary operators ++ and --
     * @see http://eslint.org/docs/rules/no-plusplus
     */
    'no-plusplus': 0,
    radix: 0,
    'no-shadow': [
      2,
      {
        hoist: 'all',
        allow: ['resolve', 'reject', 'done', 'next', 'err', 'error'],
      },
    ],
    quotes: [
      2,
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    'prettier/prettier': [
      'error',
      {
        printWidth: 120,
        singleQuote: true,
        jsxSingleQuote: true,
        trailingComma: 'all',
        bracketSameLine: false,
        semi: true,
        bracketSpacing: true,
        // below line only for windows users facing CLRF and eslint/prettier error
        // non windows users feel free to delete it
        endOfLine: 'auto',
      },
    ],
    '@typescript-eslint/comma-dangle': ['off'],
    'import/no-duplicates': 'error',
    'import/newline-after-import': 'error',
    'no-restricted-globals': 'off',
    /**
     * Disallow unnecessary return await
     * @see http://eslint.org/docs/rules/no-return-await
     */
    'no-return-await': 'off',
    'import/order': [
      'error',
      {
        'newlines-between': 'ignore',
        groups: [
          // 'fs', 'path' etc.
          'builtin',
          // 'lodash', 'react' etc.
          'external',
          // 'source/components/header'
          'internal',
          // '../../components/footer'
          'parent',
          // './enums', './styles' etc.
          'sibling',
          // './'
          'index',
        ],
      },
    ],
  },
  plugins: ['prettier'],
};
