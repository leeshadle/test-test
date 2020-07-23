/**
 * External Dependencies
 */
import classnames from 'classnames';

/**
 * WordPress Dependencies
 */
import { __ } from '@wordpress/i18n';
import { RichText } from '@wordpress/block-editor';

/**
 * Internal Dependencies
 */
import Controls from './controls';

const Edit = ( props ) => {
	const {
		attributes,
		className,
		setAttributes,
		attributes: {
			// put attribute key names here to use them
			text,
		},
	} = props;

	return (
		<div className={ className }>
			<Controls
				className={ className }
				attributes={ attributes }
				setAttributes={ setAttributes }
			/>
			<RichText
				tagName="div"
				value={ text }
				onChange={ ( text ) => setAttributes( { text } ) }
				placeholder={ __(
					'This is a starter rich text block with deprecated code.  This block demonstrates how to use deprecations.  It can be a little tricky to set this up.  Edit this block in src/blocks/rich-text-block-with-deprecated/edit.js.  Checkout the deprecated code in src/blocks/rich-text-block-with-deprecated/deprecated.js.',
					'test-test'
				) }
			/>
		</div>
	);
};

export default Edit;
