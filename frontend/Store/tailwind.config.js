/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './app/**/*.{js,ts,jsx,tsx}', // Include all the files in the app directory
      './components/**/*.{js,ts,jsx,tsx}', // Include all the files in the components directory
      './pages/**/*.{js,ts,jsx,tsx}', // If you have a pages directory, include it as well
    ],
    theme: {
      extend: {
        // You can extend the default theme here
        colors: {
          primary: '#5A67D8', // Example custom color
          secondary: '#9F7AEA',
        },
      },
    },
    plugins: [],
    // NativeWind specific configurations (if needed):
    corePlugins: require('nativewind/tailwind').corePlugins,
  };
  