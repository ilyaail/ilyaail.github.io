module.exports = {
  root: true,
  env: {
    es2020: true,
    browser: true,
    node: true,
  },
  extends: ['plugin:vue/essential', 'eslint:recommended', 'prettier/vue'],
  plugins: ['vue', 'prettier'],
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2020,
  },
  rules: {
    'class-methods-use-this': 'off',
    'no-use-before-define': 'off',
    'consistent-return': 'off',
    'no-plusplus': 'off',
   
    'no-underscore-dangle': 'off',
    'no-throw-literal': 'off',
    'no-undef': 'off',
  },
};
