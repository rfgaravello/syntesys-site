import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{ts,tsx,js,jsx}',
    './app/**/*.{ts,tsx,js,jsx}',          // App Router
    './components/**/*.{ts,tsx,js,jsx}',   // Header, Footer, Breadcrumb, etc.
     ],
  theme: {
    extend: {
      colors: {
        primary: '#22d3ee',      // azul neon
        secondary: '#a855f7',    // roxo neon
        accent: '#facc15',       // amarelo neon
        background: '#050b1a',   // fundo principal
        surface: '#0a1128',      // cards e modais
        text: '#e5e7eb'          // texto padrão claro
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        mono: ['Fira Code', 'ui-monospace', 'SFMono-Regular']
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(-6px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 0px rgba(34,211,238,0.5)' },
          '50%': { boxShadow: '0 0 10px rgba(34,211,238,1)' }
        }
      },
      animation: {
        'fade-in': 'fade-in 0.2s ease-out forwards',
        'slide-up': 'slide-up 0.3s ease-out forwards',
        'pulse-glow': 'pulse-glow 2s infinite'
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),       // Inputs e selects estilizados
    require('@tailwindcss/typography'),  // Texto rico
    require('@tailwindcss/aspect-ratio') // Proporção de imagens
  ]
}

export default config
