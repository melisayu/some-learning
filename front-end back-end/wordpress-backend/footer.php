        <!-- Start Area Kontak Kami -->
        <?php $kontak = get_field('kontak', get_option('page_on_front'));?>
        <section class="contact" id="contact">
            <div class="column">
                <div class="container">
                    <h1><?php echo $kontak['title']; ?></h1>
                    <h2><?php echo $kontak['description']; ?></h2>
                    <h3><?php echo $kontak['contact']; ?></h3>
                </div>
            </div>
        </section>
        <section class="footer-and-copyright">
            <div class="container">
                <div class="">
                    <footer><p>&copy; Copyright 2019 Abah Potato. All rights reserved. Site by Hubton Indonesia</p></footer>
                </div>
                <div class="">
                    <img src="<?php bloginfo('template_directory');?>/../hubton-starter/assets/images/hubton.png">
                </div>
            </div>
        </section>
        <!-- End Area Kontak Kami -->
        <?php wp_footer();?>
    </body>
</html>
