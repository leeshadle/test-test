const tailwindcss = require( 'tailwindcss' );
const autoprefixer = require( 'autoprefixer' );

const postcssPrependSelector = require( 'postcss-prepend-selector' )( {
	selector: '[class*="test-test"] ',
} );

module.exports = ( { file } ) => {
	return {
		plugins: [
			file.basename.includes( 'tailwind' ) ? tailwindcss( './tailwind.config.js' ) : null,
			file.basename.includes( 'tailwind' ) ? postcssPrependSelector : null,
			autoprefixer
		],
	};
};
