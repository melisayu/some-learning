<?php get_header(); ?>
<div class="container article-area">
<?php while (have_posts()) : the_post(); ?>
    <article class="article-item  col-lg-4 col-md-6 col-sm-6">
        <p class="dates"><?php the_date('Y-M-d'); ?></p>
        <a href="<?php the_permalink(); ?>" class="article-link"><?php the_title(); ?></a>
        <p><?php the_excerpt(); ?></p>
    </article>
<?php endwhile; ?>
</div>
<div clas="container">
<div class="navigation"><p><?php posts_nav_link('&#8734;','&laquo;&laquo; Go Forward 
In Time','Go Back in Time &raquo;&raquo;'); ?></p></div>
</div>
<?php get_footer(); ?>
