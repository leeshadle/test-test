/**
 * External Dependencies
 */
import classnames from 'classnames';

/**
 * WordPress Dependencies
 */
import { __ } from '@wordpress/i18n';
import { InnerBlocks, __experimentalBlockVariationPicker } from '@wordpress/block-editor';

/**
 * Internal Dependencies
 */
import Controls from './controls';

/**
 * Module Constants
 */
const ALLOWED_BLOCKS = [ 'core/paragraph', 'core/heading' ];
const TEMPLATE = [
	[
		'core/heading',
		{
			/* translators: content placeholder */
			placeholder: __( 'Testimonial', 'test-test' ),
			/* translators: content placeholder */
			content: __( 'This is an inner block starter block.', 'test-test' ),
			level: 3,
			className: 'mt-5',
		},
	],
	[
		'core/paragraph',
		{
			/* translators: content placeholder */
			placeholder: __( 'Author\'s name', 'test-test' ),
			/* translators: content placeholder */
			content: __( 'This block demonstrates how to use inner blocks.  Inner blocks give you the ability to compose blocks of blocks.  Edit this block in src/blocks/inner-block/edit.js.', 'test-test' ),
			fontSize: 'regular',
			className: 'mb-0',
		},
	],
	[
		'core/paragraph',
		{
			/* translators: content placeholder */
			placeholder: __( 'Author\'s position', 'test-test' ),
			/* translators: content placeholder */
			content: __( 'Using inner blocks to compose blocks of blocks is really interesting b/c each block manages it\'s own state and settings.  This can allow you to create really sophisticated blocks easily.', 'test-test' ),
			fontSize: 'small',
			customTextColor: '#bbb',
			className: 'mb-0',
		},
	],
];

const Edit = ( props ) => {
	const {
		attributes,
		className,
		setAttributes,
		attributes: {
			// put attributes here to use them
		},
	} = props;

	return (
		<div className={ className }>
			<div className={ 'bg-white rounded p-5' }>
				<Controls
					className={ className }
					attributes={ attributes }
					setAttributes={ setAttributes }
				/>
				<InnerBlocks
					allowedBlocks={ ALLOWED_BLOCKS }
					template={ TEMPLATE }
					templateLock={ false }
				/>
			</div>
		</div>
	);
}

export default Edit;
