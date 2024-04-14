import type { Config } from 'tailwindcss';

export default {
  content: ['internal/templates/*.templ'],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;
