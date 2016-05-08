<?php
	
namespace rpsslideshow\display;

/**
* Class utilized to display a Gallery on an HTML page
* 
* @author		Pablo S. Gallastegui
* @copyright	2015 Red Pixel Studios
* @version		1.0.0
* @package		rpsslideshow\display
*/

class GalleryView {
    /** @var  Gallery											$_gallery						the gallery of images to be displayed. */
    private $_gallery;
    /** @var  HTMLFormat										$_format						the format used for the output. */
    private $_format;
    /** @var  HTMLFormat										$_theme 						the theme used for the output. */
    private $_theme;
    /** @var  boolean											$_images_as_backgrounds			boolean value specifying if the images should be displayed as the background of a block element. */
    private $_images_as_backgrounds;
    /** @var  rpsslideshow\display\social\facebook\Facebook		$_facebook						object specifying the facebook setup for the gallery. If null, no facebook options are displayed */
    private $_facebook;
    /** @var  rpsslideshow\display\social\pinterest\Pinterest	$_pinterest						object specifying the pinterest setup for the gallery. If null, no pinterest options are displayed. */
    private $_pinterest;
    /** @var  ContainerTag										$_container						the containing tag surrounding the gallery. */
    private $_container;
    /** @var  boolean											$_show_heading					boolean value specifying if the images display a heading. */
    private $_show_heading;
    /** @var  HeadingContainerTag								$_heading_container				the string specifying the containing tag for the image headings. */
    private $_heading_container;
    /** @var  rpsslideshow\Alignment							$_heading_alignment				the alignment of the heading of the images in the gallery. */
    private $_heading_alignment;
    /** @var  boolean											$_show_caption					boolean value specifying if the images display a caption. */
    private $_show_caption;
    /** @var  rpsslideshow\Alignment							$_caption_alignment				the alignment of the caption of the images in the gallery. */
    private $_caption_alignment;
    /** @var  int												$_page_size						number of images per page. */
    private $_page_size;
    /** @var  boolean 											$_pagination_style 				boolean values specifying if the builtin pagination navigation styles should be used. */
    private $_builtin_pagination_style;
    
    /**
	* <CTOR>
	*
	* @param	Gallery		$gallery		the gallery to be displayed
	*/
	function __construct( $gallery ) {
		$this->setPageSize( 0 );
		$this->setGallery( $gallery );
	}
    
    /**
	* Set the gallery to be displayed
	*
	* @param	Gallery	$transition_in	the gallery to be displayed
	*/
	function setGallery( $gallery ) {
		$this->_gallery = $gallery;
	}
    /**
	* Get the gallery to be displayed
	*
	* @return	Gallery		the gallery to be displayed
	*/
	function getGallery() {
		return $this->_gallery;
	}
    
    /**
	* Set the format used for the output
	*
	* @param	HTMLFormat	$format	the format used for the output
	*/
	function setFormat( $format ) {
		$this->_format = $format;
	}
    /**
	* Get the format used for the output
	*
	* @return	HTMLFormat		the format used for the output
	*/
	function getFormat() {
		return $this->_format;
	}
    
    /**
	* Set the theme used for the output
	*
	* @param	HTMLFormat	$theme	the theme used for the output
	*/
	function setTheme( $theme ) {
		$this->_theme = $theme;
	}
    
    /**
	* Get the theme used for the output
	*
	* @return	HTMLFormat		the theme used for the output
	*/
	function getTheme() {
		return $this->_theme;
	}
    
    /**
	* Set the boolean value specifying if the images should be displayed as the background of a block element
	*
	* @param	boolean	$images_as_backgrounds	the boolean value specifying if the images should be displayed as the background of a block element
	*/
	function setImagesAsBackgrounds($images_as_backgrounds) {
		$this->_images_as_backgrounds = $images_as_backgrounds;
	}
    /**
	* Get the boolean value specifying if the images should be displayed as the background of a block element
	*
	* @return	boolean		the boolean value specifying if the images should be displayed as the background of a block element
	*/
	function displaysImagesAsBackgrounds() {
		return $this->_images_as_backgrounds;
	}
    
    /**
	* Set the object specifying the facebook setup for the gallery
	*
	* @param	rpsslideshow\display\social\facebook\Facebook	$facebook	the object specifying the facebook setup for the gallery
	*/
	function setFacebook($facebook) {
		$this->_facebook = $facebook;
	}
    /**
	* Get the object specifying the facebook setup for the gallery
	*
	* @return	rpsslideshow\display\social\facebook\Facebook		the object specifying the facebook setup for the gallery
	*/
	function getFacebook() {
		return $this->_facebook;
	}
    
