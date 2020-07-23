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
import './editor.scss';
import './style.scss';
import { attributes, name } from './block.json';

const deprecated = [
	{
		attributes: {
			...attributes,
		},
		supports: {},
		save( props ) {
			const {
				attributes: {},
			} = props;

			// IMPORTANT -  If you use Fragment as wrapper then
			// the wrapper classes don't get added to the block when saving!!!!

			return (
				<p>
					{ __(
						'Test Test – this is a static block.',
						'test-test'
					) }
				</p>
			);
		},
	},
];

export default deprecated;
