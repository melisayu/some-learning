<?php get_header(); ?>
<?php while (have_posts()) : the_post(); ?>
    <section id="primary" class="content-area">
        <div class="artikel-dan-berita container">
            <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
                <h1><?php echo get_the_title(); ?></h1>
                <div class="article-content"><?php the_content(); ?></div>
                <div class="row">
                        <div><?php previous_post_link(); ?></div>
                        <div><?php next_post_link(); ?></div>
                </div>
            </article>
        </div>
    </section>
<?php endwhile; ?>

<?php get_footer(); ?>