    /**
	* Set the object specifying the pinterest setup for the gallery
	*
	* @param	rpsslideshow\display\social\pinterest\Pinterest	$pinterest	the object specifying the pinterest setup for the gallery
	*/
	function setPinterest($pinterest) {
		$this->_pinterest = $pinterest;
	}
    /**
	* Get the object specifying the pinterest setup for the gallery
	*
	* @return	rpsslideshow\display\social\pinterest\Pinterest		the object specifying the pinterest setup for the gallery
	*/
	function getPinterest() {
		return $this->_pinterest;
	}
    
    /**
	* Set the containing tag surrounding the gallery
	*
	* @param	ContainerTag	$container	the containing tag surrounding the gallery
	*/
	function setContainer($container) {
		$this->_container = $container;
	}
    /**
	* Get the containing tag surrounding the gallery
	*
	* @return	ContainerTag		the containing tag surrounding the gallery
	*/
	function getContainer() {
		return $this->_container;
	}
    
    /**
	* Set the boolean value specifying if the images display a heading
	*
	* @param	boolean	$show_heading	the boolean value specifying if the images display a heading
	*/
	function setShowHeading($show_heading) {
		$this->_show_heading = $show_heading;
	}
    /**
	* Get the boolean value specifying if the images display a heading
	*
	* @return	boolean		the boolean value specifying if the images display a heading
	*/
	function showsHeading() {
		return $this->_show_heading;
	}
    
    /**
	* Set the string specifying the containing tag for the image headings
	*
	* @param	HeadingContainerTag	$heading_container	the string specifying the containing tag for the image headings
	*/
	function setHeadingContainer($heading_container) {
		$this->_heading_container = $heading_container;
	}
    /**
	* Get the string specifying the containing tag for the image headings
	*
	* @return	HeadingContainerTag		the string specifying the containing tag for the image headings
	*/
	function getHeadingContainer() {
		return $this->_heading_container;
	}
    
    /**
	* Set the alignment of the heading of the images in the gallery
	*
	* @param	rpsslideshow\Alignment	$heading_alignment	the alignment of the heading of the images in the gallery
	*/
	function setHeadingAlignment($heading_alignment) {
		$this->_heading_alignment = $heading_alignment;
	}
    /**
	* Get the alignment of the heading of the images in the gallery
	*
	* @return	rpsslideshow\Alignment		the alignment of the heading of the images in the gallery
	*/
	function getHeadingAlignment() {
		return $this->_heading_alignment;
	}
    
    /**
	* Set the boolean value specifying if the images display a caption
	*
	* @param	boolean	$show_caption	the boolean value specifying if the images display a caption
	*/
	function setShowCaption($show_caption) {
		$this->_show_caption = $show_caption;
	}
    /**
	* Get the boolean value specifying if the images display a caption
	*
	* @return	boolean		the boolean value specifying if the images display a caption
	*/
	function showsCaption() {
		return $this->_show_caption;
	}
    
    /**
	* Set the alignment of the caption of the images in the gallery
	*
	* @param	rpsslideshow\Alignment	$caption_alignment	the alignment of the caption of the images in the gallery
	*/
	function setCaptionAlignment($caption_alignment) {
		$this->_caption_alignment = $caption_alignment;
	}
    /**
	* Get the alignment of the caption of the images in the gallery
	*
	* @return	rpsslideshow\Alignment		the alignment of the caption of the images in the gallery
	*/
	function getCaptionAlignment() {
		return $this->_caption_alignment;
	}
    
    /**
	* Set the number of images per page
	*
	* @param	int	$page_size	the number of images per page
	*/
	function setPageSize($page_size) {
		$this->_page_size = $page_size;
	}
    /**
	* Get the number of images per page
	*
	* @return	int		the number of images per page
	*/
	function getPageSize() {
		return $this->_page_size;
	}
	
    /**
	* Set the boolean value specifying if the builtin pagination style should be used
	*
	* @param	boolean	$show_heading	the boolean value specifying if the builtin pagination style should be used
	*/
	function setBuiltinPaginationStyle($builtin_pagination_style) {
		$this->_builtin_pagination_style = $builtin_pagination_style;
	}
    /**
	* Get the boolean value specifying if the images display a heading
	*
	* @return	boolean		the boolean value specifying if the images display a heading
	*/
	function useBuiltinPaginationStyle() {
		return $this->_builtin_pagination_style;
	}
    
