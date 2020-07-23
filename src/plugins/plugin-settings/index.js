/**
 * External Dependencies
 */

/**
 * WordPress Dependencies
 */
import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import { Button, Card, CardBody, PanelBody, SelectControl, RangeControl } from '@wordpress/components';
import { PluginSidebar, PluginSidebarMoreMenuItem } from '@wordpress/edit-post';
import { compose } from '@wordpress/compose';
import { dispatch, withSelect } from '@wordpress/data';
import apiFetch from '@wordpress/api-fetch';

/**
 * Internal Dependencies
 */
import icons from './icons';
import { config } from '../../../package';
const { plugin_name, slug } = config;

const Plugin = ( props ) => {
	const {
		defaults: {
			defaultFontSize,
			defaultTagName,
		},
	} = props;

	const [
		defaultFontSizeState,
		setDefaultFontSize
	] = useState( defaultFontSize );

	const [
		defaultTagNameState,
		setDefaultTagName
	] = useState( defaultTagName );

	const updatePluginSettings = async ( data, setting ) => {
		const request = apiFetch( {
			path: `${ slug }/v1/settings/${ setting }`,
			headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
			method: 'POST',
			body: JSON.stringify( data )
		} );

		try {
			const response = await request;
			if ( response ) {
				dispatch( `${ slug }/settings` ).updatePluginSettings( data );
				dispatch( 'core/notices' ).createNotice( 'success', 'Setting saved.' );
			}
		} catch ( error ) {
			const errorNotice = 'Setting was not updated, please try again.';
			dispatch( 'core/notices' ).createNotice( 'error', errorNotice );
		}
	};

	return (
		<>
			<PluginSidebarMoreMenuItem
				target={ `${ slug }-settings` }
			>
				{ __( 'ESNext Example', 'test-test' ) }
			</PluginSidebarMoreMenuItem>
			<PluginSidebar
				title={ `${ plugin_name } settings`}
				name={ `${ slug }-settings` }
			>
				<Card
					isBorderless
					size="small"
				>
					<CardBody>
						<p>
							<strong>
								{ __(
									'This is an example using the <PluginSidebar /> component.',
									'test-test'
								) }
							</strong>
						</p>
						<p>
						{
							__( 'Set defaults from the editor for the rich-text-block-with-plugin-settings.', 'test-test' )
						}
						</p>
						<p>
						{
							__( 'Settings saved from the plugin sidebar are saved to both the global data store and to WordPress add_option().  Edit the settings in includes/class-register-plugin-settings.php.', 'test-test' )
						}
						</p>
						<p>
						{
							__( 'Checkout the data store in src/stores/plugin-settings/index.js.  The store data is loaded using wp_localize_script in class-register-plugin-settings.php.', 'test-test' )
						}
						</p>
						<p>
						{
							__( 'Edit this plugin sidebar in src/plugins/plugin-settings/index.js.  The store data is loaded using wp_localize_script in class-register-plugin-settings.php.', 'test-test' )
						}
						</p>
					</CardBody>
				</Card>
				<PanelBody title={ __( 'Default settings', 'test-test' ) }>
					<RangeControl
						label={ __( 'Default font size', 'test-test' ) }
						value={ defaultFontSizeState }
						onChange={ ( fontSize ) => setDefaultFontSize( fontSize )	}
						initialPosition={ defaultFontSizeState }
						min={ 0 }
						max={ 200 }
						step={ 1 }
					/>
					<SelectControl
						label={ __( 'Default html tag type', 'test-test' ) }
						value={ defaultTagNameState }
						onChange={ ( tagName ) => setDefaultTagName( tagName ) }
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
					<Button
						isSecondary
						isSmall
						onClick={ ( ) => {
							const pluginSettings = {
								defaults: {
									defaultFontSize: defaultFontSizeState,
									defaultTagName: defaultTagNameState,
								}
							};
							updatePluginSettings( pluginSettings, 'defaults' );
						} }
					>
					{ __( 'Save', 'test-test' ) }
					</Button>
				</PanelBody>
			</PluginSidebar>
		</>
	);
};

const PluginWithSettings = compose(
	[
		withSelect( ( select, props ) => {
			const pluginSettings = select( `${ slug }/settings` ).getPluginSettings();

			return pluginSettings;
		} ),
	]
)( Plugin );

const name = `${ slug }`;
const settings = {
	icon: icons.plugin,
	render: PluginWithSettings,
};

export { name, settings };
