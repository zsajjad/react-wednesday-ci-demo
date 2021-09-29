module.exports = {
  extends: ['stylelint-config-recommended', '@linaria/stylelint'],
  rules: {
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global'],
      },
    ],
    'no-descending-specificity': null,
    'no-extra-semicolons': null,
    'declaration-block-no-shorthand-property-overrides': null,
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
      },
    },
  },
};
