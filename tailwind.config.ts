import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        prompt: ['Prompt', 'sans-serif'],
        sans: ['Prompt', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Light mode surfaces
        surface: {
          light: '#e8e8e8',
          'light-elevated': '#f0f0f0',
          dark: '#1a1a2e',
          'dark-elevated': '#232340',
        },
        // Accent colors
        accent: {
          light: '#4a90a4',
          dark: '#64b5f6',
          hover: {
            light: '#3d7a8c',
            dark: '#90caf9',
          },
        },
        // Text colors
        text: {
          primary: {
            light: '#2d3748',
            dark: '#f7fafc',
          },
          secondary: {
            light: '#4a5568',
            dark: '#cbd5e0',
          },
          muted: {
            light: '#718096',
            dark: '#a0aec0',
          },
        },
      },
      boxShadow: {
        // Neomorphic shadows for light mode
        'neo-light': '8px 8px 16px #c8c8c8, -8px -8px 16px #ffffff',
        'neo-light-sm': '4px 4px 8px #c8c8c8, -4px -4px 8px #ffffff',
        'neo-light-inset': 'inset 4px 4px 8px #c8c8c8, inset -4px -4px 8px #ffffff',
        'neo-light-pressed': 'inset 2px 2px 5px #c8c8c8, inset -2px -2px 5px #ffffff',
        // Neomorphic shadows for dark mode
        'neo-dark': '8px 8px 16px #121220, -8px -8px 16px #222240',
        'neo-dark-sm': '4px 4px 8px #121220, -4px -4px 8px #222240',
        'neo-dark-inset': 'inset 4px 4px 8px #121220, inset -4px -4px 8px #222240',
        'neo-dark-pressed': 'inset 2px 2px 5px #121220, inset -2px -2px 5px #222240',
        // Flat shadows
        'flat-light': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'flat-dark': '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-in-right': 'slideInRight 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
