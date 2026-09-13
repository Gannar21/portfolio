import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      colors: {
        background: '#07071A',
        surface: '#0F0F1E',
        'surface-2': '#16162B',
        charcoal: {
          DEFAULT: '#F1F5F9',
          light: '#CBD5E1',
          muted: '#94A3B8',
          subtle: '#64748B',
        },
        blue: {
          DEFAULT: '#8B5CF6',
          600: '#7C3AED',
          subtle: 'rgba(139,92,246,0.12)',
          border: 'rgba(139,92,246,0.3)',
        },
        teal: {
          DEFAULT: '#22D3EE',
          600: '#06B6D4',
          subtle: 'rgba(34,211,238,0.1)',
          border: 'rgba(34,211,238,0.25)',
        },
        terracotta: {
          DEFAULT: '#F43F5E',
          light: '#FB7185',
          subtle: 'rgba(244,63,94,0.1)',
          border: 'rgba(244,63,94,0.28)',
        },
        border: {
          DEFAULT: 'rgba(255,255,255,0.1)',
          light: 'rgba(255,255,255,0.05)',
          hover: 'rgba(255,255,255,0.2)',
        },
      },
      maxWidth: {
        '8xl': '88rem',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        float: 'float 8s ease-in-out infinite',
        'float-delayed': 'float 10s ease-in-out 2s infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      boxShadow: {
        card: '0 1px 3px rgba(0,0,0,0.5), 0 1px 2px -1px rgba(0,0,0,0.4)',
        'card-hover': '0 8px 32px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.12)',
        'glow-blue': '0 0 24px rgba(139,92,246,0.45), 0 4px 16px rgba(0,0,0,0.4)',
        'glow-teal': '0 0 24px rgba(34,211,238,0.3), 0 4px 16px rgba(0,0,0,0.4)',
        nav: '0 1px 0 0 rgba(255,255,255,0.06)',
      },
    },
  },
  plugins: [],
};

export default config;
