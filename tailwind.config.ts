import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'


const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      '3xs': '280px',
      skills2: '310px',
      '2xs': '400px',
      xs: '480px',
      skills4: '490px',
      sm: '640px',
      md: '768px',
      skills8: '850px',
      skills4P: '950px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1600px',
    },
    colors: {
      'red': '#ff0000',
      'white': '#ffffff',
      'black': '#000000',
      'theme-dark-blue': '#0a1128',
      'theme-light-blue': '#05668D',
      'theme-green': '#a5be00',
      'theme-white': '#ebf2fa',
      'theme-gray': '#333333',
    },
    fontFamily: {
      dela: ['var(--font-dela-gothic-one)'],
      figtree: ['var(--font-figtree)'],
    },
    extend: {
      fontSize: {
        'xs': '0.75rem', //  12px
        'sm': '0.875rem', // 14px
        'base': '1rem', // 16px
        'lg': '1.125rem', // 18px
        'xl': '1.25rem', // 20px
        '2xl': '1.5rem', // 24px
        '3xl': '1.875rem', // 30px
        '4xl': '2.25rem', // 36px
        '5xl': '3rem', // 48px
        '6xl': '3.75rem', // 60px
        '7xl': '4.5rem', // 72px
        '8xl': '6rem', // 96px
        '9xl': '8rem', // 128px
      }
    },
  },
  plugins: [],
}
export default config
