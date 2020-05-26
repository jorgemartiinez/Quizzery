module.exports = {
  root: true,

  env: {
    node: true
  },

  extends: ["plugin:vue/strongly-recommended"],

  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'vue/no-unused-components': 'warning',
    'vue/no-unused-vars': 'warning',
    'vue/html-self-closing': 'warning',
    'vue/attributes-order': 'warning',
    'vue/order-in-components': 'warning',
    'vue/this-in-template': 'warning',
    'prettier/prettier': ['error', { singleQuote: true }],
    'arrow-spacing': ['error', { before: true, after: true }]
  },

  parserOptions: {
    parser: 'babel-eslint'
  },

  extends: ['plugin:vue/essential', '@vue/prettier']
};
