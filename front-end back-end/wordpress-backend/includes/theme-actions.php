<?php
/**
 * Theme Actions
 *
 * @package Hubton\Actions
 */

namespace Hubton\Actions;

/**
 * After Setup Theme
 */
add_action(
	'after_setup_theme',
	function () {
		// Define theme support.
		add_theme_support( 'post-thumbnails' );
		add_theme_support( 'title-tag' );
		add_theme_support( 'nav-menus' );

		// Add image size.
		add_image_size( 'square-large', 394, 394, true );

		// Register Nav Menus.
		register_nav_menus(
			[
				'main-menu' => __( 'Main Menu', 'hubton' ),
			]
		);
	}
);

/**
 * TGMPA Require Plugins
 */
add_action(
	'tgmpa_register',
	function() {
		$plugins = array(
			array(
				'name'     => 'Contact Form 7',
				'slug'     => 'contact-form-7',
				'required' => true,
			),

			array(
				'name' => 'Flamingo',
				'slug' => 'flamingo',
			),

			array(
				'name'        => 'WordPress SEO by Yoast',
				'slug'        => 'wordpress-seo',
				'is_callable' => 'wpseo_init',
				'required'    => true,
			),

			array(
				'name' => 'Regenerate Thumbnails',
				'slug' => 'regenerate-thumbnails',
			),

			array(
				'name' => 'WP Mail SMTP by WPForms',
				'slug' => 'wp-mail-smtp',
			),

			array(
				'name'     => 'Classic Editor',
				'slug'     => 'classic-editor',
				'required' => true,
			),

			array(
				'name' => 'Safe SVG',
				'slug' => 'safe-svg',
			),

			array(
				'name' => 'Dynamic Asset Versioning',
				'slug' => 'dynamic-asset-versioning',
			),
		);

		$config = array(
			'id'           => 'hubton',                // Unique ID for hashing notices for multiple instances of TGMPA.
			'default_path' => '',                      // Default absolute path to bundled plugins.
			'menu'         => 'tgmpa-install-plugins', // Menu slug.
			'parent_slug'  => 'themes.php',            // Parent menu slug.
			'capability'   => 'edit_theme_options',    // Capability needed to view plugin install page, should be a capability associated with the parent menu used.
			'has_notices'  => true,                    // Show admin notices or not.
			'dismissable'  => true,                    // If false, a user cannot dismiss the nag message.
			'dismiss_msg'  => '',                      // If 'dismissable' is false, this message will be output at top of nag.
			'is_automatic' => false,                   // Automatically activate plugins after installation or not.
			'message'      => '',                      // Message to output right before the plugins table.
		);

		tgmpa( $plugins, $config );
	}
);

/**
 * Add Editor Style
 */
add_action(
	'init',
	function() {
		$is_debug = WP_DEBUG;

		if ( isset( $_REQUEST['debug'] ) ) {
			$is_debug = true;
		}

		$debug = $is_debug ? '' : '.min';

		$font_url = str_replace( ',', '%2C', '//fonts.googleapis.com/css?family=Quicksand:300,400,500,700' );
		add_editor_style(
			[
				'assets/css/editor-style' . $debug . '.css',
			]
		);
	}
);

/**
 * Add Extra Upload Mime Types
 */
add_filter(
	'upload_mimes',
	function ( $mimes ) {
		$mimes = array_merge(
			$mimes,
			[
				'docx'     => 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
				'xlsx|xls' => 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
				'zip'      => 'application/zip',
				'rar'      => 'application/x-rar-compressed',
				'svg'      => 'image/svg+xml',
			]
		);

		return $mimes;
	}
);

/**
 * Add Class to Contact Form 7 Form
 */
add_filter(
	'wpcf7_form_class_attr',
	function ( $class ) {
		$class .= ' contact-form';
		return $class;
	}
);

/**
 * Remove [..] in excerpt
 */
add_filter(
	'excerpt_more',
	function ( $text ) {
		return '&hellip;';
	}
);

/**
 * Change excerpt length
 */
add_filter(
	'excerpt_length',
	function ( $length ) {
		return 25;
	},
	999
);

/**
 * Add Custom Style for TinyMce format dropdown
 */
add_filter(
	'mce_buttons_2',
	function ( $buttons ) {
		array_unshift( $buttons, 'styleselect' );
		return $buttons;
	}
);

add_filter(
	'tiny_mce_before_init',
	function ( $init_array ) {
		// Define the style_formats array.
		$style_formats = array(
			array(
				'title'   => 'Highlight',
				'block'   => 'span',
				'classes' => 'text-highlight',
				'wrapper' => true,
			),
		);
		// Insert the array, JSON ENCODED, into 'style_formats'.
		$init_array['style_formats'] = wp_json_encode( $style_formats );

		return $init_array;
	}
);

/**
 * Change the post type title if needed
 */
add_filter(
	'enter_title_here',
	function ( $title ) {
		$screen = get_current_screen();

		if ( 'team' === $screen->post_type ) {
			$title = __( "Enter the Team's name here", 'hubton' );
		}

		return $title;
	}
);
