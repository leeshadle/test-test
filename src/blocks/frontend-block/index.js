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

const { attributes, category, editorScript, editorStyle, name, script, style, supports, title } = metadata;

const settings = {
	title,
	description: __( 'A starter frontend block.', 'test-test' ),
	keywords: [ 'frontend' ],
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
	script,
	editorScript,
	style,
	editorStyle,
};

export { name, settings };
