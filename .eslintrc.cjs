/** @type { import('eslint').Linter.Config } */
const config = {
  root: true,
  extends: [
    'next/core-web-vitals',
    'prettier',
    'plugin:tailwindcss/recommended',
  ],
  plugins: ['tailwindcss'],
  rules: {
    'tailwindcss/no-custom-classname': 'off',
    'tailwindcss/classnames-order': 'error',
  },
  settings: {
    tailwindcss: {
      calless: ['cn', 'cva'],
      config: 'tailwind.config.ts',
    },
    next: {
      rootDir: true,
    },
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
    },
  ],
}

export default config
