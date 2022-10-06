module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es6: true, 
        jest: true,
        node: true 
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:jsx-a11y/recommended",
        "plugin:react-hooks/recommended",
        "plugin:jest/recommended",
        "plugin:testing-library/react"
    ],
    
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 2018, 
        sourceType: "module"
    },
    plugins: [
        "import"
    ],
    root: true, 
    rules: {
        "import/order": [
            "warn",
            {
                alphabetize: {
                    caseInsensitive: true,
                    order: "asc"
                },
                groups: [
                    "builtin",
                    "external",
                    "index",
                    "sibling",
                    "parent",
                    "internal"
                ]
            }
        ],
        "prettier/prettier": [
            "error",
            {
              "endOfLine": "auto"
            }
          ],
        "no-console": "warn",
        "no-duplicate-imports": "warn",
        "no-unused-vars": "warn",
        "object-curly-spacing": [
            "warn",
            "always"
        ],
        quotes: [
            "warn",
            "single"
        ],
        "react/jsx-curly-spacing": [
            "warn",
            {
                allowMultiline: true,
                children: {
                    when: "always"
                },
                spacing: {
                    objectLiterals: "always"
                },
                when: "always"
            }
        ],
        "react/jsx-filename-extension": [
            "error",
            {
                extensions: [
                    ".js",
                    ".jsx",
                    ".ts",
                    ".tsx"
                ]
            }
        ],
    },
    settings: {
        react: {
            version: "detect"
        }
    }
};