module.exports = {
  env: {
    node: true,
    es2021: true,
  },
  extends: ["airbnb-base"],
  rules: {
    "no-console": "off",
    "no-unused-vars": ["warn"],
    "linebreak-style": 0,
    "import/extensions": "off",
    quotes: "off",
    "max-len": [
      "error",
      {
        code: 120,
      },
    ],
  },
};
