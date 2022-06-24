module.exports= {
    root: true,
    env: {
        browser: true,
        amd: true,
        es6: true
    },
    extends: [
        "eslint:recommended",
        "plugin:prettier/recommended",
        "next",
        "next/core-web-vitals"
    ],
    rules: {
        "semi": [0
        ],
        "prettier/prettier": 0,
        "react/no-unescaped-entities": "off",
        "@next/next/no-page-custom-font": "off",
    }
    
};