 /**
    * Display contents to screen
    */
    function display() {
	    $output = '';
	    $page_size = $this->getPageSize();
	    $responsive_columns_class = ( $this->getGallery()->getColumnCountLock() ) ? ' rps-image-gallery-columns-no-responsive' : ' rps-image-gallery-columns-responsive';
	    $rps_image_gallery_class = ( $this->getTheme() === 'none' ) ? '' : ' rps-image-gallery';
	    $shows_heading_class = ( ! $this->showsHeading() ) ? ' rps-image-gallery-no-heading' : ' rps-image-gallery-heading';
	    $shows_caption_class = ( ! $this->showsCaption() ) ? ' rps-image-gallery-no-caption' : ' rps-image-gallery-caption';
	    
    	$style = ( $this->getTheme() !== 'none' ) ? ' style="text-align:' . $this->getGallery()->getImageAlignment() . '"' : '';
	    
	    $use_default_gallery_style_class = ( apply_filters( 'use_default_gallery_style', ( $this->getFormat() === 'legacy' ) ? true : false ) ) ? ' rps-image-gallery-default-gallery-style' : '';
	    
		$output .= '<' . $this->getContainer() . ' class="gallery' . ' gallery-columns-' . $this->getGallery()->getColumnCount() . ' gallery-size-' . $this->getGallery()->getImageSize() . ' rps-image-gallery-format-' . sanitize_html_class( $this->getFormat() ) . ' rps-image-gallery-theme-' . sanitize_html_class( $this->getTheme() ) . $responsive_columns_class . $rps_image_gallery_class . $shows_heading_class . $shows_caption_class . $use_default_gallery_style_class . '"' . $style . ' pageSize="' . $page_size . '" currentPage="0" >';
		
		$images_output = '';
		$gallery_images = $this->getGallery()->getImages();
		foreach ( $gallery_images as $image_index => $image ) {
			
			$images_output .= $this->generate_gallery_item( $image, $image_index );
			
			if ( 
				$this->getFormat() === 'legacy' and 
				$this->getGallery()->getColumnCount() > 0 and 
				( $image_index + 1 ) % $this->getGallery()->getColumnCount() === 0 
			) {
				$images_output .= '<br style="clear:both;">';
			}
		
		}
			
		if ( $this->getFormat() === HTMLFormat::DefaultFormat ) {	
			$classes_attribute = '';
			
			if ( $this->displaysImagesAsBackgrounds() ) {
				$classes_attribute = ' class="background-thumbnails"';
			}
					
			$output .= '<ul' . $classes_attribute . '>' . $images_output . '</ul>';			
		}
		elseif ( $this->getFormat() === HTMLFormat::HTML5 ) {			
			$output .= '<div>' . $images_output . '</div>';
		}
		elseif ( $this->getFormat() === HTMLFormat::Legacy ) {
			$output .= $images_output;
		}
		
		if ( $page_size > 0 ) {
			
			$builtin_class = ( boolval( $this->useBuiltinPaginationStyle() ) ) ? ' builtin' : '';
			
			$output .= '<nav class="navigation pagination rps-image-gallery' . $builtin_class . '">';
			$output .= '<h2 class="screen-reader-text">' . __( 'Gallery navigation', 'rps-image-gallery' ) . '</h2>';
			$output .= '<div class="nav-links">';
			$output .= '<a class="prev page-numbers">' . __( 'Prev', 'rps-image-gallery' ) .'</a>';
			$output .= '<span class="meta-nav screen-reader-text">' . __( 'Page', 'rps-image-gallery' ) . '</span>';
			
			$page_count = ceil( count( $gallery_images ) / $page_size );
			
			for ( $i = 0; $i < $page_count; $i++ ) {
				$extra_class = '';
				
				if ( $i == 0 ) {
					$extra_class = ' current';
				}
				
				$output .= '<a class="page-numbers jump-to-page page-' . ( $i + 1 ) . '">' . ( $i + 1 ) . '</a>';
			}
			
			$output .= '<a class="next page-numbers">' . __( 'Next', 'rps-image-gallery' ) .'</a>';
			$output .= '</div>';
			$output .= '</nav>';
		}
		
		$output .= '</' . $this->getContainer() . '>';
		
		return $output;
    }
    		
