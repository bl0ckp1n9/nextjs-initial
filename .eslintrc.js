module.exports = {
  root: true,
  extends: ['next/core-web-vitals', 'eslint:recommended', 'plugin:react/recommended', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended', 'plugin:storybook/recommended'],
  plugins: ['react', '@typescript-eslint', 'react-hooks', 'eslint-plugin-import-helpers', 'testing-library'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 11,
    sourceType: 'module'
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  env: {
    es6: true,
    browser: true,
    jest: true,
    node: true
  },
  rules: {
    'prettier/prettier': ['error', {
      semi: false
    }],
    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': 1,
    'newline-before-return': 2,
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 0,
    'import-helpers/order-imports': [2, {
      newlinesBetween: 'always',
      groups: [['/^next/', 'module'], '/^@/styles/', '/^@/components/', '/^@/lib/', ['parent', 'sibling', 'index']],
      alphabetize: {
        order: 'asc',
        ignoreCase: true
      }
    }],
    '@typescript-eslint/no-unused-vars': [2, {
      argsIgnorePattern: '^_'
    }]
  }
};