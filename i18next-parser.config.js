module.exports = {
  input: [
    'src/**/*.{js,jsx,ts,tsx}',
    // Exclude test files
    '!src/**/*.test.{js,jsx,ts,tsx}'
  ],
  output: 'src/i18n/locales/$LOCALE.json',
  sort: true,
  lexers: {
    js: ['JsxLexer'],
    jsx: ['JsxLexer'],
    ts: ['JsxLexer'],
    tsx: ['JsxLexer'],
  },
  namespaceSeparator: false,
  keySeparator: false,
  useKeysAsDefaultValue: true,
  createOldCatalogs: false
};