	/**
	 * Generate the gallery item.
	 *
	 * @param	Image	$image			the image to be displayed
	 * @param	int		$image_index	the index of the image to be displayed in the gallery
	 *
	 * @return 	string 					The gallery item HTML.
	 */
	private function generate_gallery_item( $image, $image_index ) {
		$output = '';
		
		if ( $this->getFormat() === HTMLFormat::DefaultFormat ) {

			$output .= '<li class="gallery-item ' . self::generate_row_class( $image_index ) . '">';
			$output .= '<div class="gallery-icon ' . $image->getOrientation() . '">';
			$output .= $this->generate_hyperlink_html( $image, $image_index );
			$output .= $this->generate_social_media_buttons( $image );
			$output .= '</div>';
			$output .= ( $this->showsHeading() ) ? $this->generate_heading_html( $image ) : '';
			$output .= ( $this->showsCaption() ) ? $this->generate_caption_html( $image ) : '';
			$output .= $image->getExif();
			$output .= '</li>';
			
		} elseif ( $this->getFormat() === HTMLFormat::Legacy ) {

			$output .= '<dl class="gallery-item ' . self::generate_row_class( $image_index ) . '">';
			$output .= '<dt class="gallery-icon ' . $image->getOrientation() . '">';
			$output .= $this->generate_hyperlink_html( $image, $image_index );
			$output .= $this->generate_social_media_buttons( $image );
			$output .= '</dt>';
			$output .= '<dd class="wp-caption-text gallery-caption">';
			$output .= ( $this->showsHeading() ) ? $this->generate_heading_html( $image ) : '';
			$output .= ( $this->showsCaption() ) ? $this->generate_caption_html( $image ) : '';
			$output .= $image->getExif();
			$output .= '</dd>';
			$output .= '</dl>';
			
		} elseif ( $this->getFormat() === HTMLFormat::HTML5 ) {
			
			$figcaption_value = '';
			$figcaption_value .= ( $this->showsHeading() ) ? $this->generate_heading_html( $image ) : '';
			$figcaption_value .= ( $this->showsCaption() ) ? $this->generate_caption_html( $image ) : '';
			$figcaption_value .= $image->getExif();
			
			//@todo setup method to detect whether gallery-icon class should be landscape or portrait
			$output .= '<figure class="gallery-item ' . self::generate_row_class( $image_index ) . '">';
			$output .= '<div class="gallery-icon ' . $image->getOrientation() . '">';
			$output .= $this->generate_hyperlink_html( $image, $image_index );
			$output .= $this->generate_social_media_buttons( $image );
			$output .= '</div>';
			$output .= ( ! empty( $figcaption_value ) ) ? '<figcaption>' . $figcaption_value . '</figcaption>' : '';
			$output .= '</figure>';
			
		}
		
		return $output;
	}
	
	
	/**
	* Generate the HTML needed for the social media buttons
	*
	* @param	Image	$image	the image being shared on social media
	*/
	private function generate_social_media_buttons( $image ) {
		$sharing_buttons = array();
		$sharing_buttons_html = '';
				
		if ( $this->getFacebook() !== null ) {
			$sharing_buttons['facebook'] = $this->getFacebook()->display( $image->getSource() );
		}

		if ( $this->getPinterest() ) {
			$sharing_buttons['pinterest'] = $this->getPinterest()->display( $image->getSource(), $image->getLargeUrl(), $image->getCaption() );
		}
		
		if ( ! empty( $sharing_buttons ) ) {
			$sharing_buttons_html .= '<nav class="gallery-item-sharing-buttons">';
			$sharing_buttons_html .= '<ul>';
			$sharing_buttons_html .= '<h1 class="screen-reader-text">' . __( 'Share with a social media network.', 'rps-image-gallery' ) . '</h1>';

			foreach ( $sharing_buttons as $service => $button ) {
				$sharing_buttons_html .= '<li class="' . $service . '">' . $button . '</li>';
			}
			
			$sharing_buttons_html .= '</ul>';
			$sharing_buttons_html .= '</nav>';
		}
		
		return $sharing_buttons_html;
	}
		
