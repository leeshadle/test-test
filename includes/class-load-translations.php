<?php
/**
 * Load translated strings for our plugin.
 *
 * @package TestTest
 */

namespace TestTest;

/**
 * Load plugin translations.
 *
 * @since 1.0.0
 */
class Load_Translations {

	/**
	 * The plugin instance.
	 *
	 * @var array
	 */
	private $plugin_instance;

	/**
	 * Register class with appropriate WordPress hooks
	 */
	public static function register() {
		$instance = new self();
		add_action( 'init', array( $instance, 'load_script_translations' ), 99 );
		add_action( 'plugins_loaded', array( $instance, 'load_php_translations' ) );
	}

	/**
	 * Construct the class.
	 *
	 * @since 1.0.0
	 * @return void
	 */
	public function __construct() {
		$this->plugin_instance = Plugin::get_instance();
	}

	/**
	 * Load translations in javascript files.
	 *
	 * @return void
	 */
	public function load_script_translations() {

		// Shortcuts for variables.
		$plugin_instance = $this->plugin_instance;
		$slug            = $plugin_instance->slug;
		$plugin_dir_path = $plugin_instance->plugin_dir_path;

		/**
		 * Loads translated strings written in JavaScript.
		 *
		 * @since 1.0.0
		 */
		if ( function_exists( 'wp_set_script_translations' ) ) {
			wp_set_script_translations(
				$slug . '-block-editor',
				$slug,
				$plugin_dir_path . 'languages'
			);
		}
	}

	/**
	 * Load translations in php files.
	 *
	 * @return void
	 */
	public function load_php_translations() {

		// Shortcuts for variables.
		$plugin_instance = $this->plugin_instance;
		$slug            = $plugin_instance->slug;
		$textdomain      = $plugin_instance->textdomain;

		// Load translated strings written in PHP.
		// Reference: http://clivern.com/how-to-internationalize-your-wordpress-plugin/.
		load_plugin_textdomain(
			$textdomain,
			false,
			$slug . '/languages'
		);
	}
}
