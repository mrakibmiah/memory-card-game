module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    'standard'
  ],
  globals: {
    netent:'writable'
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {
    semi: ["error", "always"]
  }
}