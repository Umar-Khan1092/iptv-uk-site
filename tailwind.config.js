/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    orange: '#0EA5E9', // Electric Azure - Main brand
                    'orange-dark': '#0284c7',
                    'orange-light': '#7dd3fc',
                },
                slate: {
                    950: '#020617', // Midnight Abyss (Base)
                    900: '#0F172A', // Slate Indigo (Elevation)
                    400: '#94A3B8', // Steel Mist (Body Text)
                },
                accent: {
                    green: '#22c55e', // Success green (WhatsApp)
                    'green-light': '#4ade80',
                    rose: '#F43F5E', // Vivid Rose (Action/Sale)
                    'rose-dark': '#E11D48',
                },
                indigo: {
                    950: '#1E1B4B', // Deep Purple Glow
                }
            },
            fontFamily: {
                sans: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
            },
            fontSize: {
                'hero': ['3.5rem', { lineHeight: ' 1.1', fontWeight: '800' }],
                'hero-mobile': ['2rem', { lineHeight: '1.2', fontWeight: '800' }],
            },
            boxShadow: {
                'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                'button': '0 2px 4px rgba(0, 0, 0, 0.1)',
                'whatsapp': '0 4px 12px rgba(37, 211, 102, 0.4)',
            },
            animation: {
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'bounce-slow': 'bounce 2s infinite',
            },
        },
    },
    plugins: [],
}
