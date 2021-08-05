module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
  ],
  // settings: {
  //   'import/extensions': ['.ts'],
  //   'import/parsers': {
  //     '@typescript-eslint/parser': ['.ts'],
  //   },
  // },
  rules: {
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    indent: ['error', 2],
    'comma-style': ['error', 'last'],
    'max-len': ['error', { code: 140 }],
    'linebreak-style': ['off'],
    'import/no-unresolved': ['error', { commonjs: true, amd: true }],
    // 'import/extensions': ['warn', 'always', { ignorePackages: true }],
  },
  ignorePatterns: [
    'dist/',
    'node_modules/',
  ],
};
