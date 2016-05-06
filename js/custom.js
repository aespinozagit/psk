jQuery(function ($) { "use strict";
	
	/* ========================================================================= */
	/*	Page Preloader
	/* ========================================================================= */
	
	$(document).ready(function() {
	
	setTimeout(function(){
		$('body').addClass('loaded');
		$('h1').css('color','#222222');
	}, 100);
	
	});
	/* ========================================================================= */
	/*	logo
	/* ========================================================================= */
	var width = $(window).width();{

   	if (width <= 769) {
   	$('<img src="img/cover.jpg" id="mobile-cover">').appendTo('.background-wrap');  	      
   	} else {
    $('<video src="videos/video.mp4" id="video-bg-elem" autoplay loop muted></video>').appendTo('.background-wrap');    
	}
	}

	/* ---------------------------------------------- /*
	 * Landing Page
	/* ---------------------------------------------- */

	$(".screen-height").height($(window).height());

	$(window).resize(function(){
		$(".screen-height").height($(window).height());
	});

	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
		$('#home').css({'background-attachment': 'scroll'});
	} else {
		$('#home').parallax('50%', 0.1);
	}

	/* =========================================================================== */
	/*	FitVids js
	/* =========================================================================== */
	
	$(".media-wrapper").fitVids();

	
	/* ========================================================================= */
	/*	Nice Scroll - Custom Scrollbar
	/* ========================================================================= */

	var nice = $("html").niceScroll({
		cursorborderradius: 0,
		cursorwidth: "8px",
		cursorfixedheight: 150,
		cursorcolor: "#CC6633",
		zindex: 9999,
		cursorborder: 0,
	});


	/* ========================================================================= */
	/*	Scroll Up / Back to top
	/* ========================================================================= */
	
	$(window).scroll(function() {
		if ($(window).scrollTop() > 400) {
			$("#scrollUp").fadeIn(200);
		} else {
			$("#scrollUp").fadeOut(200);
		}
	});
	
	$('#scrollUp').click(function() {
		$('html, body').stop().animate({
			scrollTop : 0
		}, 1500, 'easeInOutExpo');
	});
    
    /* ---------------------------------------------- /*
	 * Smooth scroll links
	/* ---------------------------------------------- */
	$(function() {

	$('a[href*="#"]:not([href="#"])').click(function() {

	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	    
	    var target = $(this.hash);
	    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	    
	    if (target.length) {
	    $('html, body').animate({
	    scrollTop: target.offset().top
	    }, 1000);

	    return false;
	    }
	    }
	  	});
	});

	/* ========================================================================= */
	/*	Post image slider
	/* ========================================================================= */
	
	$("#post-thumb, #gallery-post").owlCarousel({

		navigation : true,
		pagination : false,
		slideSpeed : 800,
		autoHeight : true,
		paginationSpeed : 800,
		singleItem:true,
		navigationText : ["<i class='fa fa-angle-left fa-2x'></i>","<i class='fa fa-angle-right fa-2x'></i>"]

	});
	
	$("#features").owlCarousel({
		navigation : false,
		pagination : true,
		slideSpeed : 800,
		singleItem : true,
		transitionStyle : "fadeUp",
		paginationSpeed : 800,
	});


	/* ========================================================================= */
	/*	Menu item highlighting
	/* ========================================================================= */


	$("#navigation").sticky({
		topSpacing : 0
	});
	
	$('#nav').onePageNav({
		currentClass: 'current',
		changeHash: false,
		scrollSpeed: 1500,
		scrollThreshold: 0.5,
		filter: '',
		easing: 'easeInOutExpo'
	});

	$(window).on('scroll', function() {

			var h = $('nav').height();
			var y = $(window).scrollTop();
	      	var nav = $('#navigation');

		   if ((y > h + 30 ) && ($(window).outerWidth() > 768 ) ) {
		      nav.addClass('opaque');
		   }
	      else {
	         if (y < h + 30) {
	            nav.removeClass('opaque');
	         }
	         else {
	            nav.addClass('opaque');
	         }
	      }

		});

		// Closes the Responsive Menu on Menu Item Click
		$('.navbar-collapse ul li a').click(function() {
		    $('.navbar-toggle:visible').click();
		});

	/* ========================================================================= */
	/*	Fix Slider Height
	/* ========================================================================= */	

	var slideHeight = $(window).height();
	
	$('#slitSlider, .sl-slider, .sl-content-wrapper').css('height',slideHeight);

	$(window).resize(function(){'use strict';
		$('#slitSlider, .sl-slider, .sl-content-wrapper').css('height',slideHeight);
	});
	
	

	/* ========================================================================= */
	/*	Timer count
	/* ========================================================================= */

	(function() {
		var count = {
		  initialized : false,
		  initialize : function() {
			if (this.initialized)
			  return;
			this.initialized = true;
			this.build();
		  },
		  build : function() {
			this.animations();
		  },
		  animations : function() {
			// Count To
			$(".counters-item [data-to]").each(function() {
			  var $this = $(this);
			  $this.appear(function() {
				$this.countTo({});
			  }, {
				accX : 0,
				accY : -150
			  });
			});
		  },
		};
		count.initialize();
	})();


	/* ========================================================================= */
	/*	Skills Chart
	/* ========================================================================= */

	$(".chart").appear(function () {
		$(".chart").easyPieChart({
			easing: "easeOutBounce",
			barColor: "#CC6633",
			size: "150",
			lineWidth: 15,
			animate: 2e3,
			onStep: function (e, t, n) {
				$(this.el).find(".percent").text(Math.round(n));
			}
		});
	});
	
	
	/* ========================================================================= */
	/*	Twitter Feed
	/* ========================================================================= */
	
	$(".tweet").twittie({
        dateFormat: "%b. %d, %Y",
        template: "{{tweet}}",
        count: 1
    });


	/* ========================================================================= */
	/*	Portfolio Filtering Hook
	/* =========================================================================  */

	$('#og-grid').mixItUp(); // Portfolio filter

	Grid.init(); //Portfolio Grid Expand
	
	
	/* ========================================================================= */
	/*	Testimonial Carousel
	/* =========================================================================  */
 
	//Init the carousel
	$("#testimonials").owlCarousel({
		slideSpeed: 500,
		paginationSpeed: 500,
		singleItem: true,
		pagination : true,
		transitionStyle : "backSlide"
	});


	/* ========================================================================= */
	/*   Contact Form Validating
	/* ========================================================================= */


	$('#contact-submit').click(function (e) {

		//stop the form from being submitted
		e.preventDefault();

		/* declare the variables, var error is the variable that we use on the end
		to determine if there was an error or not */
		var error = false;
		var name = $('#name').val();
		var email = $('#email').val();
		var subject = $('#subject').val();
		var message = $('#message').val();

		/* in the next section we do the checking by using VARIABLE.length
		where VARIABLE is the variable we are checking (like name, email),
		length is a JavaScript function to get the number of characters.
		And as you can see if the num of characters is 0 we set the error
		variable to true and show the name_error div with the fadeIn effect. 
		if it's not 0 then we fadeOut the div( that's if the div is shown and
		the error is fixed it fadesOut. 
		
		The only difference from these checks is the email checking, we have
		email.indexOf('@') which checks if there is @ in the email input field.
		This JavaScript function will return -1 if no occurrence have been found.*/
		if (name.length == 0) {
			var error = true;
			$('#name').css("border-color", "#3BF1FF");
			$('#no-input').html('<p>* No input detected.</p>');
		} else {
			$('#name').css("border-color", "#666");
		}
		if (email.length == 0 || email.indexOf('@') == '-1') {
			var error = true;
			$('#email').css("border-color", "#3BF1FF");
			$('#no-input').html('<p>* No input detected.</p>');
		} else {
			$('#email').css("border-color", "#666");
		}
		if (subject.length == 0) {
			var error = true;
			$('#subject').css("border-color", "#3BF1FF");
			$('#no-input').html('<p>* No input detected.</p>');
		} else {
			$('#subject').css("border-color", "#666");
		}
		if (message.length == 0) {
			var error = true;
			$('#message').css("border-color", "#3BF1FF");
			$('#no-input').html('<p>* No input detected.</p>');
		} else {
			$('#message').css("border-color", "#666");
		}

		//now when the validation is done we check if the error variable is false (no errors)
		if (error == false) {
			//disable the submit button to avoid spamming
			//and change the button text to Sending...
			$('#contact-submit').attr({
				'disabled': 'false',
				'value': 'Sending...'
			});

			/* using the jquery's post(ajax) function and a lifesaver
			function serialize() which gets all the data from the form
			we submit it to send_email.php */
			$.post("sendmail.php", $("#contact-form").serialize(), function (result) {
				//and after the ajax request ends we check the text returned
				if (result == 'sent') {
					//if the mail is sent remove the submit paragraph
					$('#cf-submit').remove();
					//and show the mail success div with fadeIn
					$('#mail-success').fadeIn(500);
				} else {
					//show the mail failed div
					$('#mail-fail').fadeIn(500);
					//re enable the submit button by removing attribute disabled and change the text back to Send The Message
					$('#contact-submit').removeAttr('disabled').attr('value', 'Send The Message');
				}
			});
		}
	});



	/* ========================================================================= */
	/*	Google Map Customization
	/* =========================================================================  */

	function initialize() {

		var myLatLng = new google.maps.LatLng(32.759689, -97.377126);

		var roadAtlasStyles = [{
			"featureType": "administrative",
			"elementType": "labels.text.fill",
			"stylers": [
			{
				"color": "#444444"
			}]
			},
			{
			"featureType": "administrative.land_parcel",
			"elementType": "geometry",
			"stylers": [
			{
				"lightness": "84"
			}]
			},
			{
			"featureType": "landscape",
			"elementType": "all",
			"stylers": [
			{
				"color": "#f2f2f2"
			}]
			},
			{
			"featureType": "poi",
			"elementType": "all",
			"stylers": [
			{
				"visibility": "off"
			}]
			},
			{
			"featureType": "road",
			"elementType": "all",
			"stylers": [
			{
				"saturation": -100
			},
			{
				"lightness": 45
			}]
			},
			{
			"featureType": "road.highway",
			"elementType": "all",
			"stylers": [
			{
				"visibility": "simplified"
			}]
			},
			{
			"featureType": "road.arterial",
			"elementType": "labels.icon",
			"stylers": [
			{
				"visibility": "off"
			}]
			},
			{
			"featureType": "transit",
			"elementType": "all",
			"stylers": [
			{
				"visibility": "off"
			}]
			},
			{
			"featureType": "water",
			"elementType": "all",
			"stylers": [
			{
				"color": "#676767"
			},
			{
				"visibility": "on"
			}]
		}];

		var mapOptions = {
			zoom: 13,
			center: myLatLng,
			disableDefaultUI: true,
			scrollwheel: true,
			navigationControl: false,
			mapTypeControl: false,
			scaleControl: false,
			draggable: true,
			mapTypeControlOptions: {
				mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'roadatlas']
			}
		};

		var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);


		var marker = new google.maps.Marker({
			position: myLatLng,
			map: map,
			icon: 'img/location-icon.png',
			title: '',
		});


		google.maps.event.addListener(marker, 'click', function () {
			infowindow.open(map, marker);
		});

		var styledMapOptions = {
			name: 'US Road Atlas'
		};

		var usRoadMapType = new google.maps.StyledMapType(
			roadAtlasStyles, styledMapOptions);

		map.mapTypes.set('roadatlas', usRoadMapType);
		map.setMapTypeId('roadatlas');
	}

	google.maps.event.addDomListener(window, "load", initialize);


});

