import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      '3xs': '280px',
      '2xs': '400px',
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1600px',
    },
    colors: {
      'red': '#ff0000',
      'white': '#ffffff',
      'black': '#000000',
      'theme-dark-blue': '#0a1128',
      'theme-light-blue': '#3d5a80',
      'theme-green': '#a5be00',
    },
    fontFamily: {
      dela: ['var(--font-dela-gothic-one)'],
      figtree: ['var(--font-figtree)'],
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
