<?php
/**
 * Hubton Widget Popular Post
 *
 * @package Hubton\Widgets
 */

/**
 * Popular Post Widget
 */
class Hubton_Popular_Post extends Hubton_Widget {
	/**
	 * Constructor
	 */
	public function __construct() {
		$widget_ops     = array(
			'classname'   => 'widget-popular-post',
			'description' => 'Show Popular Post',
		);
		$this->settings = array( 'title', 'posts_per_page' );
		parent::__construct( 'hubton_widget_popular_post', __( 'Custom - Popular Post', 'hubton' ), $widget_ops );
	}

	/**
	 * Render Widget
	 *
	 * @param array $args Widget Arguments.
	 * @param array $instance Widget Instance.
	 */
	public function widget( $args, $instance ) {
		extract( $args, EXTR_SKIP );
		extract( $instance, EXTR_SKIP );

		$posts_per_page = $posts_per_page ? $posts_per_page : 5;

		$post_query = new WP_Query(
			array(
				'post_type'      => 'post',
				'posts_per_page' => $posts_per_page,
				'meta_key'       => '_visitor_count',
				'orderby'        => 'meta_value_num',
				'no_found_rows'  => true,
			)
		);

		if ( $post_query->have_posts() ) {
			echo esc_textarea( $before_widget );

			if ( $title ) {
				echo esc_textarea( $before_title . apply_filters( 'widget_title', $title, $instance, $this->id_base ) . $after_title );
			}

			echo '<ul>';

			while ( $post_query->have_posts() ) {
				$post_query->the_post();
				echo '<li><a href="' . esc_url( get_permalink() ) . '">' . esc_html( get_the_title() ) . '</a></li>';
			}

			echo '</ul>';

			wp_reset_postdata();

			echo esc_textarea( $after_widget );
		}
	}

	/**
	 * Render Form
	 *
	 * @param array $instance Widget instance.
	 */
	public function form( $instance ) {
		$instance = $this->enforce_defaults( $instance );
		extract( $instance, EXTR_SKIP ); ?>
		<p>
			<label for="<?php echo esc_attr( $this->get_field_id( 'title' ) ); ?>"><?php esc_attr_e( 'Title (optional):', 'hubton' ); ?></label>
			<input type="text" name="<?php echo esc_attr( $this->get_field_name( 'title' ) ); ?>"  value="<?php echo esc_attr( $title ); ?>" class="widefat" id="<?php echo esc_attr( $this->get_field_id( 'title' ) ); ?>" />
		</p>
		<p>
			<label for="<?php echo esc_attr( $this->get_field_id( 'posts_per_page' ) ); ?>"><?php esc_attr_e( 'Number of Post to show:', 'hubton' ); ?></label>
			<input type="text" name="<?php echo esc_attr( $this->get_field_name( 'posts_per_page' ) ); ?>"  value="<?php echo esc_attr( $posts_per_page ); ?>" class="widefat" id="<?php echo esc_attr( $this->get_field_id( 'posts_per_page' ) ); ?>" />
		</p>
		<?php
	}
}

register_widget( 'Hubton_Popular_Post' );
