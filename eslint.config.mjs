import react from 'eslint-plugin-react';
import globals from 'globals';

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
    ignores: ["**/temp.js", "config/*", "eslint.config.mjs"],
    rules: {
        'react/jsx-uses-react': 'error',
        'react/jsx-uses-vars': 'error',
    },
}];