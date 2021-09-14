module.exports = {
    "env" : {
        "browser": true,
        "commonjs": true,
        "es2021": true,
        "node": true,
    },
    "extends": [
        "eslint:recommended",
    ],
    "parser": "@typescript-eslint/parser",
    "plugins": [
        "@typescript-eslint",
    ],
    "rules": {
        "indent": [
            "off"],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error"
        ],
        "semi": [
            "error",
            "always"
        ]
    },
    "parserOptions": {
        "ecmaVersion": 2015
    },
};
