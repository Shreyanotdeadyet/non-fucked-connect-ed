const { color } = require('framer-motion');

module.exports = {
	darkMode: ['class'],
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
	  extend: {
		fontFamily: {
		  dmserif: ['"DM Serif Text"', 'serif'],
		  lora: ['Lora', 'serif'],
		  robo1: ["Roboto", 'serif'],
		  robo2: ["Roboto Slab", 'serif'],	
		},
		borderRadius: {
		  lg: 'var(--radius)',
		  md: 'calc(var(--radius) - 2px)',
		  sm: 'calc(var(--radius) - 4px)',
		},
		colors: {
			beige : '#f7f0de',
			purple : '#6419cc',
			lteal: '#00e590',
			dteal: '#009984', 
			pup:'#6419cc',
			dpup:'#3d018f',
			beg:'#f7f0de',
			ltg:'#00e590',
			dtg: {
				500:'#005c4f',
				900:'#02574b',
			},
		  red: {
			500: '#F87171',
			900: '#B91C1C',
		  },
		  'pastel-blue': '#a0c8ff',
		  'pastel-pink': '#ff8ca0',
		  background: 'hsl(var(--background))',
		  foreground: 'hsl(var(--foreground))',
		base:'#ffffff',
		tg:{
			100:'#f1fffd',
			300:'#009984',
			600:'#207569',
		},
		base2:'#fefbf6',
		pp:{
			100:'#6419cc',
			300:'#3d018f',
		},
		  card: {
			DEFAULT: 'hsl(var(--card))',
			foreground: 'hsl(var(--card-foreground))',
		  },
		  popover: {
			DEFAULT: 'hsl(var(--popover))',
			foreground: 'hsl(var(--popover-foreground))',
		  },
		  primary: {
			DEFAULT: 'hsl(var(--primary))',
			foreground: 'hsl(var(--primary-foreground))',
		  },
		  secondary: {
			DEFAULT: 'hsl(var(--secondary))',
			foreground: 'hsl(var(--secondary-foreground))',
		  },
		  muted: {
			DEFAULT: 'hsl(var(--muted))',
			foreground: 'hsl(var(--muted-foreground))',
		  },
		  accent: {
			DEFAULT: 'hsl(var(--accent))',
			foreground: 'hsl(var(--accent-foreground))',
		  },
		  destructive: {
			DEFAULT: 'hsl(var(--destructive))',
			foreground: 'hsl(var(--destructive-foreground))',
		  },
		  border: 'hsl(var(--border))',
		  input: 'hsl(var(--input))',
		  ring: 'hsl(var(--ring))',
		  chart: {
			'1': 'hsl(var(--chart-1))',
			'2': 'hsl(var(--chart-2))',
			'3': 'hsl(var(--chart-3))',
			'4': 'hsl(var(--chart-4))',
			'5': 'hsl(var(--chart-5))',
		  },
		},
		keyframes: {
		  marquee: {
			from: {
			  transform: 'translateX(0)',
			},
			to: {
			  transform: 'translateX(calc(-100% - var(--gap)))',
			},
		  },
		  'marquee-vertical': {
			from: {
			  transform: 'translateY(0)',
			},
			to: {
			  transform: 'translateY(calc(-100% - var(--gap)))',
			},
		  },
		  fadeInScale: {
			'0%': { opacity: 0, transform: 'scale(0.8)' },
			'50%': { opacity: 1, transform: 'scale(1.1)' },
			'100%': { opacity: 1, transform: 'scale(1)' },
		  },
		},
		animation: {
		  marquee: 'marquee var(--duration) infinite linear',
		  'marquee-vertical': 'marquee-vertical var(--duration) infinite linear',
		  'fade-in-scale': 'fadeInScale 2s ease-in-out',
		},
	  },
	},
	plugins: [require('tailwindcss-animate'),
		
		// function ({ addUtilities }) {
		// 	addUtilities({
		// 		'.scrollbar': {
		// 		  '::-webkit-scrollbar': {
		// 			width: '6px', // Makes the scrollbar thinner
		// 		  },
		// 		  '::-webkit-scrollbar-thumb': {
		// 			backgroundColor: '#6419cc', // Purple color for the thumb
		// 			borderRadius: '10px', // Rounded corners for the thumb
		// 		  },
		// 		  '::-webkit-scrollbar-track': {
		// 			backgroundColor: '#f7f0de', // Beige color for the track
		// 		},
		// 	  },
		// 	});
		//   },
	],
	
  };
  
  