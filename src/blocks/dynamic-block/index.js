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
import transforms from './transforms';
import './editor.scss';
import './style.scss';

const { attributes, category, editorScript, editorStyle, name, style, supports, title } = metadata;

const settings = {
	title,
	description: __( 'A starter dynamic block.', 'test-test' ),
	keywords: [ 'dynamic', 'posts' ],
	icon: icons.block,
	category,
	example: {},
	supports,
	styles: [],
	attributes,
	// deprecated,
	transforms,
	edit,
	editorScript,
	style,
	editorStyle,
};

export { name, settings };
