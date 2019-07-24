<div class="social-links">
	<?php
	$social_links = array(
		'facebook'  => 'facebook',
		'instagram' => 'instagram',
		'youtube'   => 'youtube',
		'twitter'   => 'twitter',
		'linkedin'  => 'linkedin',
	);

	foreach ( $social_links as $icon => $social ) :
		$option = get_field( "social_links_{$social}", 'option' );
		if ( $option ) : ?>
			<a href="<?php echo esc_attr( $option ); ?>" target="_blank">
				<i class="icon-<?php echo esc_attr( $icon ); ?>"></i>
				<span class="screen-reader-text"><?php echo esc_attr( $social ); ?></span>
			</a>
		<?php endif; ?>
	<?php endforeach; ?>
</div>
