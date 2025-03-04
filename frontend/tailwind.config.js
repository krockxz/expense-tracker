/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,jsx}', // Include all HTML, JS, and JSX files in the src folder
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#4FD1C5',      // Teal color for buttons and highlights
        'secondary': '#6B7280',    // Dark gray for secondary text
        'bg-primary': '#F7F7F7',   // Light background color
        'card-bg': '#FFFFFF',      // White for cards
        'text-dark': '#333333',    // Dark text color for readability
        'text-light': '#F0F4F8',   // Light text color for headings
        'accent': '#2B6CB0',       // Blue color for hover and action items
        'gray-dark': '#2D3748',    // Dark gray for hover states
        'gray-light': '#E2E8F0',   // Light gray for secondary text
      },
    },
  },
  plugins: [],
};
