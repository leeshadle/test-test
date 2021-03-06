<?php
/**
 * Register Testimonial custom post type
 *
 * @package TestTest
 */

namespace TestTest;

/**
 * Register custom post type.
 *
 * @since 1.0.0
 */
class Register_Testimonial_Custom_Post_Type {

	/**
	 * Register class with appropriate WordPress hooks
	 */
	public static function register() {
		$instance = new self();
		add_action( 'init', array( $instance, 'register_post_meta' ), 5 );
		add_action( 'init', array( $instance, 'register_testimonial_custom_post_type' ), 20 );
	}

	/**
	 * Register testimonial meta.
	 *
	 * @return void
	 */
	public function register_post_meta() {

		register_post_meta(
			'testimonial',
			'testimonial_meta',
			array(
				'single'       => true,
				'type'         => 'object',
				'show_in_rest' => array(
					// More Info on object and array meta types
					// https://make.wordpress.org/core/2019/10/03/wp-5-3-supports-object-and-array-meta-types-in-the-rest-api/.
					'schema' => array(
						'type'       => 'object',
						'properties' => array(
							'quote'    => array(
								'type' => 'string',
							),
							'customer' => array(
								'type' => 'string',
							),
							'mediaUrl' => array(
								'type'   => 'string',
								'format' => 'uri',
							),
						),
					),
				),
			)
		);
	}

	/**
	 * Register custom post types.
	 *
	 * @return void
	 */
	public function register_testimonial_custom_post_type() {

		register_post_type(
			'testimonial',
			array(
				'labels'        => array(
					'name'               => _x( 'Testimonials', 'post type general name' ),
					'singular_name'      => _x( 'Testimonial', 'post type singular name' ),
					'add_new'            => _x( 'Add Testimonial', 'testimonial' ),
					'add_new_item'       => __( 'Add New Testimonial' ),
					'edit_item'          => __( 'Edit Testimonial' ),
					'new_item'           => __( 'New Testimonial' ),
					'all_items'          => __( 'All Testimonials' ),
					'view_item'          => __( 'View Testimonial' ),
					'search_items'       => __( 'Search Testimonials' ),
					'not_found'          => __( 'No testimonials found' ),
					'not_found_in_trash' => __( 'No testimonials found in the Trash' ),
					'menu_name'          => 'Testimonials',
				),
				'menu_icon'     => 'dashicons-format-quote',
				'taxonomies'    => array( 'categories' ),
				'public'        => true,
				'has_archive'   => true,
				'rewrite'       => array(
					'slug' => 'testimonial', // Custom slug.
				),
				'show_in_rest'  => true, // Use in block editor.
				'supports'      => array(
					'author',
					// Must support custom-fields in order to add custom post meta to custom post types.
					'custom-fields',
					'editor',
					'excerpt',
					'thumbnail',
					'title',
				),
				'template_lock' => 'all',
				'template'      => array(
					array(
						'test-test/testimonial-custom-post-type-block',
						array(
							'align' => 'full',
						),
					),
				),
			)
		);
	}
}
