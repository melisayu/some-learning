<?php
/**
 * Load All Custom Widgets
 *
 * @package WordPress
 */

$widgets = [
	'includes/widgets/class-hubton-widget.php',
	'includes/widgets/class-hubton-popular-post.php',
];

// Allow child themes/plugins to add widgets to be loaded.
$widgets = apply_filters( 'hubton_widgets', $widgets );

foreach ( $widgets as $w ) {
	locate_template( $w, true );
}
