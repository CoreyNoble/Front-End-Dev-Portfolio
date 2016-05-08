<?php
/**
 * Plugin Name: Hot Gallery
 * Plugin URI: http://hot-themes.com/wordpress/plugins/gallery/
 * Description:  Hot Gallery by HotThemes is a fully configurable, simple gallery widget, based on jQuery.
 * Version: 2.2
 * Author: HotThemes
 * Author URI: http://hot-themes.com/
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 */

/**
 * Add function to widgets_init that'll load our widget.
 * @since 0.1
 */
add_action( 'widgets_init', 'hot_gallery_load_widgets' );
add_action('admin_init', 'hot_gallery_textdomain');
/**
 * Register our widget.
 * 'HotGallery' is the widget class used below.
 *
 * @since 0.1
 */
function hot_gallery_load_widgets() {
	register_widget( 'HotGallery' );
}

function hot_gallery_textdomain() {
	load_plugin_textdomain('hot_gallery', false, dirname(plugin_basename(__FILE__) ) . '/languages');
}
	
/**
 * HotGallery Widget class.
 * This class handles everything that needs to be handled with the widget:
 * the settings, form, display, and update.  Nice!
 *
 * @since 0.1
 */


 
class HotGallery extends WP_Widget {
     
	/**
	 * Widget setup.
	 */
	 
	function HotGallery() {
		/* Widget settings. */
		$widget_ops = array( 'classname' => 'Hot_gallery', 'description' => __('Hot Gallery', 'hot_gallery') );

		/* Widget control settings. */
		$control_ops = array(  'id_base' => 'hot-gallery' );

		/* Create the widget. */
		parent::__construct( 'hot-gallery', __('Hot Gallery', 'hot_gallery'), $widget_ops, $control_ops );
		
    	add_action('wp_print_styles', array( $this, 'HotGallery_styles'),12);
		add_action('wp_head', array( $this, 'HotGallery_inline_scripts_and_styles'),13);
	    add_action('admin_init', array( $this,'admin_utils'));
    }

	function admin_utils(){
			wp_enqueue_script( 'jquery-colorpicker', plugins_url('/js/jscolor.js', __FILE__),array('jquery'),'1.0.0');
	        wp_enqueue_script( 'jquery-hotutil', plugins_url('/js/hotutil.js', __FILE__),array('jquery'),'1.0.0');
	}
	
	function HotGallery_styles(){
	   wp_enqueue_style( 'hot-gallery-style', plugins_url('/style.css', __FILE__));
	   $all_options = parent::get_settings();
	   
	    foreach ($all_options as $key => $value){
			$options = $all_options[$key];
			wp_enqueue_script( 'jquery', plugins_url('/js/jquery.min.js', __FILE__),false,'1.5.2');
	    }
	   
	   wp_enqueue_script( 'jquery-timers', plugins_url('/js/jquery.timers-1.2.js', __FILE__),array('jquery'),'1.2');
	   wp_enqueue_script( 'jquery-slideviewerpro', plugins_url('/js/slideViewerPro.js', __FILE__),array('jquery','jquery-timers'),'1.0');
	   
	}
	
