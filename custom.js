jQuery(function($) {
//Standard BX Slider
$(document).ready(function(){
	$('.bxslider').bxSlider({
	  controls: false,
      	  pager: true,
	  auto: true,
	  pause: 7000,
	  oneToOneTouch:true,
	  adaptiveHeight: false
  });
  

//Logo Slider used on CDL
  	$('.logoslider').bxSlider({
	  controls: false,
      	  pager: false,
          minSlides: 4,
  	  maxSlides: 4,
  	  slideWidth: 150,
  	  slideMargin: 0,
  	  moveSlides: 1,
	  auto: true,
	  pause: 1000,
	  oneToOneTouch:true,
	  adaptiveHeight: false
  });

//Add "null" options to GF dropdowns (from Swayd Epoxy). The values must be empty on these in order to work.
$('.ginput_container_select').find('option:not(.gf_placeholder)').each(function(){
        if($(this).val() == '') {
            var label = $(this).text();
            $(this).wrap('<optgroup class="blur" label="' + label + '"></optgroup>');
            $('optgroup.blur').html('');
        }
    });

//Slide Toggle function as used on services blocks on CDL Homepage
$( ".service-image-1" ).hover(function() {
  $( ".service-header-1 .hidden" ).slideToggle("slow");
});
$( ".service-image-2" ).hover(function() {
  $( ".service-header-2 .hidden" ).slideToggle("slow");
});
$( ".service-image-3" ).hover(function() {
  $( ".service-header-3 .hidden" ).slideToggle("slow");
});
$( ".service-image-4" ).hover(function() {
  $( ".service-header-4 .hidden" ).slideToggle("slow");
});
$( ".service-image-5" ).hover(function() {
  $( ".service-header-5 .hidden" ).slideToggle("slow");
});
$( ".service-image-6" ).hover(function() {
  $( ".service-header-6 .hidden" ).slideToggle("slow");
});  

//Form Button from Milanese
$( "#formbtn" ).click(function() {
  $( ".hidden" ).slideToggle("slow");
});

//Standard: add rel=0 to the end of all YouTube videos
    $('iframe[src*="youtube.com"]').each(function () {
        var sVideoURL = $(this).attr('src');
        if (sVideoURL.indexOf('rel=0') == -1) {
            $(this).attr('src', sVideoURL + '?rel=0');
        }
    });
    
// Standard: add class "pdf" to all href's to pdf files
    	$('a[href$=".pdf"]').each(function() {
        	$(this).prop('target', '_blank');
        	});
        $('.entry-content a[href$=".pdf"]').each(function() {
        $(this).addClass('pdf');
    });
    
//Slicknav   
	$('#menu-primary-menu').slicknav({
		label: 'MENU',
		duration: 300,
		allowParentLinks: true,
		closedSymbol: '&#43;',
            	openedSymbol: '&#8722;',
		prependTo:'#site-navigation'
	});

//Toggle title with hidden content *from FAQ page on Office Shredding
	$(".toggle_content").hide();
	$(".toggle_title").click(function()
		{$(this).toggleClass("toggle_active").next().slideToggle("fast");return false
	});	
	
//Animated search icon *from Strainsert
	$("#utility-icon").click(function(){
    	$("#search-form form").animate({'width': 'toggle'});
	});

//Play button *from Total Scope
$(".overlay").click(function() {
    var video = $("#video").get(0);

    if ( video.paused ) {
        video.play();
        $(".overlay").removeClass("moz-hide");
        $(".overlay").removeClass("show");
        $(".overlay").addClass("hidden");
        $(".play").hide();
        $(".pause").show();
    } else {
        video.pause();
        $(".overlay").removeClass("hidden");
        $(".overlay").addClass("show");
        $(".play").show();
        $(".pause").hide();
    }

    return false;
});
	
//for hiding and toggling portions of a table *from Total Scope
	var acc = document.getElementsByClassName("table-row");
	var i;

	for (i = 0; i < acc.length; i++) {
    		acc[i].onclick = function(){
        		/* Toggle between adding and removing the "active" class,
        		to highlight the button that controls the panel */
        	this.classList.toggle("hidden");
    }
}
    
    
    $('.table-row').each(function() {
		if($(this).height() > 155 ) {
		$(this).addClass('hidden');
		$(this).append( '<div class="overlay"><a class="read-more-table"></a></div>' );
		}
	});
	
//Back to top button *from Total Scope
	jQuery(window).scroll(function() {
	var offset = 550;
 	if (jQuery(this).scrollTop() > offset) {
 		jQuery('.back-to-top').fadeIn(300);
 	} else {
 		jQuery('.back-to-top').fadeOut(300);
	} 
});
 
 	jQuery('.back-to-top').click(function(event) {
 		event.preventDefault();
 	jQuery('html, body').animate({scrollTop: 0}, "slow");
 	return false; })	
});

//Change an image thumbnail to main image *from Wide Plank (no longer used)
$(document).ready(function(){
$( ".thumbnail-product" ).click(function() {
   $("#product-image").change(function(){
     $("img.attachment-product-thumb").attr("src",$(this).val());
     $("img.attachment-product-thumb").attr("srcset",$(this).val());
     $('.featured-caption').html($('option:selected').html().replace('text','replace'));
   });
   });
	
});

//Mega menu shading from Luongo and Ramsey's
$('#page').each(function() {
    $('.mega-menu-item-has-children').mouseenter(function() {
      $('#main').addClass('menu-background');
      });
    $('.mega-menu-item-has-children').mouseleave(function() {
        $('#main').removeClass('menu-background');
        });
    });
	
/* Ramsey's megamenu photo change :

functions.php code:
ADD IMAGE SIZE
if ( function_exists( 'add_image_size' ) ) {
	add_image_size( 'menu-image', 240, 180, true ); //(cropped)
}

PULL IN FEATURED IMAGES TO MENU ITEMS
add_filter('wp_nav_menu_objects', 'ad_filter_menu', 10, 2);

function ad_filter_menu($sorted_menu_objects, $args) {
    if ($args->theme_location != 'primary')
        return $sorted_menu_objects;

    // edit the menu objects
    foreach ($sorted_menu_objects as $menu_object) {
        // searching for menu items linking to posts or pages
        // can add as many post types to the array
        if ( in_array($menu_object->object, array('post', 'page', 'any_post_type')) ) {
            // set the title to the post_thumbnail if available
            // thumbnail size is the second parameter of get_the_post_thumbnail()
            $menu_object->xfn = has_post_thumbnail($menu_object->object_id) ? get_the_post_thumbnail_url($menu_object->object_id, 'menu-image') : $menu_object->xfn;
        }
    }

    return $sorted_menu_objects;
}

And js, where the image in the megamenu has the class "services-image"
*/
	
$( ".mega-sub-menu" ).each(function(){
    $("a.mega-menu-link").hover(function() {
        var title = $(this).attr("rel");
        $('.services-image').attr("src", title);
      });
   });

//Screen height function from piifs.com
if($('html').hasClass('webworkers')) {
    var vh = $(window).height();
    $('#maindiv').css('height',vh + 'px');
  }
  
function alturaMaxima() {
var altura = $(window).height();
$(" .back").css('min-height', altura);
$("body .homediv").css('height', altura);
$("body #maindiv").css('height', altura);
if (altura >= 768) {
        $("body #maindiv").css('height', altura-20 + 'px');
    }
$("body .block").css('height', altura-100 + 'px');
if (altura >= 768) {
        $("body .block").css('height', altura-200 + 'px');
    }
}
alturaMaxima();
// $(window).bind('resize', alturaMaxima);

$(window).on('load resize', function() {
if (Modernizr.mq('(min-width: 600px)')) {
$(window).bind('resize', alturaMaxima);
}
});

//video play functions
jQuery(function($) {
//jQuery video element
var video = $('#video1');
//DOM element for HTML5 media events
var videoDomObj = video.get(0);
//detect if firefox
var is_firefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

//only bind click event if not firefox to prevent broken controls - firefox pauses/plays videos on click by default anyway
if (!is_firefox){
    video.on('click', function(e){
        //when video is clicked it should be paused when playing and vise versa
        if (videoDomObj.paused){
            videoDomObj.play();
        } else{
            videoDomObj.pause();
        }
    });
}
});

//Scrollbutton feature
jQuery(function($) {
$('#scrollbutton').click(function(){
    $('html, body').animate({scrollTop:0}, 'slow');
});
});


$(function() {
    //caches a jQuery object containing the header element
    var header = $(".global");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 300) {
            header.removeClass('larger').addClass("smaller");
        } else {
            header.removeClass("smaller").addClass('larger');
        }
    });
});

});

