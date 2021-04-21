module.exports = {
  extends: ["react-app", "plugin:prettier/recommended"],
  plugins: ["prettier"],
  overrides: [
    {
      files: ["**/*.d.ts", "./src/pages/**/*.ts?(x)"],
    },
    {
      files: ["**/*.ts?(x)"],
      rules: {
        "@typescript-eslint/no-empty-function": "warn",
        "@typescript-eslint/no-unused-vars": [
          "warn",
          { ignoreRestSiblings: true, args: "none", varsIgnorePattern: "^_" },
        ],
      },
    },
  ],
  rules: {
    "no-var": "error",
    "prefer-const": "error",
    "no-console": ["warn", { allow: ["warn", "error"] }],
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "react/no-unescaped-entities": "off",
    "react/self-closing-comp": "error",
    "jsx-a11y/anchor-is-valid": "warn",
    "jsx-a11y/no-noninteractive-element-interactions": "warn",
    "jsx-a11y/click-events-have-key-events": "warn",
    "jsx-a11y/no-static-element-interactions": "warn",
    "import/order": "error",
    "import/no-default-export": "warn",
  },
};