/* ========================================================================= */
/*	On scroll fade/bounce fffect
/* ========================================================================= */

	wow = new WOW({
		animateClass: 'animated',
		offset: 120
	});
	wow.init();
	

/* ========================================================================= */
/*	Home page Slider
/* ========================================================================= */

$(function() {

	var Page = (function() {

		var $navArrows = $( '#nav-arrows' ),
			$nav = $( '#nav-dots > span' ),
			slitslider = $( '#slitSlider' ).slitslider( {
			
			    speed : 1600,
			
				onBeforeChange : function( slide, pos ) {

					$nav.removeClass( 'nav-dot-current' );
					$nav.eq( pos ).addClass( 'nav-dot-current' );

				}
			} ),

			init = function() {
				initEvents();				
			},
			initEvents = function() {
				// add navigation events
				$navArrows.children( ':last' ).on( 'click', function() {
					slitslider.next();
					return false;
				} );

				$navArrows.children( ':first' ).on( 'click', function() {					
					slitslider.previous();
					return false;
				});

				$nav.each( function( i ) {				
					$( this ).on( 'click', function( event ) {						
						var $dot = $( this );						
						if( !slitslider.isActive() ) {
							$nav.removeClass( 'nav-dot-current' );
							$dot.addClass( 'nav-dot-current' );						
						}
						
						slitslider.jump( i + 1 );
						return false;
					
					});					
				});
			};
			return { init : init };

	})();

	Page.init();

});


/* ========================================================================= */
/*	Parallax Sections
/* ========================================================================= */


"use strict";

function parallaxInit() {
	$('#counter').parallax("50%", 0.3);
	$('#team-skills').parallax("50%", 0.3);
	$('#twitter-feed').parallax("50%", 0.3);
	$('#testimonial').parallax("50%", 0.3);
}

$(window).bind("load", function () {
    parallaxInit();
});