jQuery(function($) {

$(function()
    {
            overlayOn = function()
            {
                $( '<div id="imagelightbox-overlay"></div>' ).appendTo( 'body' );
            },
            overlayOff = function()
            {
                $( '#imagelightbox-overlay' ).remove();
            },


            // ARROWS
            arrowsOn = function( instance, selector )
            {
            var $arrows = $( '<button type="button" class="imagelightbox-arrow imagelightbox-arrow-left"></button><button type="button" class="imagelightbox-arrow imagelightbox-arrow-right"></button>' );

                $arrows.appendTo( 'body' );

                $arrows.on( 'click touchend', function( e )
                {
                    e.preventDefault();

                    var $this   = $( this ),
                        $target = $( selector + '[href="' + $( '#imagelightbox' ).attr( 'src' ) + '"]' ),
                        index   = $target.index( selector );

                    if( $this.hasClass( 'imagelightbox-arrow-left' ) )
                    {
                        index = index - 1;
                        if( !$( selector ).eq( index ).length )
                            index = $( selector ).length;
                    }
                    else
                    {
                        index = index + 1;
                        if( !$( selector ).eq( index ).length )
                            index = 0;
                    }

                    instance.switchImageLightbox( index );
                    return false;
                });
            },
            arrowsOff = function()
            {
                $( '.imagelightbox-arrow' ).remove();
            },


// CAPTION

            captionOn = function()
            {
                var description = $( 'a[href="' + $( '#imagelightbox' ).attr( 'src' ) + '"] img' ).attr( 'alt' );
                if( description.length > 0 )
                    $( '<div id="imagelightbox-caption">' + description + '</div>' ).appendTo( 'body' );
            },
            captionOff = function()
            {
                $( '#imagelightbox-caption' ).remove();
            };



        });


var selector = 'a[data-imagelightbox="f"]';
var instance = $( selector ).imageLightbox(
{
    selector:       'id="imagelightbox"',   // string
    allowedTypes:   'png|jpg|jpeg|gif',     // string;
    animationSpeed: 250,                    // integer;
    preloadNext:    true,                   // bool;            silently preload the next image
    enableKeyboard: true,                   // bool;            enable keyboard shortcuts (arrows Left/Right and Esc)
    quitOnEnd:      false,                  // bool;            quit after viewing the last image
    quitOnImgClick: false,                  // bool;            quit when the viewed image is clicked
    quitOnDocClick: true,                   // bool;            quit when anything but the viewed image is clicked
    onStart:        function(){ arrowsOn( instance, selector ); overlayOn(); },
    onEnd:          function(){ arrowsOff(); overlayOff(); captionOff(); },
    onLoadStart:    function(){ captionOff();  },
    onLoadEnd:      function(){ captionOn();  $( '.imagelightbox-arrow' ).css( 'display', 'block' );  }

});


});

//Altura Maxima adapted for removing elements below 767px *From Office Shredding
jQuery(function($) {
function alturaMaxima() {
var altura = $(window).width();
if (altura <= 767) {
  $("span.collapse").html("");
  }
}
alturaMaxima();
});


