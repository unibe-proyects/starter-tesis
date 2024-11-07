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
        'react/jsx-uses-react': 'error', // Verificar el uso de React en JSX
        'react/jsx-uses-vars': 'error', // Verificar el uso de variables en JSX
        'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }], // Evitar variables no utilizadas
        'quotes': ['error', 'single', { avoidEscape: true }], // Uso de comillas simples
        'semi': ['error', 'always'], // Requiere punto y coma al final de cada línea
        'indent': ['error', 2], // Indentación de 2 espacios
        'no-console': 'warn', // Advertencia sobre el uso de console.log para mantener limpio el código
        'eqeqeq': ['error', 'always'], // Uso de igualdad estricta (===)
        'curly': ['error', 'all'], // Requiere llaves para bloques de control
        'comma-dangle': ['error', 'always-multiline'], // Coma final en listas multilínea para mantener el formato
    },
}];