<!DOCTYPE html>
<html class="no-js" <?php language_attributes(); ?>>
    <head <?php language_attributes(); ?>>
        <!-- Tab, mobile Specific Meta -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0" name="viewport">
        <link href="https://fonts.googleapis.com/css?family=Lilita+One&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <?php wp_head();?>
    </head>
    <body>
        <header class="header">
            <a href="#"><img src="<?php bloginfo('template_directory');?>/../hubton-starter/assets/images/abahpotato-logo.png" class="logo"></a>
            <input class="menu-btn" type="checkbox" id="menu-btn" />
            <label class="menu-icon" for="menu-btn">
                <span class="navicon"></span>
                <span class="navicon-menu">MENU</span>
                <span class="navicon-contact"><a href="#contact" style="color:#ff8b13">08112033727</a></span>
            </label>
            <?php
            wp_nav_menu(
                array(
                    'menu_id' => 'main-menu',
                    'container' => 'ul',
                )
            );?>
        </header>