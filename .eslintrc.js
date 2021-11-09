module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  rules: {
    "react/jsx-filename-extension": [
      "error",
      {
        extensions: [".js", ".jsx"],
      },
    ],
    eqeqeq: "off",
    "prefer-destructuring": [
      "error",
      {
        array: true,
        object: true,
      },
      {
        enforceForRenamedProperties: false,
      },
    ],
    "no-console": 0,
  },
  extends: ["airbnb-base", "eslint:recommended", "plugin:prettier/recommended"],
};
