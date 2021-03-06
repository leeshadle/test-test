/**
 * External Dependencies
 */
import classnames from 'classnames';

/**
 * WordPress Dependencies
 */
import { __ } from '@wordpress/i18n';
import { ToggleControl } from '@wordpress/components';

/**
 * Internal Dependencies
 */
import Controls from './controls';

const Edit = ( props ) => {
	const {
		attributes,
		className,
		setAttributes,
		attributes: {
			isDarkBackground,
		},
	} = props;

	const rowClasses = classnames(
		'p-4 rounded-lg',
		{
			'bg-gray-900 text-white': isDarkBackground,
			'bg-white shadow': ! isDarkBackground,
		},
	);

	return (
		<div className={ className }>
			<div className={ rowClasses }>
				<Controls
					className={ className }
					attributes={ attributes }
					setAttributes={ setAttributes }
				/>
				<ToggleControl
					label={ __( 'Dark background', 'test-test' ) }
					checked={ isDarkBackground }
					onChange={ () => setAttributes( { isDarkBackground: ! isDarkBackground } ) }
				/>
				<p>This is a starter frontend block.</p>
				<ul>
					<li>Rendered by React on the frontend, giving you the ability to add interactive behavior, such as this toggle button or a modal or anything you can think of.</li>
					<li>Edit this block in the src/blocks/frontend-block/edit.js file.</li>
					<li>The src/frontend-block/save.js file is where you would place a container to render the frontend block in.</li>
					<li>The frontend rendered code can be edited in the src/blocks/frontend-block/frontend.js file.</li>
				</ul>
			</div>
		</div>
	);
}

export default Edit;
