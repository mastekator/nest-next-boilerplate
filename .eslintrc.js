module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        project: 'tsconfig.json',
        sourceType: 'module'
    },
    plugins: ['@typescript-eslint/eslint-plugin', 'react'],
    extends: [
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:@typescript-eslint/recommended',
        'eslint:recommended',
        'google'
    ],
    root: true,
    env: {
        jest: true,
        es6: true,
        browser: true,
        node: true
    },
    ignorePatterns: ['.eslintrc.js', 'node_modules'],
    'rules': {
        'max-len': [
            'error',
            120,
            4,
            {
                'ignoreTrailingComments': true,
                'ignoreComments': true,
                'code': 120,
                'ignoreUrls': true,
                'ignoreTemplateLiterals': true,
                'ignoreStrings': true,
                'ignoreRegExpLiterals': true
            }
        ],
        'semi': 'off',
        'arrow-parens': 'off',
        'comma-dangle': 'off',
        'indent': 'off',
        'require-jsdoc': 'off',
        'operator-linebreak': 'off',
        'valid-jsdoc': 'off',
        'space-before-function-paren': 'off',
        'react/prop-types': 'off',
        'linebreak-style': 'off'
    },
    globals: {
        JSX: 'readonly'
    }
}
