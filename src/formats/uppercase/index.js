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
import './style.scss';
import edit from './edit';
import { config } from '../../../package.json';
const { slug } = config;

const name = `${ slug }/uppercase`;
const settings = {
	title: __( 'Uppercase', 'test-test' ),
	tagName: 'span',
	className: 'uppercase',
	edit,
};

export { name, settings };
