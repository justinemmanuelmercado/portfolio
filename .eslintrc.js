module.exports = {
  env: {
    es6: true,
    node: true,
  },
  'ignorePatterns': ['**/data/*.json', '*.js', '**/src/**/*.sass', '**/src/**/*.jpg'],
  extends: [
    'airbnb-base',
    'plugin:react/recommended'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint'
  ],
  rules: {
    'import/prefer-default-export': 'off',
    'import/extensions': 'off',
    'arrow-body-style': 'off',
    'no-unused-vars': 'off'
  },
  settings: {
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      }
    }
  }
};
