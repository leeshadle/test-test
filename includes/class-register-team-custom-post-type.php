<?php
/**
 * Register Team custom post type
 *
 * @package TestTest
 */

namespace TestTest;

/**
 * Register Team custom post type.
 *
 * @since 1.0.0
 */
class Register_Team_Custom_Post_Type {

	/**
	 * Register class with appropriate WordPress hooks
	 */
	public static function register() {
		$instance = new self();
		add_action( 'init', array( $instance, 'register_taxonomies' ), 5 );
		add_action( 'init', array( $instance, 'register_team_custom_post_type' ), 20 );
	}

	/**
	 * Register taxonomies.
	 *
	 * @return void
	 */
	public function register_taxonomies() {

		register_taxonomy(
			'department',  // The name of the taxonomy. Name should be in slug form (must not contain capital letters or spaces).
			'team', // Post type name.
			array(
				'hierarchical'      => true,
				'labels'            => array(
					'name'          => __( 'Departments', 'test-test' ),
					'singular_name' => __( 'Department', 'test-test' ),
					'all_items'     => __( 'All Departments', 'test-test' ),
					'search_items'  => __( 'Search Departments', 'test-test' ),
				),
				'public'            => true,
				'query_var'         => true,
				'rewrite'           => array(
					'slug'       => 'department',
					'with_front' => false,
				),
				'show_admin_column' => true,
				'show_ui'           => true,
				'show_in_rest'      => true,
			)
		);
	}

	/**
	 * Register team custom post type.
	 *
	 * @return void
	 */
	public function register_team_custom_post_type() {

		register_post_type(
			'team',
			array(
				'labels'        => array(
					'name'               => _x( 'Team Members', 'post type general name' ),
					'singular_name'      => _x( 'Member', 'post type singular name' ),
					'add_new'            => _x( 'Add Member', 'team' ),
					'add_new_item'       => __( 'Add New Member' ),
					'edit_item'          => __( 'Edit Member' ),
					'new_item'           => __( 'New Member' ),
					'all_items'          => __( 'All Members' ),
					'view_item'          => __( 'View Member' ),
					'search_items'       => __( 'Search Teams' ),
					'not_found'          => __( 'No team members found' ),
					'not_found_in_trash' => __( 'No team members found in the Trash' ),
					'menu_name'          => 'Team',
				),
				'menu_icon'     => 'dashicons-groups',
				'taxonomies'    => array( 'department' ),
				'public'        => true,
				'has_archive'   => true,
				'rewrite'       => array(
					'slug' => 'team', // Custom slug.
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
						'core/group',
						array(
							'align'           => 'full',
							'backgroundColor' => 'subtle-background',
						),
						array(
							array(
								'core/columns',
								array(
									'align'             => 'center',
									'verticalAlignment' => 'center',
									'className'         => 'mb-0',
								),
								array(
									array(
										'core/column',
										array( 'width' => 33.33 ),
										array(
											array(
												'core/image',
												array( 'align' => 'center' ),
											),
										),
									),
									array(
										'core/column',
										array( 'width' => 66.66 ),
										array(
											array(
												'core/heading',
												array( 'placeholder' => 'This is a team custom post type block.' ),
											),
											array(
												'core/paragraph',
												array( 'placeholder' => 'The template for this block is defined in the includes/class-register-team-custom-post-type.php file.  The markup that gets rendered for this block is in the src/blocks/dynamic-team-custom-post-type-block/edit.js file.  The fronted markup, that is rendered by the server, for this dynamic block is in the src/blocks/dynamic-team-custom-post-type-block/class-team-custom-post-type.php file.' ),
											),
											array(
												'core/paragraph',
												array( 'placeholder' => 'The template for this custom post type is using only core WordPress blocks.' ),
											),
										),
									),
								),
							),
						),
					),
				),
			)
		);
	}
}
