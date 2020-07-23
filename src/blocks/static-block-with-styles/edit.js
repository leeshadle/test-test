/**
 * External Dependencies
 */
import classnames from 'classnames';

/**
 * WordPress Dependencies
 */
import { __ } from '@wordpress/i18n';

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
			// put attribute key names here to use them
		},
	} = props;

	return (
		<>
			<Controls
				className={ className }
				attributes={ attributes }
				setAttributes={ setAttributes }
			/>
			<div className={ className }>
				<p>{ __( 'This is a static starter block with styles.', 'test-test' ) }</p>
				<p>{ __( 'Styles defined in the src/blocks/static-block-with-styles/index.js can be added to a block and styled for the frontend in src/blocks/static-block-with-styles/style.scss and editor only styles can be placed in src/blocks/static-block-with-styles/edit.scss.', 'test-test' ) }</p>
				<p>{ __( 'i.e. - style name light would generate the class is-style-light that you can then use to create a unique block style.', 'test-test' ) }</p>
				<p>{ __( 'Edit this file in src/blocks/static-block-with-styles/edit.js.', 'test-test' ) }</p>
			</div>
		</>
	);
};

export default Edit;
