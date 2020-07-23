<?php
/**
 * Register block scripts and styles.
 *
 * @package TestTest
 */

namespace TestTest;

/**
 * Register block patterns.
 *
 * @since 1.0.0
 */
class Register_Block_Patterns {

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
		add_action( 'init', array( $instance, 'register_patterns' ) );
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
	 * Register block pattern.
	 *
	 * @return void
	 */
	public function register_patterns() {

		if ( function_exists( 'register_block_pattern' ) ) {
			// Shortcuts for variables.
			$plugin_instance = $this->plugin_instance;
			$slug            = $plugin_instance->slug;

			/**
			* Register block pattern category
			*/
			register_block_pattern_category(
				$slug,
				array(
					'label' => __( 'Test Test', 'test-test' ),
				)
			);

			/**
			* Register block patterns
			* Tool to escape strings: https://onlinestringtools.com/escape-string
			*/
			// Add our patterns.
			foreach ( $this->get_patterns() as $name => $pattern ) {
				register_block_pattern( $name, $pattern );
			}
		}
	}

	/**
	 * Register get block patterns from block-pattern directory.
	 *
	 * @return array
	 */
	public function get_patterns() {

		// Shortcuts for variables.
		$plugin_instance = $this->plugin_instance;
		$slug            = $plugin_instance->slug;
		$plugin_dir_path = $plugin_instance->plugin_dir_path;
		$patterns        = array();

		// Get all php pattern files.
		foreach ( glob( $plugin_dir_path . 'includes/block-patterns/*.php' ) as $pattern_file ) {
			$pattern_name              = $slug . basename( $pattern_file );
			$patterns[ $pattern_name ] = require_once $pattern_file;
		};

		// Get all json pattern files.
		foreach ( glob( $plugin_dir_path . 'includes/block-patterns/*.json' ) as $pattern_file ) {
			$pattern_name              = $slug . basename( $pattern_file );
			$patterns[ $pattern_name ] = json_decode(
				// phpcs:ignore WordPress.WP.AlternativeFunctions.file_get_contents_file_get_contents
				file_get_contents( $pattern_file ),
				true
			);
		};

		return $patterns;
	}
}
