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
import { attributes, category, name, supports } from './block.json';
import deprecated from './deprecated';
import edit from './edit';
import icons from './icons';
import save from './save';
import transforms from './transforms';
import './editor.scss';
import './style.scss';

const settings = {
	title: __( 'Rich Text Block with Deprecated', 'test-test' ),
	description: __( 'A starter rich text block with deprecated.', 'test-test' ),
	keywords: [ 'rich text' ],
	icon: icons.block,
	category,
	example: {},
	supports,
	styles: [],
	attributes,
	deprecated,
	transforms,
	edit,
	save,
};

export { name, settings };
