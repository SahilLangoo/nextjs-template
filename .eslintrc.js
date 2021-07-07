module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'prettier',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'next',
    'next/core-web-vitals'
  ],
  plugins: ['react', 'react-hooks', 'import', 'jsx-a11y', 'prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    'linebreak-style': ['error', 'unix'],
    //'comma-dangle': ['warn', 'never'],
    //"@next/next/no-page-custom-font": "off",
    //'@next/next/no-img-element  ': 'warn',
    //"react/no-unescaped-entities": "off",
    //'react-hooks/rules-of-hooks': 'error',
    //'react-hooks/exhaustive-deps': 'warn',
    //'react/destructuring-assignment': 'off', // Vscode doesn't support automatically destructuring, it's a pain to add a new variable
    'jsx-a11y/anchor-is-valid': 'off', // Next.js use his own internal link system
    //'react/require-default-props': 'off', // Allow non-defined react props as undefined
    // "import/order": [
    //   "error",
    //   {
    //     "groups": ["builtin", "external", "internal"],
    //     "pathGroups": [
    //       {
    //         "pattern": "react",
    //         "group": "external",
    //         "position": "before"
    //       }
    //     ],
    //     "pathGroupsExcludedImportTypes": ["react"],
    //     "newlines-between": "always",
    //     "alphabetize": {
    //       "order": "asc",
    //       "caseInsensitive": true
    //     }
    //   }
    // ],
    // "import/prefer-default-export": "off",
  }

}
