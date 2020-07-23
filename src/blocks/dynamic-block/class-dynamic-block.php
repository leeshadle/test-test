<?php
/**
 * Register & render dynamic block.
 *
 * @package TestTest
 */

namespace TestTest;

/**
 * Register & render dynamic block in php.
 *
 * @since 1.0.0
 */
class Dynamic_Block {
	/**
	 * Register class with appropriate WordPress hooks
	 */
	public static function register() {
		$instance = new self();
		add_action( 'init', array( $instance, 'register_dynamic_block' ) );
	}

	/**
	 * Registers the `test-test/dynamic-block` block on server.
	 */
	public function register_dynamic_block() {
		// Shortcuts for variables.
		$plugin_instance = Plugin::get_instance();
		$slug            = $plugin_instance->slug;
		$path            = __DIR__ . '/block.json';
		// phpcs:ignore WordPress.WP.AlternativeFunctions.file_get_contents_file_get_contents
		$metadata = json_decode( file_get_contents( $path ), true );

		// These scripts and styles are registered in includes/class-register-blocks.php.
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
						'render_dynamic_block',
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
	public function render_dynamic_block( $attributes, $content ) {

		$args = array(
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
			$markup .= '<li>';

			// Add the featured image.
			if ( $attributes['showFeaturedImage'] && has_post_thumbnail( $post ) ) {
				$markup .= sprintf(
					'<div><a href="%1$s">%2$s</a></div>',
					esc_url( get_permalink( $post ) ),
					get_the_post_thumbnail(
						$post,
						$attributes['featuredImageSize']
					)
				);
			}

			// Add the post title.
			if ( isset( $attributes['showPostTitle'] ) && $attributes['showPostTitle'] ) {
				$markup .= sprintf(
					'<h3><a href="%1$s">%2$s</a></h3>',
					esc_url( get_permalink( $post ) ),
					esc_html( get_the_title( $post ) )
				);
			}

			// Add the post author.
			if ( isset( $attributes['showPostAuthor'] ) && $attributes['showPostAuthor'] ) {
				$markup .= sprintf(
					'<p>By: %1$s</p>',
					get_the_author_meta( 'display_name', $post->post_author )
				);
			}

			// Add the post date.
			if ( isset( $attributes['showPostDate'] ) && $attributes['showPostDate'] ) {
				$markup .= sprintf(
					'<p><time datetime="%1$s">%2$s</time></p>',
					esc_attr( get_the_date( 'c', $post ) ),
					esc_html( get_the_date( '', $post ) )
				);
			}

			// Add the post excerpt.
			if ( isset( $attributes['showPostExcerpt'] ) && $attributes['showPostExcerpt'] ) {
				$markup .= sprintf(
					'<div>%1$s</div>',
					get_the_excerpt( $post )
				);
			}

			$markup .= '</li>';
		}

		$class = 'wp-block-test-test-dynamic-block';
		if ( isset( $attributes['align'] ) ) {
			$class .= ' align' . $attributes['align'];
		}

		return sprintf(
			'<div class="%1$s"><ul class="list-none">%2$s</ul></div>',
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
Dynamic_Block::register();
