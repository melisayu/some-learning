<?php
/**
 * Register Sidebar
 *
 * @package WordPress
 */

add_action(
	'widgets_init',
	function() {
		register_sidebar(
			[
				'name'          => 'Widgets',
				'id'            => 'main-widget',
				'description'   => 'Main Widget',
				'before_widget' => '<aside id="%1$s" class="widget %2$s">',
				'after_widget'  => '</aside>',
				'before_title'  => '<h4 class="widget-title">',
				'after_title'   => '</h4>',
			]
		);
	}
);
