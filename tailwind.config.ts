import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['var(--font-inter)', 'sans-serif'],
        'heading': ['var(--font-poppins)', 'sans-serif'],
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        accent: 'var(--accent)',
        highlight: 'var(--highlight)',
        'primary-light': '#2d5a6b',
        'primary-dark': '#1e3a44',
        'accent-light': '#f0d17a',
        'accent-dark': '#d4b15a',
        'highlight-light': '#f7b580',
        'highlight-dark': '#e8944a',
      },
      animation: {
        'blob': 'blob 7s infinite',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'fade-in-left': 'fadeInLeft 0.8s ease-out forwards',
        'fade-in-right': 'fadeInRight 0.8s ease-out forwards',
      },
      keyframes: {
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(30px, -50px) scale(1.1)',
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.9)',
          },
          '100%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
        },
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fadeInLeft: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        fadeInRight: {
          '0%': {
            opacity: '0',
            transform: 'translateX(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
      },
      backgroundImage: {
        'ikat': "url('/ikat-bg.svg')",
        'ikat-pattern': `
          linear-gradient(45deg, rgba(38, 70, 83, 0.03) 1px, transparent 1px),
          linear-gradient(-45deg, rgba(38, 70, 83, 0.03) 1px, transparent 1px),
          radial-gradient(circle at 25% 25%, rgba(233, 196, 106, 0.02) 1px, transparent 1px),
          radial-gradient(circle at 75% 75%, rgba(244, 162, 97, 0.02) 1px, transparent 1px),
          linear-gradient(90deg, rgba(38, 70, 83, 0.015) 1px, transparent 1px),
          linear-gradient(0deg, rgba(38, 70, 83, 0.015) 1px, transparent 1px)
        `,
        'ikat-header': `
          linear-gradient(45deg, rgba(38, 70, 83, 0.06) 1px, transparent 1px),
          linear-gradient(-45deg, rgba(38, 70, 83, 0.06) 1px, transparent 1px),
          radial-gradient(circle at 20% 20%, rgba(233, 196, 106, 0.04) 1px, transparent 1px),
          radial-gradient(circle at 80% 80%, rgba(244, 162, 97, 0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(38, 70, 83, 0.03) 1px, transparent 1px),
          linear-gradient(0deg, rgba(38, 70, 83, 0.03) 1px, transparent 1px)
        `,
        'ikat-card': `
          radial-gradient(circle at 30% 30%, rgba(38, 70, 83, 0.02) 1px, transparent 1px),
          radial-gradient(circle at 70% 70%, rgba(233, 196, 106, 0.015) 1px, transparent 1px)
        `,
      },
      backgroundSize: {
        'ikat-pattern': '60px 60px, 60px 60px, 40px 40px, 40px 40px, 20px 20px, 20px 20px',
        'ikat-header': '50px 50px, 50px 50px, 35px 35px, 35px 35px, 18px 18px, 18px 18px',
        'ikat-card': '50px 50px, 60px 60px',
      },
      backgroundPosition: {
        'ikat-pattern': '0 0, 30px 30px, 0 0, 20px 20px, 0 0, 0 0',
        'ikat-header': '0 0, 25px 25px, 0 0, 17px 17px, 0 0, 0 0',
        'ikat-card': '0 0, 25px 25px',
      },
    },
  },
  plugins: [],
};

export default config;
