/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ["-apple-system", ],
      'serif': ['ui-serif', 'Georgia', ],
      'mono': ['ui-monospace', 'SFMono-Regular', ],
    },
    extend: {
      backgroundImage: theme => ({
                 'hero-pattern': "url('/images/NationalStadium.jpg')",
                 
                }),
      height: {
        '128': '32rem',
      },
      width: {
        '128': '48rem',
      },
    },
  },
  plugins: [],
}
