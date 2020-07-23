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
import metadata from './block.json';
// import deprecated from './deprecated';
import edit from './edit';
import icons from './icons';
import save from './save';
import transforms from './transforms';
import './editor.scss';
import './style.scss';

const { attributes, category, editorScript, editorStyle, name, style, supports, title } = metadata;

const settings = {
	title,
	description: __( 'A starter static block with Styles.', 'test-test' ),
	keywords: [ 'styles', 'static block' ],
	icon: icons.block,
	category,
	example: {},
	supports,
	styles: [
		{
			name: 'default',
			label: __( 'Default', 'test-test' ),
			isDefault: true,
		},
		{
			name: 'light',
			label: __( 'Light', 'test-test' ),
		},
		{
			name: 'dark',
			label: __( 'Dark', 'test-test' ),
		},
	],
	attributes,
	// deprecated,
	transforms,
	edit,
	save,
	editorScript,
	style,
	editorStyle,
};

export { name, settings };