	/**
	 * Generate the image tag.
	 * @since 1.2.30
	 *
	 * @param	Image	$image			the image to be displayed
	 * @param	int		$image_index	the index of the image to be displayed in the gallery
	 *
	 * @return 	string 					Image tag or block element string.
	 */
	private function generate_image_html( $image, $image_index ) {
	
	// $attachment, $small_image_src, $title, $background, $key, $quantity, $html_format ) {		
		$class = ( $image_index == ( count( $this->getGallery()->getImages() ) - 1 ) ) ? ' class="attachment-thumbnail last"' : ' class="attachment-thumbnail"';
		
		$alternative_text = $image->getAlternativeText();
		
		if ( empty( $alternative_text ) ) {
			$alternative_text = $image->getTitle();
		}
		
		$alternative_text = trim( strip_tags( htmlspecialchars_decode( $alternative_text ) ) );
		
		if ( ( $this->getFormat() == HTMLFormat::DefaultFormat ) && $this->displaysImagesAsBackgrounds() ) {
			$image_html = '<div><div style="background-image:url(' . $image->getSmallUrl() . ');"><img' . $class . ' alt="' . $alternative_text . '" src="' . $image->getSmallUrl() . '" title="' . $alternative_text . '" style="visibility:hidden;" /></div></div>';
		} else {
			$image_html = '<img' . $class . ' alt="' . $alternative_text . '" src="' . $image->getSmallUrl() . '" title="' . $alternative_text . '" />';
		}
		
		return $image_html;
	}
		
	/**
	 * Generate hyperlink HTML.
	 * @since 1.2.30
	 *
	 * @param	Image	$image			the image to be displayed
	 * @param	int		$image_index	the index of the image to be displayed in the gallery
	 *
	 * @return string hyperlink HTML.
	 */
	private function generate_hyperlink_html( $image, $image_index ) {
		$image_html = $this->generate_image_html( $image, $image_index );

		if ( ( $this->getGallery()->getSlideshow() == null ) && !$image->getSource() ) {
			$output = $image_html;
		} else {			
			$target = $image->getTarget();
			$target_attribute = '';
			if ( ( $target !== '_self' ) && ( $target !== '' ) ) {
				$target_attribute = ' target="' . $target . '"';
			}			
			
			$rel_attribute = ( $image->getSource() && ( $this->getGallery()->getSlideshow() != null ) && !$image->hasExternalLink() ) ? ' rel="' . $this->getGallery()->getSlideshow()->getId() . '"' : '';
			$output = '<a' . $rel_attribute . ' href="' . $image->getSource() . '" title="' . htmlspecialchars( $image->getTitle() ) . '"' . $target_attribute . '>' . $image_html . '</a>';
		}
		
		return $output;
	}
			
	/**
	 * Generate the gallery-item class value.
	 * @since 1.2.30
	 *
	 * @param	int		$image_index	the index of the image to be displayed in the gallery
	 *
	 * @return string Class to designate beginning or ending of row.
	 */
	private function generate_row_class( $image_index, $prefix = 'gallery-item' ) {
		$class = '';
		$columns = $this->getGallery()->getColumnCount();
		$image_index = $image_index + 1;
		
		if ( $columns > 1 ) {
			if ( $image_index % $columns === 0 ) {
				$class = $prefix . '-end-row';
			} else if ( $image_index % $columns === 1 ) {
				$class = $prefix . '-begin-row';
			}
		}
		
		return $class;
	}
	
	
	/**
	 * Generate heading HTML.
	 * @since 1.2.30
	 *
	 * @param	Image	$image			the image to be displayed
	 *
	 * @return string Heading HTML.
	 */
	private function generate_heading_html( $image ) {
		$output = '';
		$heading = $image->getHeading();
		$style = ( $this->getTheme() !== 'none' ) ? ' style="text-align:' . $this->getHeadingAlignment() . '"' : '';
		
		if ( ! empty( $heading ) ) {

			if ( $this->getFormat() === HTMLFormat::Legacy ) {
				
			$output = '<' . $this->getHeadingContainer() . $style . '>' . $image->getHeading() . '</' . $this->getHeadingContainer() . '>';
				
			}
			else {
				
			$output = '<' . $this->getHeadingContainer() . ' class="wp-heading-text gallery-heading"' . $style . '>' . $image->getHeading() . '</' . $this->getHeadingContainer() . '>';
				
			}

		}
		
		return $output;
	}
	
	/**
	 * Generate caption HTML.
	 * @since 1.2.30
	 *
	 * @param	Image	$image			the image to be displayed
	 *
	 * @return string Heading HTML.
	 */
	private function generate_caption_html( $image ) {
		$output = '';
		$caption = $image->getCaption();
		$style = ( $this->getTheme() !== 'none' ) ? ' style="text-align:' . $this->getCaptionAlignment() . '"' : '';
		
		if ( ! empty( $caption ) ) {
		
			if ( $this->getFormat() === HTMLFormat::Legacy ) {
				
				$output = '<div'. $style . '>' . $caption . '</div>';
				
			}
			else {
				
				$output = '<div class="wp-caption-text gallery-caption"' . $style . '>' . $caption . '</div>';
				
			}
		
		}
		
		return $output;
	}
}

?>