	function HotGallery_inline_scripts_and_styles(){
	   // MULTIPLE WIDGETS ON PAGE ARE SUPPORTED !!!
	   $all_options = parent::get_settings();
	   echo '<style type="text/css">';
	   foreach ($all_options as $key => $value){
	    $options = $all_options[$key];
		if(!$options['ImageFolder'])continue;
		echo '
                #hot-joomla-gallery-wrapper-'.$key.' .slideViewer span.typo { 
					background: '.(isset($options['DescTextBackground'])?$options['DescTextBackground']:'000000').';
					color: '.(isset($options['DescTextColor'])?$options['DescTextColor']:'ffffff').';
				}

				#hot-joomla-gallery-wrapper-'.$key.' { 
					background: '.(isset($options['GalleryBackground'])?$options['GalleryBackground']:'000000').';
					border: '.(isset($options['GalleryBorder'])?$options['GalleryBorder']:'6').'px solid '.(isset($options['GalleryBorderColor'])?$options['GalleryBorderColor']:'cccccc').';
				}
	   ';
	   }
	   
	   echo '</style>';
	}
	
	function GetDefaults()
	{
	  return array(   
		         'WidgetClassSuffix' => '' 
				,'ImageFolder' => plugins_url('/images/demo', __FILE__) 
				,'BigImageWidth' => '300' 
				,'BigImageHeight' => '200' 
				,'UserInput' => '' 
				,'ThumbsNumber' => 3 
				,'ThumbsSize' => 20
				,'ThumbsBorderWidth' => 3
				,'ThumbsTopMargin' => 3 
			    ,'ThumbsRightMargin' => 3
			    ,'ThumbsBorderOpacity' => 1.0
				,'TimerValue' => 3500 
				,'GalleryBackground' => '000000' 
				,'GalleryBorder' => 6 
				,'GalleryBorderColor' => 'cccccc'
				,'ThumbBorderColor' => 'cccccc' 
				,'ActiveThumbBorderColor' => 'ffffff'
				,'BigImageBorder' => 0 
				,'BigImageBorderColor' => 'cccccc' 
				,'DescTextBackground' => '000000' 
				,'DescTextColor' => 'ffffff' 
			 );
	}
	
	/**
	 * How to display the widget on the screen.
	 */
	function widget( $args, $instance ) {
	   extract( $args );
       echo $before_widget;
       //--------------------------------------------------------------------------------------------------------------------------------------------
	   //--------------------------------------------------------------------------------------------------------------------------------------------
	 
        $defaults = $this->GetDefaults();
					   

		$instance = wp_parse_args( (array) $instance, $defaults );  ?>
	   
	   <script type="text/javascript">
	    jQuery(function(){
          jQuery("div.svwp").prepend("<img src='<?php echo plugins_url('/images/svwloader.gif', __FILE__);?>' class='ldrgif' alt='loading...' />"); //change with YOUR loader image path   
        });
	   
	   
	    jQuery(window).bind("load", function() { 
		    jQuery("div#hot-joomla-gallery-<?php echo $this->number; ?>").slideViewerPro({ 
		        thumbs: <?php echo $instance['ThumbsNumber']; ?>,  
		        autoslide: true,  
		        asTimer: <?php echo $instance['TimerValue']; ?>,  
		        typo: <?php if ($instance['UserInput']) { echo "true"; }else{ echo "false"; } ?>, 
		        galBorderWidth: <?php echo $instance['BigImageBorder']; ?>, 
				galBorderColor: "<?php echo $instance['BigImageBorderColor']; ?>",
				thumbsBorderColor: "<?php echo $instance['ThumbBorderColor']; ?>",
		        thumbsActiveBorderColor: "<?php echo $instance['ActiveThumbBorderColor']; ?>",
				thumbsPercentReduction: <?php echo $instance['ThumbsSize']; ?>,
				thumbsTopMargin:<?php echo $instance['ThumbsTopMargin']; ?>,
			    thumbsRightMargin:<?php echo $instance['ThumbsRightMargin']; ?>,
			    thumbsBorderWidth:<?php echo $instance['ThumbsBorderWidth']; ?>,
				thumbsBorderOpacity:<?php echo $instance['ThumbsBorderOpacity']; ?>,
			    thumbsActiveBorderOpacity:<?php echo $instance['ThumbsBorderOpacity']; ?>,
				shuffle: false,
                leftButtonInner: "<img src='<?php echo plugins_url('/images/circleleft32.png', __FILE__);?>' width='32' height='32' alt='' />", 
			    rightButtonInner: "<img src='<?php echo plugins_url('/images/circleright32.png', __FILE__);?>' width='32' height='32' alt='' />"				
		    }); 
		}); 
		</script>
		
		<div id="hot-joomla-gallery-wrapper-<?php echo $this->number; ?>"> 
		<div id="hot-joomla-gallery-<?php echo $this->number; ?>" class="svwp svwp<?php echo $instance['WidgetClassSuffix'];?>"> 
		<ul>

		<?php
        
		$imageFolder = $instance['ImageFolder'].'/';
		$imageFolder = str_ireplace("\\", "/", $imageFolder);
		$imageFolder = str_ireplace("//", "/", $imageFolder);
		$imageFolder = str_ireplace("//", "/", $imageFolder);
		$imageFolder = str_ireplace("http:/", "http://", $imageFolder);
		$userInput = $instance['UserInput'];
		
		if ($userInput) {		// if user need photos with description text
        	

			$pics_with_descs = explode(";", $instance['UserInput']);// exploding of user's input into array of elements
			$pics_number = count($pics_with_descs) - 1;				// how many elements (pics+desc) we have (minus 1)
			
			for ($loop = 0; $loop <= $pics_number; $loop += 1) {	// loop where we explode each pic+desc into picture and desc 
			$pics[$loop] = explode("||", $pics_with_descs[$loop]);	// since we are exploding array elements, we have 2 dimensional array as result
			}
			
			for ($loop = 0; $loop <= $pics_number; $loop += 1) {
				echo '<li><img alt="'.$pics[$loop][1].'" src="'.$imageFolder.$pics[$loop][0].'" width="'.$instance['BigImageWidth'].'" height="'.$instance['BigImageHeight'].'" /></li>';
				echo "\n";	// 1st element of 2dim array is pic, 2nd element is desc
			}

		}else{
			
			$full = stristr($instance['ImageFolder'], 'http');
		    
			$path_r = $instance['ImageFolder'];
			if($full){
		      $path_r = str_ireplace(get_bloginfo('wpurl'),"",$path_r);
		    }
			
			$gallery_list = "";
			$site_abs = str_ireplace("index.php", "", $_SERVER["SCRIPT_FILENAME"]);;
			
			$image_abs = $site_abs.$path_r;
			$image_abs = str_ireplace('/',DIRECTORY_SEPARATOR,$image_abs);
			$image_abs = str_ireplace('\\',DIRECTORY_SEPARATOR,$image_abs);
			$image_abs = str_ireplace(DIRECTORY_SEPARATOR.DIRECTORY_SEPARATOR,DIRECTORY_SEPARATOR,$image_abs);
			$image_abs = str_ireplace(DIRECTORY_SEPARATOR.DIRECTORY_SEPARATOR,DIRECTORY_SEPARATOR,$image_abs);
			
			
			
			if ($handle = opendir($image_abs)) {
				while (false !== ($file = readdir($handle))) {
				    $file  = strtolower($file);
					if ($file != "." && $file != "..") {
						if (strpos($file, 'jpg') !== false || strpos($file, 'png') !== false || strpos($file, 'gif') !== false) {
							$gallery_list = $gallery_list."$file"."||";
						}
					}
				}
			    closedir($handle);
				$gallery_pic = explode("||", $gallery_list);
				$gallery_pics_number = count($gallery_pic) - 2;
				
				
				for ($loop = 0; $loop <= $gallery_pics_number; $loop += 1) {
					echo '<li><img src="'.$imageFolder.$gallery_pic[$loop].'" alt="" width="'.$instance['BigImageWidth'].'" height="'.$instance['BigImageHeight'].'" /></li>';
				}
			}
		}

		?>


		</ul>
		</div>
		</div>
	   
	   
	   
	   <?php
       //--------------------------------------------------------------------------------------------------------------------------------------------
	   //--------------------------------------------------------------------------------------------------------------------------------------------
	   echo $after_widget;
	}

	/**
	 * Update the widget settings.
	 */
	function update( $new_instance, $old_instance ) {
		$instance = $old_instance;
    	
		foreach($new_instance as $key => $option)
		{
		  $instance[$key]     = $new_instance[$key];
		} 
		
		return $instance;
	}

	/**
	 * Displays the widget settings controls on the widget panel.
	 * Make use of the get_field_id() and get_field_name() function
	 * when creating your form elements. This handles the confusing stuff.
	 */
	function form( $instance ) {

		/* Set up some default widget settings. */
	    $defaults = $this->GetDefaults();
		$instance = wp_parse_args( (array) $instance, $defaults );  ?>

		<!-- Hot WordPress Gallery Options -->
	

<p><?php _e('Widget Class Suffix','hot_gallery'); ?><br/>
<input type="text" name="<?php echo $this->get_field_name( 'WidgetClassSuffix' ); ?>" id="<?php echo $this->get_field_id( 'WidgetClassSuffix' ); ?>" value="<?php echo $instance['WidgetClassSuffix']; ?>" /></p>

<p><?php _e('Big Image Width','hot_gallery'); ?><br/>
<input type="text" name="<?php echo $this->get_field_name( 'BigImageWidth' ); ?>" id="<?php echo $this->get_field_id( 'BigImageWidth' ); ?>" value="<?php echo $instance['BigImageWidth']; ?>" class="numeric" /></p>

<p><?php _e('Big Image Height','hot_gallery'); ?><br/>
<input type="text" name="<?php echo $this->get_field_name( 'BigImageHeight' ); ?>" id="<?php echo $this->get_field_id( 'BigImageHeight' ); ?>" value="<?php echo $instance['BigImageHeight']; ?>" class="numeric" /></p>

<p><?php _e('Thumbs Number','hot_gallery'); ?><br/>
<input type="text" name="<?php echo $this->get_field_name( 'ThumbsNumber' ); ?>" id="<?php echo $this->get_field_id( 'ThumbsNumber' ); ?>" value="<?php echo $instance['ThumbsNumber']; ?>" class="numeric" /></p>

<p><?php _e('Thumbs Size [% of original]','hot_gallery'); ?><br/>
<input type="text" name="<?php echo $this->get_field_name( 'ThumbsSize' ); ?>" id="<?php echo $this->get_field_id( 'ThumbsSize' ); ?>" value="<?php echo $instance['ThumbsSize']; ?>" class="numeric" /></p>

<p><?php _e('Thumbs Border Width','hot_gallery'); ?><br/>
<input type="text" name="<?php echo $this->get_field_name( 'ThumbsBorderWidth' ); ?>" id="<?php echo $this->get_field_id( 'ThumbsBorderWidth' ); ?>" value="<?php echo $instance['ThumbsBorderWidth']; ?>" class="numeric" /></p>

<p><?php _e('Thumbs Top Margin','hot_gallery'); ?><br/>
<input type="text" name="<?php echo $this->get_field_name( 'ThumbsTopMargin' ); ?>" id="<?php echo $this->get_field_id( 'ThumbsTopMargin' ); ?>" value="<?php echo $instance['ThumbsTopMargin']; ?>" class="numeric" /></p>

<p><?php _e('Thumbs Right Margin','hot_gallery'); ?><br/>
<input type="text" name="<?php echo $this->get_field_name( 'ThumbsRightMargin' ); ?>" id="<?php echo $this->get_field_id( 'ThumbsRightMargin' ); ?>" value="<?php echo $instance['ThumbsRightMargin']; ?>" class="numeric" /></p>

<p><?php _e('Thumbs Border Opacity','hot_gallery'); ?><br/>
<input type="text" name="<?php echo $this->get_field_name( 'ThumbsBorderOpacity' ); ?>" id="<?php echo $this->get_field_id( 'ThumbsBorderOpacity' ); ?>" value="<?php echo $instance['ThumbsBorderOpacity']; ?>" class="decimal" /></p>

<p><?php _e('Thumb Border Color','hot_gallery'); ?><br/>
<input type="text" name="<?php echo $this->get_field_name( 'ThumbBorderColor' ); ?>" id="<?php echo $this->get_field_id( 'ThumbBorderColor' ); ?>" value="<?php echo $instance['ThumbBorderColor']; ?>" class="color" /></p>

<p><?php _e('Timer Value','hot_gallery'); ?><br/>
<input type="text" name="<?php echo $this->get_field_name( 'TimerValue' ); ?>" id="<?php echo $this->get_field_id( 'TimerValue' ); ?>" value="<?php echo $instance['TimerValue']; ?>" class="numeric" /></p>

<p><?php _e('Gallery Border','hot_gallery'); ?><br/>
<input type="text" name="<?php echo $this->get_field_name( 'GalleryBorder' ); ?>" id="<?php echo $this->get_field_id( 'GalleryBorder' ); ?>" value="<?php echo $instance['GalleryBorder']; ?>" class="numeric" /></p>

<p><?php _e('Gallery Border Color','hot_gallery'); ?><br/>
<input type="text" name="<?php echo $this->get_field_name( 'GalleryBorderColor' ); ?>" id="<?php echo $this->get_field_id( 'GalleryBorderColor' ); ?>" value="<?php echo $instance['GalleryBorderColor']; ?>" class="color" /></p>

<p><?php _e('Gallery Background','hot_gallery'); ?><br/>
<input type="text" name="<?php echo $this->get_field_name( 'GalleryBackground' ); ?>" id="<?php echo $this->get_field_id( 'GalleryBackground' ); ?>" value="<?php echo $instance['GalleryBackground']; ?>" class="color" /></p>

<p><?php _e('Active Thumb Border Color','hot_gallery'); ?><br/>
<input type="text" name="<?php echo $this->get_field_name( 'ActiveThumbBorderColor' ); ?>" id="<?php echo $this->get_field_id( 'ActiveThumbBorderColor' ); ?>" value="<?php echo $instance['ActiveThumbBorderColor']; ?>" class="color" /></p>

<p><?php _e('Big Image Border','hot_gallery'); ?><br/>
<input type="text" name="<?php echo $this->get_field_name( 'BigImageBorder' ); ?>" id="<?php echo $this->get_field_id( 'BigImageBorder' ); ?>" value="<?php echo $instance['BigImageBorder']; ?>" class="numeric" /></p>

<p><?php _e('Big Image Border Color','hot_gallery'); ?><br/>
<input type="text" name="<?php echo $this->get_field_name( 'BigImageBorderColor' ); ?>" id="<?php echo $this->get_field_id( 'BigImageBorderColor' ); ?>" value="<?php echo $instance['BigImageBorderColor']; ?>" class="color" /></p>

<p><?php _e('Desc Text Background','hot_gallery'); ?><br/>
<input type="text" name="<?php echo $this->get_field_name( 'DescTextBackground' ); ?>" id="<?php echo $this->get_field_id( 'DescTextBackground' ); ?>" value="<?php echo $instance['DescTextBackground']; ?>"class="color" /></p>

<p><?php _e('Desc Text Color','hot_gallery'); ?><br/>
<input type="text" name="<?php echo $this->get_field_name( 'DescTextColor' ); ?>" id="<?php echo $this->get_field_id( 'DescTextColor' ); ?>" value="<?php echo $instance['DescTextColor']; ?>" class="color" /></p>

<p><?php _e('Folder where your images are stored','hot_gallery'); ?><br/>
<input type="text" name="<?php echo $this->get_field_name( 'ImageFolder' ); ?>" id="<?php echo $this->get_field_id( 'ImageFolder' ); ?>" value="<?php echo $instance['ImageFolder']; ?>" /></p>

<p><?php _e('Enter data for the Gallery.(Leave empty if you don\'t need description text over images)<br/>image1.jpg||Description1;<br/>image2.jpg||Description2;<br/>...','hot_gallery'); ?><br/>
<textarea style="width:230px;height:200px;" name="<?php echo $this->get_field_name( 'UserInput' ); ?>" id="<?php echo $this->get_field_id( 'UserInput' ); ?>"><?php echo $instance['UserInput']; ?></textarea></p>

<script type="text/javascript" >
   try{ 
    jQuery('.widgets-holder-wrap .widget').css({
		'overflow':'visible'
    });
   }catch(exc){}
</script>

<script type="text/javascript" >
   try{ 
    jscolor.init();
   }catch(exc){}
   
   try{ 
    HWT_Utilise('.hot_gallery_property_table_<?php echo $this->number ;?>');
   }catch(exc){}
</script>

	<?php  
	}
}

?>