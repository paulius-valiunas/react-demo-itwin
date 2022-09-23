require("@rushstack/eslint-patch/modern-module-resolution");
module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "plugin:@itwin/itwinjs-recommended",
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": ["@itwin"],
    "rules": {
    }
};
