import react from 'eslint-plugin-react';

export default [{
    files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
    plugins: {
        react,
    },
    languageOptions: {
        parserOptions: {
            ecmaFeatures: {
                jsx: true,
            },
        },
    },
    ignores: ["**/temp.js", "config/*", "eslint.config.mjs"], // Archivos y carpetas ignorados
    rules: {
        'quotes': ['error', 'single', { avoidEscape: true }],
        'semi': ['error', 'always'],
        'indent': ['error', 2],
        'no-console': 'warn',
        'eqeqeq': ['error', 'always'],
        'curly': ['error', 'all'],
        'comma-dangle': ['error', 'always-multiline'],
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',
        'no-debugger': 'warn',
        'prefer-const': 'error',
        'no-magic-numbers': ['warn', { ignore: [0, 1] }],
        '@typescript-eslint/explicit-module-boundary-types': 'off',
    },
}];