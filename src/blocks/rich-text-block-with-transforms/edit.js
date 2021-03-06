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
					'This is a rich-text-block-with-transforms.  Edit this block in src/blocks/rich-text-block-with-transforms/edit.js.  See how the transforms work by going to src/blocks/rich-text-block-with-transforms/transforms.js.  Transforms are kinda tricky to setup, but this block will help get you started and make it a little easier.',
					'test-test'
				) }
			/>
		</div>
	);
};

export default Edit;
