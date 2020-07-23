<?php
/**
 * Register & render dynamic testimonial custom post type with meta block.
 *
 * @package TestTest
 */

namespace TestTest;

/**
 * Register & render dynamic testimonial custom post type with meta block in php.
 *
 * @since 1.0.0
 */
class Dynamic_Testimonial_Custom_Post_Type_With_Meta_Block {
	/**
	 * Register class with appropriate WordPress hooks
	 */
	public static function register() {
		$instance = new self();
		add_action( 'init', array( $instance, 'register_dynamic_testimonial_custom_post_type_with_meta_block' ) );
	}

	/**
	 * Registers the `test-test/dynamic-testimonial-custom-post-type-with-meta-block` block on server.
	 */
	public function register_dynamic_testimonial_custom_post_type_with_meta_block() {
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
						'render_dynamic_testimonial_custom_post_type_with_meta_block',
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
	public function render_dynamic_testimonial_custom_post_type_with_meta_block( $attributes, $content ) {

		$args = array(
			'post_type'        => $attributes['postType'],
			'numberposts'      => $attributes['postsToShow'],
			'post_status'      => 'publish',
			'order'            => $attributes['order'],
			'orderby'          => $attributes['orderBy'],
			'suppress_filters' => false,
		);

		if ( isset( $attributes['categories'] ) ) {
			$args['category__in'] = array_column( $attributes['categories'], 'id' );
		}

		$recent_posts = get_posts( $args );

		if ( count( $recent_posts ) === 0 ) {
			return 'No posts';
		}

		$markup = '';

		foreach ( $recent_posts as $post ) {
			$markup .= '<div class="bg-white p-10">';
			$meta    = get_post_meta( $post->ID, 'testimonial_meta' )[0];

			// Add the post quote.
			if ( $attributes['showQuote'] && isset( $meta['quote'] ) ) {
				$markup .= sprintf(
					'<h2>%1$s</h2>',
					esc_html( $meta['quote'] )
				);
			}

			// Add the post customer.
			if ( $attributes['showCustomer'] && isset( $meta['customer'] ) ) {
				$markup .= sprintf(
					'<p>%1$s</p>',
					esc_html( $meta['customer'] )
				);
			}

			// Add the image.
			if ( $attributes['showImg'] && isset( $meta['mediaUrl'] ) ) {
				$markup .= sprintf(
					'<img class="w-20 h-20 rounded-full" src="%1$s" />',
					esc_url( $meta['mediaUrl'] )
				);
			}

			$markup .= '</div>';
		}

		$class = 'wp-block-test-test-dynamic-testimonial-custom-post-type-with-meta-block';
		if ( isset( $attributes['align'] ) ) {
			$class .= ' align' . $attributes['align'];
		}

		return sprintf(
			'<div class="%1$s"><div class="grid grid-cols-3 gap-10">%2$s</div></div>',
			$class,
			$markup
		);
	}
}

/**
 * Initialize class.
 *
 * @since 1.0.0
 */
Dynamic_Testimonial_Custom_Post_Type_With_Meta_Block::register();
