const isProduction = process.env.NODE_ENV === 'production';

const config = {
	theme: {
		spacing: {
			'0': '0',
			'1': '8px',
      '2': '12px',
      '3': '16px',
      '4': '24px',
      '5': '32px',
			'6': '48px',
			'8': '32px',
			'10': '40px',
			'12': '48px',
			'16': '64px',
			'20': '80px',
			'24': '96px',
			'32': '128px',
			'40': '160px',
			'48': '192px',
			'56': '224px',
			'64': '256px'
		},
		boxShadow: {
			default: 'var( --test-test-box-shadow )',
			md: 'var( --test-test-box-shadow-md )',
			lg: 'var( --test-test-box-shadow-lg )',
			xl: 'var( --test-test-box-shadow-xl )',
		},
		opacity: {
			0: '0',
			10: '.1',
			20: '.2',
			30: '.3',
			40: '.4',
			50: '.5',
			60: '.6',
			70: '.7',
			80: '.8',
			90: '.9',
			100: '1',
		},
	},
	variants: {},
	purge: [
		'./build/*.js',
		'./src/**/*.php',
		'./node_modules/@blockhandbook/**/*.js',
		'./includes/**/*.php'
	],
	plugins: [
		require( 'tailwindcss' ),
		require( 'autoprefixer' )
	],
};

module.exports = config;
