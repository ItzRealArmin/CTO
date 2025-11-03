/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        '2xl': '1280px',
      },
    },
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        neon: {
          pink: 'hsl(var(--neon-pink))',
          cyan: 'hsl(var(--neon-cyan))',
          green: 'hsl(var(--neon-green))',
          violet: 'hsl(var(--neon-violet))',
          blue: 'hsl(var(--neon-blue))',
        },
        grid: 'hsl(var(--grid-color))',
        shadow: 'hsl(var(--shadow))',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: [
          'var(--font-display)',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
        ],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'glass-mesh':
          'radial-gradient(600px at 20% 20%, hsl(var(--neon-cyan)/0.12) 0%, transparent 60%), radial-gradient(700px at 80% 10%, hsl(var(--neon-pink)/0.12) 0%, transparent 60%), radial-gradient(1000px at 50% 80%, hsl(var(--neon-violet)/0.10) 0%, transparent 70%)',
      },
      dropShadow: {
        neon: [
          '0 0 10px hsl(var(--primary)/0.6)',
          '0 0 20px hsl(var(--primary)/0.4)',
          '0 0 40px hsl(var(--primary)/0.2)',
        ],
      },
      boxShadow: {
        glass:
          'inset 0 1px 0 0 hsl(var(--foreground)/0.06), 0 10px 30px hsl(var(--shadow)/0.25)',
        'neon-sm': '0 0 10px hsl(var(--primary)/0.5)',
        'neon': '0 0 20px hsl(var(--primary)/0.6)',
      },
      spacing: {
        xs: 'var(--space-xs)',
        sm: 'var(--space-sm)',
        md: 'var(--space-md)',
        lg: 'var(--space-lg)',
        xl: 'var(--space-xl)',
        '2xl': 'var(--space-2xl)',
      },
      fontSize: {
        xs: 'var(--text-xs)',
        sm: 'var(--text-sm)',
        base: 'var(--text-base)',
        lg: 'var(--text-lg)',
        xl: 'var(--text-xl)',
        '2xl': 'var(--text-2xl)',
        '3xl': 'var(--text-3xl)',
        '4xl': 'var(--text-4xl)',
        '5xl': 'var(--text-5xl)',
      },
      borderRadius: {
        glass: '14px',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
