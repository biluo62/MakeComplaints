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
    'no-restricted-syntax': 0, // 允许使用for in
    'react/no-did-mount-set-state': 0,
    'react/jsx-no-bind': 0,
    'dot-notation': 1,
    'no-multi-assign': 1,
    'wrap-iife': 1,
    'no-useless-escape': 1,
    'no-self-compare': 1,
    'no-plusplus': 1,
    'import/first': 1,
    'import/extensions': 0,
    'import/prefer-default-export': 0, // 默认使用export default
    'import/no-dynamic-require': 1,
    'global-require': 0,
    'no-unused-vars': 1,

    'react/jsx-curly-spacing': 0,
    'react/require-default-props': 0, // 与react/prop-types冲突，保留react/prop-types验证
    'react/prefer-stateless-function': 1,
    'react/no-unused-prop-types': 1,
    'react/prop-types': 1,
    "react/sort-comp": [1, {
      "order": [
        "static-methods",
        "lifecycle",
        "everything-else",
        "/^_?on.+$/",
        "/^_?render.+$/",
        "render"
      ],
      "groups": {
        "lifecycle": [
          "displayName",
          "propTypes",
          "defaultProps",
          "state",
          "constructor",
          "componentWillMount",
          "componentDidMount",
          "componentWillReceiveProps",
          "shouldComponentUpdate",
          "componentWillUpdate",
          "componentDidUpdate",
          "componentWillUnmount"
        ]
      }
    }]

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
  'exclude': [
    'client/utils/DeviceUtils.js'
  ]
};
