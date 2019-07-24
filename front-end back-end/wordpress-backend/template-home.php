<?php /* Template Name: Home Page*/ ?>

<?php get_header(); ?>

<?php while (have_posts()) : the_post(); ?>
	<?php the_content(); ?>
<?php endwhile; ?>

<!-- Start Area Beranda-->
<?php $beranda = get_field('beranda');
    if($beranda): ?>
<section class="home" id="home">
    <div class="container">
        <div class="col-lg-5 col-md-12">
            <h1><?php echo $beranda['homepage_title']; ?></h1>
            <a href="<?php echo $beranda['homepage_link'];?>">
            <?php echo $beranda['homepage_link_text']; ?>
            </a>
        </div>
    </div>
</section>
<?php endif; ?>
<!-- End Area Main Page-->

<!-- Start Area Produk -->
<?php if( have_rows('produk') ): ?>

<section class="product-page" id="product-page">
    <div class="container">
        <div class="page-title">
            <h1 class="title">Produk Kami</h1>
        </div>
        <div class="row">

    <?php while( have_rows('produk') ): the_row(); 
        $image = get_sub_field('image');
        $product_title = get_sub_field('product_title');
        $product_title_2 = get_sub_field('product_title_2');
        $description = get_sub_field('description');
        $link = get_sub_field('link');
    ?>
            <div class="col-lg-3 col-md-5">
                <img src="<?php echo $image['sizes']['product_image'];?>" alt="">
                <h2><?php echo $product_title;?></h2>
                <h2><?php echo $product_title_2;?></h2>
                <p><?php echo $description;?></p>
                <?php if($link):?>
                <a class="order-link" href="<?php echo $link;?>">PESAN INI</br>via Tokopedia</a>
                <?php endif;?>
            </div>
    <?php endwhile; ?>
        </div>
    </div>
</section>
<?php endif; ?>
<!-- End Area Produk Kami -->

<!-- Start Area Tentang Abah -->
<?php $tentang = get_field('tentang');
    if($tentang): ?>
<section class="about-page" id="about-page">
    <div class="container">
        <div class="about-page-left">
            <div class="page-title">
                <h1 class="title"><?php echo $tentang['title']; ?></h1>
            </div>
        <div class="about-text">
            <h2><?php echo $tentang['main']; ?></h2>
            <p><?php echo $tentang['description']; ?></p>
            <p><?php echo $tentang['description_2']; ?></p>
        </div>
    </div>
        <div class="about-page-right">
            <img src="<?php bloginfo('template_directory');?>/../hubton-starter/assets/images/farmer.png">
        </div>
        </div>
</section>
<?php endif; ?>
<!-- End Area Tentang Abah -->

<!-- Start Area client-page -->
<?php if( have_rows('klien')): ?>
<section class="client-page" id="client-page">
    <div class="page-title">
        <h1 class="title">Klien Kami</h1>
    </div>
    <div class="container">
        <div class="row">
        <?php while( have_rows('klien') ): the_row(); 
            $image = get_sub_field('image');
        ?>
            <div class="col-lg-2 col-md-2 col-sm-2">
                <img src="<?php echo $image['sizes']['client_logo'];?>" alt="">
            </div>
        <?php endwhile; ?>
        </div>
    </div>
</section>
<?php endif; ?>
<!-- End Area client-page -->

<!-- Start Area article-page -->
<?php $featured_posts = get_field('featured_posts');
    if($featured_posts): ?>
        <section class="article-page" id="article-page">
            <div class="container">
                <div class="row article-page-title">
                    <div class="page-title col-lg-6">
                        <h1>Artikel & Berita</h1>
                    </div>
                <a href="<?php the_permalink( get_option('page_for_posts') ); ?>" class="other-article col-lg-6">Lainnya &#8594;</a>
                </div>
                <div class="row article-row">
                
                <?php foreach($featured_posts as $post) {
                        setup_postdata($post);
                ?>
                    <article class="article-item col-lg-4 col-md-6 col-sm-6">
                        <p class="dates"><?php the_date('Y-M-d'); ?></p>
                        <a href="<?php the_permalink(); ?>" class="article-link"><?php the_title(); ?></a>
                        <p><?php the_excerpt(); ?></p>
                    </article>
                <?php } ?>
                    <div class="other-article-mobile">
                        <a href="<?php the_permalink( get_option('page_for_posts') ); ?>">LAINNYA &#8594;</a>
                    </div>
                </div>
            </div>
        </section>
    <?php wp_reset_postdata(); ?>
<?php endif; ?>
<!-- End Area article-page -->

<?php get_footer(); ?>
