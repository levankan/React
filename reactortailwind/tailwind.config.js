/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      veryBlack: '#000000',
      black: '#232A34',
      darkBlue: '#262E38',
      lightGrey: '#969FAD',
      mediumGrey: '#7C8798',
      orange: '#FC7614',
      pureWhite: '#FFFFFF',
      veryDarkBlue: '#131518',
    },

    // fontSize: {
    //   xl:	'0.063rem',
    //   xl2: '0.125rem',
    //   xl2:	'0.188rem',
    //   xl4:	1,
    //   xl5:	1.25,
    //   xl6:	1.5,
    //   xl7:	1.75,
    //   xl8:	2,
    // }
  },
  plugins: [],
}

