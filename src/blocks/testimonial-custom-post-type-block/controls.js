/**
 * External Dependencies
 */

/**
 * WordPress Dependencies
 */
import { __ } from '@wordpress/i18n';
import { BaseControl, Button, PanelRow, PanelBody } from '@wordpress/components';
import { BlockControls, InspectorControls, MediaUpload } from '@wordpress/block-editor';


/**
 * Internal Dependencies
 */
import icons from '../../utils/icons';
import { config } from '../../../package.json';
const { slug } = config;

/**
 *
 * Module Constants
 */
const ALLOWED_MEDIA_TYPES = [ 'image' ];

const Controls = ( props ) => {
	const {
		attributes,
		setAttributes,
		onSelectImage,
		attributes: {
			mediaUrl,
			mediaId,
		}
	} = props;

	return (
		<>
			<BlockControls></BlockControls>
			<InspectorControls>
				<PanelBody
					title={ __( 'Image settings', 'test-test' ) }
				>
					{
						! mediaUrl &&
						<BaseControl
						title={ __( 'image', 'test-test' ) }
						>
							<MediaUpload
								onSelect={ onSelectImage }
								allowedTypes={ ALLOWED_MEDIA_TYPES }
								value={ mediaId }
								render={ ( { open } ) => (
									<Button
										className="components-button editor-post-featured-image__toggle"
										onClick={ open }
									>
										{ __( 'Select image', 'test-test' ) }
									</Button>
								) }
							/>
						</BaseControl>
					}
					<BaseControl>
						<div className="test-test">
							{
								mediaUrl &&
									<MediaUpload
										onSelect={ onSelectImage }
										allowedTypes={ ALLOWED_MEDIA_TYPES }
										value={ mediaId }
										render={ ( { open } ) => (<Button className="h-24 d-block w-full hover:bg-gray-200 mb-2" onClick={ open }>
												<img className="h-24 mx-auto" src={ mediaUrl } 	alt="" />
											</Button>
										) }
									/>
							}
							<PanelRow>
								<Button
									className="ml-auto"
									isSecondary
									isSmall
									onClick={ () => setAttributes( {
										mediaUrl: '',
										mediaId: ''
									} ) }
								>
									Clear Image
								</Button>
							</PanelRow>
						</div>
					</BaseControl>
				</PanelBody>
			</InspectorControls>
		</>
	);
}

export default Controls;
