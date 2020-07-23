<?php
/**
 * Register & render dynamic team custom post type block.
 *
 * @package TestTest
 */

namespace TestTest;

/**
 * Register & render dynamic team custom post type block in php.
 *
 * @since 1.0.0
 */
class Dynamic_Team_Custom_Post_Type_Block {
	/**
	 * Register class with appropriate WordPress hooks
	 */
	public static function register() {
		$instance = new self();
		add_action( 'init', array( $instance, 'register_dynamic_team_custom_post_type_block' ) );
	}

	/**
	 * Registers the `test-test/dynamic-team-custom-post-type-block` block on server.
	 */
	public function register_dynamic_team_custom_post_type_block() {
		// Shortcuts for variables.
		$plugin_instance = Plugin::get_instance();
		$slug            = $plugin_instance->slug;
		$path            = __DIR__ . '/block.json';
		// phpcs:ignore WordPress.WP.AlternativeFunctions.file_get_contents_file_get_contents
		$metadata = json_decode( file_get_contents( $path ), true );

		// Scripts and styles are registered in includes/class-register-blocks.php.
		register_block_type(
			$metadata['name'],
			array_merge(
				array(
					'style'         => $slug . '-block',
					'editor_script' => $slug . '-block-editor',
					'editor_style'  => $slug . '-block-editor',
				),
				$metadata,
				array(
					'render_callback' => array(
						$this,
						'render_dynamic_team_custom_post_type_block',
					),
				)
			)
		);
	}

	/**
	 * Render dynamic block markup.
	 *
	 * @param Array  $attributes block attributes.
	 * @param String $content block inner content.
	 * @return string The dynamic block markup.
	 */
	public function render_dynamic_team_custom_post_type_block( $attributes, $content ) {

		$args = array(
			'post_type'        => $attributes['postType'],
			'numberposts'      => $attributes['postsToShow'],
			'post_status'      => 'publish',
			'order'            => $attributes['order'],
			'orderby'          => $attributes['orderBy'],
			'suppress_filters' => false,
		);

		if ( isset( $attributes['categories'] ) && ! isset( $attributes['taxonomy'] ) ) {
			$args['category__in'] = array_column(
				$attributes['categories'],
				'id'
			);
		}

		if ( count( $attributes['categories'] ) > 0 && isset( $attributes['taxonomy'] ) ) {
			$args['tax_query'] = array(
				array(
					'taxonomy' => $attributes['taxonomy'],
					'field'    => 'term_id',
					'terms'    => array_column(
						$attributes['categories'],
						'id'
					),
				),
			);
		}

		$recent_posts = get_posts( $args );

		if ( count( $recent_posts ) === 0 ) {
			return 'No posts';
		}

		$posts = '';

		foreach ( $recent_posts as $post ) {
			$posts .= $post->post_content;
		}

		$class = 'wp-block-test-test-dynamic-team-custom-post-type-block';
		if ( isset( $attributes['align'] ) ) {
			$class .= ' align' . $attributes['align'];
		}

		return sprintf(
			'<div class="%1$s">%2$s</div>',
			$class,
			$posts
		);
	}
}

/**
 * Initialize class.
 *
 * @since 1.0.0
 */
Dynamic_Team_Custom_Post_Type_Block::register();
