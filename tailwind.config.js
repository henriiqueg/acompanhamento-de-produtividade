module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
  theme: {
    extend: {
      backgroundImage: theme => ({
       'home': "url('/img/home-background.png')",
       'project': "url('/img/project-background.png')",
      }),
    }
  }
}
