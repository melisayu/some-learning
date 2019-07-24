<?php
/**
 * Hook into enqueue_scripts to enqueue scripts and styles
 *
 * @package WordPress
 * @since 1.0
 */

add_action(
	'wp_enqueue_scripts',
	function() {
		$is_debug = WP_DEBUG;

		if ( isset( $_REQUEST['debug'] ) ) {
			switch ( $_REQUEST['debug'] ) {
				case 'true':
					$is_debug = true;
					break;

				case 'false':
					$is_debug = false;
					break;
			}
		}

		$debug = $is_debug ? '' : '.min';

		// Include main style.
		wp_enqueue_style( 'hubton-main', get_stylesheet_uri(), [], false );
		wp_enqueue_style( 'hubton-app', get_stylesheet_directory_uri() . '/assets/css/app' . $debug . '.css', array( 'hubton-main' ), false );

		// Modernizr.
		wp_enqueue_script( 'modernizr', get_template_directory_uri() . '/assets/js/modernizr.js', array(), '3.6.0', false );

		// Include the javascript.
		wp_enqueue_script( 'jquery' );
		wp_enqueue_script( 'hubton-scripts', get_template_directory_uri() . '/assets/js/scripts' . $debug . '.js', array( 'jquery', 'wp-util' ), '1.0', true );

		wp_localize_script(
			'hubton-scripts',
			'hubton_config',
			array(
				'ajaxurl' => admin_url( 'admin-ajax.php' ),
				'homeurl' => home_url( '/' ),
			)
		);
	}
);
