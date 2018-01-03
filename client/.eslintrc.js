module.exports = {
  extends: ['react-app', 'prettier', 'plugin:react/recommended'], // extending recommended config and config derived from eslint-config-prettier
  plugins: ['prettier'], // activating esling-plugin-prettier (--fix stuff)
  rules: {
    'prettier/prettier': [ // customizing prettier rules (unfortunately not many of them are customizable)
      'error',
      {
        singleQuote: true,
        semi: false,
        trailingComma: 'none',
      },
    ],
    eqeqeq: ['error', 'always'], // adding some custom ESLint rules
  },
};
