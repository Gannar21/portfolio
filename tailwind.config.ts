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
        background: '#FAFAF8',
        surface: '#FFFFFF',
        charcoal: {
          DEFAULT: '#111827',
          light: '#374151',
          muted: '#6B7280',
          subtle: '#9CA3AF',
        },
        blue: {
          DEFAULT: '#1E40AF',
          600: '#2563EB',
          subtle: '#EFF6FF',
          border: '#BFDBFE',
        },
        teal: {
          DEFAULT: '#0F766E',
          600: '#0D9488',
          subtle: '#F0FDFA',
          border: '#99F6E4',
        },
        terracotta: {
          DEFAULT: '#C2623F',
          light: '#D97757',
          subtle: '#FFF7ED',
          border: '#FED7AA',
        },
        border: {
          DEFAULT: '#E5E7EB',
          light: '#F3F4F6',
        },
      },
      maxWidth: {
        '8xl': '88rem',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      boxShadow: {
        card: '0 1px 3px 0 rgba(0,0,0,0.06), 0 1px 2px -1px rgba(0,0,0,0.06)',
        'card-hover': '0 4px 12px 0 rgba(0,0,0,0.10), 0 2px 4px -1px rgba(0,0,0,0.06)',
        nav: '0 1px 0 0 #E5E7EB',
      },
    },
  },
  plugins: [],
};

export default config;
