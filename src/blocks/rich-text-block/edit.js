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
			content,
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
				tagName="p"
				value={ content }
				onChange={ ( content ) => setAttributes( { content } ) }
				placeholder={ __(
					'This is a starter rich text block. This block demonstrates how to use the RichText component. You can edit this block in src/blocks/rich-text-block/edit.js.  You can see how to display content from the RichText component in the src/blocks/rich-text-block/save.js file.',
					'test-test'
				) }
			/>
		</div>
	);
}

export default Edit;
