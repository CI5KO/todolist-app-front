import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/utils/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        ok: 'var(--color-ok)',
        warning: 'var(--color-warning)',
        danger: 'var(--color-danger)',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}

export default config
