<?php
/**
 * Hero pattern markup.
 *
 * @package TestTest
 */

// Tool to escape strings: https://onlinestringtools.com/escape-string.
// If using Bootstrap or Tailwindcss classes, in order for them to get picked up during the build process place them either at the beginning of a class property or with a space after them at the end of the line before the quotes are escaped.
// i.e. - <div class=\"p-16\">.
// i.e. - <div class=\"p-16 has-background\">.
// i.e. - <div class=\"has-background p-16 \">.
// i.e. - This won't get picked up: <div class=\"has-background p-16\">.
$markup = "
<!-- wp:group {\"align\":\"full\",\"backgroundColor\":\"subtle-background\"} -->\n<div class=\"wp-block-group alignfull has-subtle-background-background-color has-background\"><div class=\"wp-block-group__inner-container\"><!-- wp:columns {\"verticalAlignment\":\"top\",\"align\":\"wide\"} -->\n<div class=\"wp-block-columns alignwide are-vertically-aligned-top\"><!-- wp:column {\"verticalAlignment\":\"top\",\"width\":25} -->\n<div class=\"wp-block-column is-vertically-aligned-top\" style=\"flex-basis:25%\"></div>\n<!-- /wp:column -->\n\n<!-- wp:column {\"verticalAlignment\":\"top\",\"width\":50} -->\n<div class=\"wp-block-column is-vertically-aligned-top\" style=\"flex-basis:50%\"><!-- wp:heading {\"align\":\"center\"} -->\n<h2 class=\"has-text-align-center\">Hero Block Pattern</h2>\n<!-- /wp:heading -->\n\n<!-- wp:paragraph {\"align\":\"center\"} -->\n<p class=\"has-text-align-center\">This is a block pattern starter template.  It's registered in the includes/class-register-block-patterns.php file.  It leverages a core group block, a core columns block, core heading block, core paragraph block, and core buttons block.</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:paragraph {\"align\":\"center\"} -->\n<p class=\"has-text-align-center\">Block patterns are super fun and easy to make.  Open the block editor and start crafting your pattern.  Then go up to options &gt; Code Editor.  Grab the code, escape the strings using this tool: <a href=\"https://onlinestringtools.com/escape-string\" target=\"_blank\">Escape Strings</a> and then add new patterns in the includes/block-patterns/ directory.  SO COOL!!</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:buttons {\"align\":\"center\"} -->\n<div class=\"wp-block-buttons aligncenter\"><!-- wp:button -->\n<div class=\"wp-block-button\"><a class=\"wp-block-button__link\">Learn More</a></div>\n<!-- /wp:button --></div>\n<!-- /wp:buttons --></div>\n<!-- /wp:column -->\n\n<!-- wp:column {\"verticalAlignment\":\"top\",\"width\":25} -->\n<div class=\"wp-block-column is-vertically-aligned-top\" style=\"flex-basis:25%\"></div>\n<!-- /wp:column --></div>\n<!-- /wp:columns --></div></div>\n<!-- /wp:group -->";

return array(
	'title'      => esc_html__( 'Hero', 'test-test' ),
	'categories' => array( 'hero', 'test-test' ),
	'content'    => $markup,
);
