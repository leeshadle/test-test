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
	description: __( 'A starter rich text block with transforms.', 'test-test' ),
	keywords: [ 'rich text', 'transforms' ],
	icon: icons.block,
	category,
	example: {},
	supports,
	styles: [],
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
