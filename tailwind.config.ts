import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },
      // screens: {
      //   sm: '480px',
      //   md: '600px',
      //   lg: '976px',
      //   xl: '1000px',
      // },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
      }
    }
  },
  plugins: [],
}
export default config
