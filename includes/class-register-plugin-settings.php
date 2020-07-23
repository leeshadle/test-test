<?php
/**
 * Register block scripts and styles.
 *
 * @package TestTest
 */

namespace TestTest;

/**
 * Register global plugin settings.
 *
 * @since 1.0.0
 */
class Register_Plugin_Settings {

	/**
	 * The plugin instance.
	 *
	 * @var array
	 */
	private $plugin_instance;

	/**
	 * Register class with appropriate WordPress hooks.
	 *
	 * @since 1.0.0
	 * @return void
	 */
	public static function register() {
		$instance = new self();
		add_action( 'init', array( $instance, 'set_plugin_settings' ) );
		// Pass settings variable to plugin store instead of grabbing
		// settings via a resolver on page load.
		add_action( 'enqueue_block_editor_assets', array( $instance, 'init_plugin_store' ) );
	}

	/**
	 * Construct the Plugin_Settings class.
	 *
	 * @since 1.0.0
	 * @return void
	 */
	public function __construct() {
		$this->plugin_instance = Plugin::get_instance();
	}

	/**
	 * Add global plugin options.
	 *
	 * @return void
	 */
	public function set_plugin_settings() {

		// Shortcuts for variables.
		$plugin_instance = $this->plugin_instance;
		$slug_snake_case = $plugin_instance->slug_snake_case;

		$settings = array(
			'defaults' => array(
				'defaultFontSize' => 21,
				'defaultTagName'  => 'div',
			),
		);

		// add_option only adds options if they don't yet exist.
		add_option( $slug_snake_case . '_settings', $settings );
		// uncomment this to reset the settings object for testing.
		// delete_option( $slug_snake_case . '_settings' );
	}

	/**
	 * Make settings available to plugin data store.
	 *
	 * @return void
	 */
	public function init_plugin_store() {

		// Shortcuts for variables.
		$plugin_instance = $this->plugin_instance;
		$slug            = $plugin_instance->slug;
		$slug_snake_case = $plugin_instance->slug_snake_case;

		// Read in existing settings values from database.
		$settings = get_option( $slug_snake_case . '_settings' );

		// Create an object of all plugin settings that we need.
		// We will then load these in the redux store and
		// create actions for updating shared global state.
		// Uncomment this if we want to load the redux store from the wp_local_script.
		wp_localize_script(
			$slug . '-block-editor',
			$slug_snake_case . '_settings',
			array(
				'settings' => $settings,
			)
		);
	}
}
