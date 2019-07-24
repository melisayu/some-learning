<?php
/**
 * Theme main function files
 *
 * @package Hubton
 */

error_reporting( E_ALL ); // Disable error reporting.

if ( ! isset( $content_width ) ) {
	$content_width = 760;
}

/**
 * Include Advance Custom Fields Scripts
 */
add_filter(
	'acf/settings/path',
	function( $path ) {
		$path = get_template_directory() . '/includes/acf/';
		return $path;
	}
);

add_filter(
	'acf/settings/dir',
	function( $dir ) {
		$dir = get_template_directory_uri() . '/includes/acf/';
		return $dir;
	}
);

/**
 * Load the theme-specific files, with support for overriding
 * via a child theme.
 */
$includes = [
	'includes/acf/acf.php',
	'includes/theme-actions.php',
	'includes/theme-functions.php',
	'includes/theme-scripts-styles.php',
	'includes/theme-post-types.php',
	'includes/theme-sidebar.php',
	'includes/theme-widgets.php',
	'includes/tgm-plugin-activation/class-tgm-plugin-activation.php',
];

// Load stylesheets *
function load_stylesheets() {
    wp_register_style('style', get_template_directory_uri() . '/style.css', array(), 1, 'all');
    wp_enqueue_style('style');

    wp_register_style('custom', get_template_directory_uri() . '/custom.css', array(), 1, 'all');
    wp_enqueue_style('custom');
}

add_action('wp_enqueue_scripts', 'load_stylesheets');

// Allow child themes/plugins to add widgets to be loaded.
$includes = apply_filters( 'hubton_includes', $includes );

// Include all files inside $include variables.
foreach ( $includes as $i ) {
	locate_template( $i, true );
}

// Allow ACF to create custom fields for options page.
if ( function_exists( 'acf_add_options_page' ) ) {
	acf_add_options_page();
}


// Custom product image sizes
add_image_size('product_image', 170, 130, false);
add_image_size('client_logo', 80, 80, false);

// Register Menus
register_nav_menus(
	array(
		
	)
);