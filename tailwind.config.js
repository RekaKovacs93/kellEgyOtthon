/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        'xs': '375px', // Extra small devices (like smaller mobile phones)
        'sm': '640px', // Small devices (like most mobile phones)
        'md': '768px', // Medium devices (like tablets)
        'lg': '1100px', // Large devices (like laptops)
        'xl': '1280px', // Extra-large devices (like desktops)
        // Add more breakpoints as needed
      },
      colors: {
        customBlack: 'rgba(96, 92, 89)', // Adjust opacity as needed
      }
    },
    letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.05em',
      // widest: '.1em',
      widest: '.25em',
    }
  },
  plugins: [],
}
