/**
 * External Dependencies
 */

/**
 * WordPress Dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal Dependencies
 */
import { name } from './block.json';
import icons from './icons';

const variations = [
	{
		name: 'big-bordered',
		title: __( 'Big Bordered', 'test-test' ),
		icon: icons.bigBordered,
		attributes: {
			"borderRadius": {
				"topLeft": 30,
				"bottomLeft": 30,
				"topRight": 30,
				"bottomRight": 30,
				"sync": true,
				"usePreset": true,
				"preset": "rounded-none",
				"toolbar": true,
				"sidebar": true
			},
			"borderWidth": {
				"top": 10,
				"bottom": 10,
				"left": 10,
				"right": 10,
				"sync": true,
				"usePreset": true,
				"preset": "border-8",
				"toolbar": true,
				"sidebar": true
			},
			"padding": {
				"top": 10,
				"bottom": 10,
				"left": 10,
				"right": 10,
				"sync": true,
				"usePreset": true,
				"preset": "p-8",
				"toolbar": true,
				"sidebar": true
			}
		},
		innerBlocks: [
			[
				'core/heading',
				{
					/* translators: content placeholder */
					placeholder: __( 'Testimonial', 'test-test' ),
					/* translators: content placeholder */
					content: __( 'This is an inner block with variations starter block.', 'test-test' ),
					level: 3,
					className: 'mt-5',
				},
			],
			[
				'core/paragraph',
				{
					/* translators: content placeholder */
					placeholder: __( 'Author\'s name', 'test-test' ),
					/* translators: content placeholder */
					content: __( 'This block demonstrates registering variations using registerBlockVariation.  Edit this file in src/blocks/inner-block-with-variations/edit.js file.  Edit variations in the src/blocks/inner-block-with-variations/variations.js file.', 'test-test' ),
					fontSize: 'regular',
					className: 'mb-0',
				},
			],
			[
				'core/paragraph',
				{
					/* translators: content placeholder */
					placeholder: __( 'Author\'s position', 'test-test' ),
					/* translators: content placeholder */
					content: __( 'This block is also demonstrating using a handful of controls we built for customizing properties such as padding, margin, box-shadows, borders, and background images.', 'test-test' ),
					fontSize: 'small',
					customTextColor: '#bbb',
					className: 'mb-0',
				},
			],
		],
		scope: [ 'block' ],
	},
	{
		name: 'rounded-big-bordered',
		title: __( 'Rounded Big Bordered', 'test-test' ),
		icon: icons.roundedBigBordered,
		attributes: {
			"borderRadius": {
				"topLeft": 30,
				"bottomLeft": 30,
				"topRight": 30,
				"bottomRight": 30,
				"sync": true,
				"usePreset": false,
				"preset": "rounded-lg",
				"toolbar": true,
				"sidebar": true
			},
			"padding": {
				"top": 10,
				"bottom": 10,
				"left": 10,
				"right": 10,
				"sync": true,
				"usePreset": true,
				"preset": "p-8",
				"toolbar": true,
				"sidebar": true
			},
			"borderWidth": {
				"top": 10,
				"bottom": 10,
				"left": 10,
				"right": 10,
				"sync": true,
				"usePreset": true,
				"preset": "border-4",
				"toolbar": true,
				"sidebar": true
			},
		},
		innerBlocks: [
			[
				'core/heading',
				{
					/* translators: content placeholder */
					placeholder: __( 'Testimonial', 'test-test' ),
					/* translators: content placeholder */
					content: __( 'This is an inner block with variations starter block.', 'test-test' ),
					level: 3,
					className: 'mt-5',
				},
			],
			[
				'core/paragraph',
				{
					/* translators: content placeholder */
					placeholder: __( 'Author\'s name', 'test-test' ),
					/* translators: content placeholder */
					content: __( 'This block demonstrates registering variations using registerBlockVariation.  Edit this file in src/blocks/inner-block-with-variations/edit.js file.  Edit variations in the src/blocks/inner-block-with-variations/variations.js file.', 'test-test' ),
					fontSize: 'regular',
					className: 'mb-0',
				},
			],
			[
				'core/paragraph',
				{
					/* translators: content placeholder */
					placeholder: __( 'Author\'s position', 'test-test' ),
					/* translators: content placeholder */
					content: __( 'This block is also demonstrating using a handful of controls we built for customizing properties such as padding, margin, box-shadows, borders, and background images.', 'test-test' ),
					fontSize: 'small',
					customTextColor: '#bbb',
					className: 'mb-0',
				},
			],
		],
		scope: [ 'block' ],
	},
];

export { name, variations };
