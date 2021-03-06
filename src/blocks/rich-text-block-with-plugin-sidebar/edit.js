/**
 * External Dependencies
 */
import classnames from 'classnames';

/**
 * WordPress Dependencies
 */
import { __ } from '@wordpress/i18n';
import { compose } from '@wordpress/compose';
import { RichText } from '@wordpress/block-editor';
import { withSelect } from '@wordpress/data';

/**
 * Internal Dependencies
 */
import Controls from './controls';
import { config } from '../../../package.json';
const { slug } = config;

/**
 * Module Constants
 */

const Edit = ( props ) => {
	const {
		attributes,
		setAttributes,
		className,
		defaults: {
			defaultFontSize,
			defaultTagName,
		},
		attributes: {
			// put attribute key names here to use them
			content,
			fontSize,
			tagName,
			useDefaultTagName,
			useDefaultFontSize,
		},
	} = props;

	setAttributes( { defaultFontSize, defaultTagName } );

	return (
		<div className={ className }>
			<Controls
				className={ className }
				attributes={ attributes }
				setAttributes={ setAttributes }
			/>
			<RichText
				tagName={ useDefaultTagName ? defaultTagName : tagName }
				style={ useDefaultFontSize ? { fontSize: defaultFontSize } : { fontSize } }
				value={ content }
				onChange={ ( content ) => setAttributes( { content } ) }
				placeholder={ __(
					'This is a rich text block with a plugin sidebar.  This block demonstrates how to use the rich text component that has saveable default settings that can be edited directly in the editor from the plugin sidebar. Edit this file in src/blocks/rich-text-block-with-plugin-sidebar/edit.js.  Click the plugin icon in the top right of the editor to check it out. This block also demonstrates how to set up a global data store for blocks.  Though it appears simple, it\'s quite the complicated block...',
					'test-test'
				) }
			/>
		</div>
	);
}

const EditWithCompose = compose(
	[
		withSelect( ( select, props ) => {
			const pluginSettings = select( `${ slug }/settings` ).getPluginSettings();
			// Need editor settings? Here they are:
			// const editorSettings = select( `core/editor` ).getEditorSettings();
			// console.log( editorSettings );
			return { ...props, ...pluginSettings };
		} ),
	]
)( Edit );

export default EditWithCompose;
