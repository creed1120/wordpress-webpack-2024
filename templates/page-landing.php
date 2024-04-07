<?php
/**
 * Template Name: Landing Page
 * Template Post Type: post, page, product
 *
 */

get_header();
?>

<div id="post-<?php the_ID(); ?>" <?php post_class( 'content' ); ?>>

	<h1 class="entry-title"><?php the_title(); ?> ( & Bootstrap Icons)</h1>
    
<?php

	$blog_posts = new WP_Query([
			'post_type' => 'post',
			'post_status' => 'publish',
			'posts_per_page' => -1
		]);

	// echo "<pre>";
	// print_r($blog_posts);
	// wp_die('EOF');

	themes_starter_content_nav( 'nav-above' );

	if ( $blog_posts->have_posts() ) : ?>
		
		<div class="row">
			<?php while ( $blog_posts->have_posts() ) : $blog_posts->the_post(); 
				/**
				 * Include the Post-Format-specific template for the content.
				 * If you want to overload this in a child theme then include a file
				 * called content-___.php (where ___ is the Post Format name) and that will be used instead.
				 */
				get_template_part( 'content', 'index' ); // Post format: content-index.php
			?>

			<?php endwhile; ?>
		</div>
	<?php endif;

	wp_reset_postdata();

	themes_starter_content_nav( 'nav-below' ); ?>

</div><!-- /#post-<?php the_ID(); ?> -->

<?php get_footer(); ?>


