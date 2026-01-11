/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'chapter-blue': '#4A6D8C',
        // O con variantes:
        'chapter': {
          50: '#f0f4f8',
          100: '#d9e4ee',
          200: '#b3c9dd',
          300: '#8daecb',
          400: '#6793ba',
          500: '#4A6D8C',  // Color principal
          600: '#3c5770',
          700: '#2e4154',
          800: '#1f2c38',
          900: '#0f161c',
        }
      },
      // Definir keyframes personalizados
      keyframes: {
        fadeIn: {
          '0%': {
            opacity: '0',
            transform: 'translateY(10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        // Puedes agregar más animaciones aquí
        slideIn: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          },
        },
        slideDown: {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
      },
      // Definir las animaciones con duración y timing
      animation: {
        fadeIn: 'fadeIn 0.3s ease-in-out',
        slideIn: 'slideIn 0.3s ease-out',
        slideDown: 'slideDown 0.2s ease-out',
        // Variantes con diferentes duraciones
        'fadeIn-fast': 'fadeIn 0.15s ease-in-out',
        'fadeIn-slow': 'fadeIn 0.5s ease-in-out',
      },
    },
  },
  plugins: [],
}

// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       keyframes: {
//         'modal-appear': {
//           '0%': { opacity: '0', transform: 'scale(0.95)' },
//           '100%': { opacity: '1', transform: 'scale(1)' }
//         }
//       },
//       animation: {
//         'modal-appear': 'modal-appear 0.2s ease-out'
//       },
//       colors: {
//         'chapter-blue': '#4A6D8C',
//         // O con variantes:
//         'chapter': {
//           50: '#f0f4f8',
//           100: '#d9e4ee',
//           200: '#b3c9dd',
//           300: '#8daecb',
//           400: '#6793ba',
//           500: '#4A6D8C',  // Color principal
//           600: '#3c5770',
//           700: '#2e4154',
//           800: '#1f2c38',
//           900: '#0f161c',
//         }
//       }
//     }
//   },
//   plugins: [],
// }
