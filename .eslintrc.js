module.exports = {
  root: true,
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'airbnb',
  // if not add parser: babel-eslint， Unable to use static props on javascript files
  'parser': 'babel-eslint',
  // required to lint *.vue files
  plugins: [
    'html',
    'react'
  ],
  // add your custom rules here
  'rules': {
    'valid-jsdoc': 2,
    'linebreak-style': [2, 'unix'],
    'semi': [2, 'always'],

    // Disable comma-dangle unless need to support it
    'comma-dangle': 0,
    'func-names': 0,
    'id-length': 0,
    'max-len': [2, 120, 2],
    'no-param-reassign': 0,
    'arrow-body-style': 0,
    'no-loop-func': 0,
    'guard-for-in': 1,
    'react/no-did-mount-set-state': 0,
    'react/jsx-no-bind': 0,

    'import/extensions': 0,
    'import/no-extraneous-dependencies': 0,
    'react/jsx-curly-spacing': 0
  },
  'env': {
    'es6': true,
    'browser': true,
    'node': true
  },
  'globals': {
    'localStorage': true,
    'location': true,
    'Image': true,
    'Simditor': true
  },
  'ecmaFeatures': {
    'jsx': true,
    'experimentalObjectRestSpread': true
  },
};
