<?php
/**
 * Hubton Widget
 *
 * Hubton Widget Class, other widget need to be extend from this class
 *
 * @package Hubton\Widgets
 */

/**
 * Hubton Widget Class
 */
class Hubton_Widget extends WP_Widget {
	/**
	 * Save Widget
	 *
	 * @param array $new_instance New Instance.
	 * @param array $old_instance Old Instance.
	 */
	public function update( $new_instance, $old_instance ) {
		return $new_instance;
	}

	/**
	 * Enforce Defaults
	 *
	 * @param array $instance Widget Instance.
	 */
	public function enforce_defaults( $instance ) {
		$defaults = $this->get_settings();
		$instance = wp_parse_args( $instance, $defaults );

		return $instance;
	}

	/**
	 * Provides an array of the settings with the setting name as the
	 * key and the default value as the value
	 * This cannot be called get_settings() or it will override
	 * WP_Widget::get_settings()
	 */
	public function get_settings() {
		// Set the default to a blank string.
		$settings = array_fill_keys( $this->settings, '' );
		// Now set the more specific defaults.
		return $settings;
	}
}
