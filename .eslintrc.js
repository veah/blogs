module.exports = {
    root: true,
    env: {
        node: true
    },
    'extends': [
        'plugin:vue/essential',
        '@vue/standard'
    ],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'vue/name-property-casing': ['error', 'kebab-case'],
        'vue/attribute-hyphenation': [
            0
        ],
        'vue/mustache-interpolation-spacing': 0,
        'vue/require-prop-types': [
            1
        ],
        'vue/require-default-prop': [
            1
        ],
        'vue/max-attributes-per-line': [
            2,
            {
                'singleline': 3,
                'multiline': {
                    'max': 1,
                    'allowFirstLine': false
                }
            }
        ],
        'no-return-assign': 0,
        'comma-dangle': 0,
        'vue/html-indent': [
            2,
            4
        ],
        'indent': [
            2,
            4
        ]
    },
    parserOptions: {
        parser: 'babel-eslint'
    }
}
