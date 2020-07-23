/**
 * External Dependencies
 */

/**
 * WordPress Dependencies
 */
import { __ } from '@wordpress/i18n';
import { PanelBody, SelectControl, ToggleControl } from '@wordpress/components';
import { FontSizePicker, BlockControls, InspectorControls } from '@wordpress/block-editor';

/**
 * Internal Dependencies
 */
import icons from '../../utils/icons';
import { config } from '../../../package.json';
const { slug } = config;

const Controls = ( props ) => {
	const {
		setAttributes,
		className,
		attributes: {
			// put attribute key names here to use them
			fontSize,
			tagName,
			useDefault,
			defaultFontSize,
			defaultTagName,
			useDefaultTagName,
			useDefaultFontSize,
		},
	} = props;

	return (
		<>
			<BlockControls></BlockControls>
			<InspectorControls>
				<PanelBody title={ __( 'Settings', 'test-test' ) } className="blocks-font-size">
					{
						! useDefaultFontSize &&
						<FontSizePicker
						value={ fontSize }
						onChange={ ( size ) => {
							if( ! size ) {
								size = defaultFontSize;
							}
							setAttributes( { fontSize: size } ) } }
						/>
					}
					<ToggleControl
						label={ `Use default font size ${ useDefaultFontSize ? defaultFontSize : '' }${ useDefaultFontSize ? 'px' : '' }` }
						checked={ useDefaultFontSize }
						onChange={ () => setAttributes( { useDefaultFontSize: ! useDefaultFontSize } ) }
					/>
					{
						! useDefaultTagName &&
						<SelectControl
							label={ __( 'HTML tag type', 'test-test' ) }
							value={ tagName }
							onChange={ ( tagName ) => setAttributes( { tagName } ) }
							options={
								[
									{ value: 'p', label: __( 'p', 'test-test' ) },
									{ value: 'h1', label: __( 'h1', 'test-test' ) },
									{ value: 'h2', label: __( 'h2', 'test-test' ) },
									{ value: 'h3', label: __( 'h3', 'test-test' ) },
									{ value: 'h4', label: __( 'h4', 'test-test' ) },
									{ value: 'h5', label: __( 'h5', 'test-test' ) },
									{ value: 'h6', label: __( 'h6', 'test-test' ) },
									{ value: 'div', label: __( 'div', 'test-test' ) },
								]
							}
						/>
					}
					<ToggleControl
						label={ `Use default ${ useDefaultTagName ? defaultTagName : '' } tag` }
						checked={ useDefaultTagName }
						onChange={ () => setAttributes( { useDefaultTagName: ! useDefaultTagName } ) }
					/>
				</PanelBody>
			</InspectorControls>
		</>
	);
}

export default Controls;
