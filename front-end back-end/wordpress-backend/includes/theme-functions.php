<?php
/**
 * Theme Functions
 *
 * Contains helper functions for theme
 *
 * @package Hubton\Functions
 */

namespace Hubton\Functions;

/**
 * Print Author post Link
 *
 * @param int $id Post ID.
 */
function author_links( $id = '' ) {
	if ( $id ) : ?>
		<a href="<?php echo esc_url( get_author_posts_url( $id ) ); ?>" rel="author" class="author">
			<span class="fn"><?php echo esc_html( get_the_author_meta( 'user_nicename', $id ) ); ?></span>
		</a>
		<?php
	endif;
}

/**
 * Get oEmbed meta
 *
 * @param Int $id Post ID.
 */
function get_first_oembed( $id ) {
	$meta = get_post_custom( $id );

	foreach ( $meta as $key => $value ) {
		if ( false !== strpos( $key, 'oembed' ) ) {
			if ( false !== strpos( $value[0], 'iframe' ) ) {
				return $value[0];
			}
		}
	}
}

/**
 * Get Copyrights
 */
function copyrights() {
	$copyrights = get_field( 'copyright_text', 'option' );
	if ( $copyrights ) {
		$patterns     = array( '/{YEAR}/' );
		$replacements = array( date( 'Y' ) );
		$copyrights   = preg_replace( $patterns, $replacements, $copyrights );
		echo esc_textarea( $copyrights );
	} else {
		echo esc_textarea( '&copy; Copyright ' . date( 'Y' ) . ' Yours Visual. ' );
		echo esc_textarea( 'All Rights Reserved. ' );
		echo esc_textarea( 'Site by <a href="https://hubton.com" target="_blank" rel="nofollow">Hubton Indonesia</a>' );
	}
}
