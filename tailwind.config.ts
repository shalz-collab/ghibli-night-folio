
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'pixel': ['Press Start 2P', 'monospace'],
				'poppins': ['Poppins', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// Minecraft-inspired colors
				'minecraft': {
					'dark': '#0d1117',
					'stone': '#7f7f7f',
					'dirt': '#8b4513',
					'grass': '#7cb342',
					'wood': '#8b4513',
					'gold': '#ffb000',
					'diamond': '#4fc3f7',
					'redstone': '#ff0000',
					'emerald': '#50c878',
					'lapis': '#1e40af',
					'torch': '#ffa500',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'pixel-glow': {
					'0%, 100%': { 
						boxShadow: '0 0 10px #ffa500, 0 0 20px #ffa500, 0 0 30px #ffa500',
						textShadow: '0 0 10px #ffa500'
					},
					'50%': { 
						boxShadow: '0 0 20px #ffa500, 0 0 30px #ffa500, 0 0 40px #ffa500',
						textShadow: '0 0 20px #ffa500'
					}
				},
				'block-bounce': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-8px)' }
				},
				'leaf-fall': {
					'0%': {
						transform: 'translateY(-100vh) rotate(0deg)',
						opacity: '1'
					},
					'100%': {
						transform: 'translateY(100vh) rotate(360deg)',
						opacity: '0'
					}
				},
				'minecraft-fade': {
					'0%': { 
						opacity: '0', 
						transform: 'scale(0.8) translateY(20px)' 
					},
					'100%': { 
						opacity: '1', 
						transform: 'scale(1) translateY(0)' 
					}
				}
			},
			animation: {
				'pixel-glow': 'pixel-glow 2s ease-in-out infinite',
				'block-bounce': 'block-bounce 2s ease-in-out infinite',
				'leaf-fall': 'leaf-fall linear infinite',
				'minecraft-fade': 'minecraft-fade 0.8s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
