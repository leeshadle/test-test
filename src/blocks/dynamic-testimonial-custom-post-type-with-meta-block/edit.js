/**
 * External Dependencies
 */
import { data } from '@blockhandbook/data';
const { withPosts } = data;

/**
 * WordPress Dependencies
 */
import { __ } from '@wordpress/i18n';
import { Spinner } from '@wordpress/components';

/**
 * Internal Dependencies
 */
import Controls from './controls';

const Edit = ( props ) => {
	const {
		setAttributes,
		className,
		attributes,
		posts,
		taxonomies,
		attributes: {
			postsToShow,
			showImg,
			showCustomer,
			showQuote,
		}
	} = props;

	if ( ! posts ) {
		return (
			<>
				<Spinner />
					Loading...
			</>
		);
	}

	const hasPosts = Array.isArray( posts ) && posts.length;
	if ( ! hasPosts  ) {
		return (
			<>
				<Controls
					attributes={ attributes }
					setAttributes={ setAttributes }
				/>
				{ __( 'No posts found.', 'test-test' ) }
				<p>
				{
					__( 'This is a starter dynamic testimonial custom post type block. To add posts go to testimonial > add testimonial. This block renders content saved to the server, in particular it loops through the testimonial custom post type.  This block also demonstrates how to register custom post meta and expose it to the user to customize the look of the testimonial posts in the editor.  Edit this file in src/blocks/dynamic-testimonial-custom-post-type-with-meta-block/edit.js.  The frontend markup is rendered by the server and the code for that is in src/blocks/dynamic-testimonial-custom-post-type-with-meta-block/class-dynamic-testimonial-custom-post-type-with-meta-block.php.', 'test-test' )
				}
				</p>
			</>
		);
	}

	// Removing posts from display should be instant.
	const displayPosts =
	posts.length > postsToShow
		? posts.slice( 0, postsToShow )
		: posts;

	return (
		<>
			<Controls
				attributes={ attributes }
				setAttributes={ setAttributes }
				taxonomies={ taxonomies }
			/>
			<div className={ className } >
				<p>
				{
					__( 'This is a starter dynamic testimonial custom post type block.  This block renders content saved to the server, in particular it loops through the testimonial custom post type.  This block also demonstrates how to register custom post meta and expose it to the user to customize the look of the testimonial posts in the editor.  Edit this file in src/blocks/dynamic-testimonial-custom-post-type-with-meta-block/edit.js.  The frontend markup is rendered by the server and the code for that is in src/blocks/dynamic-testimonial-custom-post-type-with-meta-block/class-dynamic-testimonial-custom-post-type-with-meta-block.php.', 'test-test' )
				}
				</p>
				<div className="grid grid-cols-3 gap-10">
				{
					displayPosts.map( ( post, i ) => {
						const {
							meta: {
								testimonial_meta: {
									quote,
									customer,
									mediaUrl,
								}
							}
						} = post;

						return (
							
							<div className="bg-white p-10" key={ post.id }>
								{
									!! quote && showQuote &&
									<h2>{ quote }</h2>
								}
								{
									!! customer && showCustomer &&
									<p>{ customer }</p>
								}
								{
									!! mediaUrl && showImg &&
									<img className="w-20 h-20 rounded-full" src={ mediaUrl } alt=""/>
								}
								
							</div>
						);
					} )
				}
				</div>
			</div>
		</>
	);
}

export default withPosts( Edit );
