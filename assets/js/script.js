$(document).ready(function(){

	AOS.init();

    // tooltip script
	$('.tooltipped').tooltip({delay: 0});

	$('.each-review, .each-toggle').hover(function(){
		var thisSrc = $(this).attr('data-src');
		if($('.review-res').length >= 20) {
			$('.review-res:first-child').remove();
		}
		$('.review-results').append('<div class="review-res"><div class="left-res"><div class="image" style="background-image: url(' + thisSrc +')"></div></div><div class="right-res"><div class="image" style="background-image: url(' + thisSrc +')"></div></div><div class="clear"></div></div>');
		setTimeout(function(){
			$('.review-res:last-child .left-res').addClass('active');
			$('.review-res:last-child .right-res').addClass('active');
		},1);
	}, function(){

	});

	// header scrolling script
	

	$('.partniors-slider .owl-carousel').owlCarousel({
	    loop: false,
	    margin: 10,
	    nav: true,
	    navText: ['<img src="/assets/img/right-arrow.svg" style="transform: rotate(180deg)">','<img src="/assets/img/right-arrow.svg">'],
	    dots: false,
	    responsive:{
	        0:{
	            items:1.5
	        },
	        600:{
	            items:3
	        },
	        1000:{
	            items:5
	        },
	        1200:{
	            items:6
	        }
	    }
	});


	function loaderFunction(){
		var docHeight = $(document).height() - $(window).height();
		var scrollTop = $(document).scrollTop();
		var res = (scrollTop * 100) / docHeight;
		res = Math.floor(res);
		$('.scroll-percentage').html(res + '%');
	    $('.scroll-loader div').height(res);
	}

	loaderFunction();
  	var prevScrollpos = window.pageYOffset;
  	var currentScrollPos = window.pageYOffset;
  	if (prevScrollpos < currentScrollPos) {
    	$('header, .burger-menu').addClass('header-scroll-down');
  	} else {
    	$('header, .burger-menu').removeClass('header-scroll-down');
  	}
  	prevScrollpos = currentScrollPos;
  	if(window.pageYOffset > 100){
  		$('header, .burger-menu').addClass('header-down');
  	} else {
  		$('header, .burger-menu').removeClass('header-down');
  	}

  	if(window.pageYOffset > 100){
  		$('.footer-socials').addClass('active');
  	} else {
  		$('.footer-socials').removeClass('active');
  	}

  	if($(window).scrollTop() >= $(document).height() - $(window).height() - 100){
  		$('.footer-socials').addClass('footer');
  	} else {
  		$('.footer-socials').removeClass('footer');
  	}


	window.onscroll = function() {
		loaderFunction();
	  	var currentScrollPos = window.pageYOffset;
	  	if (prevScrollpos < currentScrollPos) {
	    	$('header, .burger-menu').addClass('header-scroll-down');
	  	} else {
	    	$('header, .burger-menu').removeClass('header-scroll-down');
	  	}
	  	prevScrollpos = currentScrollPos;
	  	if(window.pageYOffset > 50){
	  		$('header, .burger-menu').addClass('header-down');
	  	} else {
	  		$('header, .burger-menu').removeClass('header-down');
	  	}

	  	if(window.pageYOffset > 500){
	  		$('header').addClass('header-down-after');
	  	} else {
	  		$('header').removeClass('header-down-after');
	  	}

	  	if(window.pageYOffset > 100){
	  		$('.footer-socials').addClass('active');
	  	} else {
	  		$('.footer-socials').removeClass('active');
	  	}

	  	if($(window).scrollTop() >= $(document).height() - $(window).height() - 100){
	  		$('.footer-socials').addClass('footer');
	  	} else {
	  		$('.footer-socials').removeClass('footer');
	  	}
	};

  	$('.footer-search').on('click',function(){
  		$('.footer-search').toggleClass('active');
  		$('.footer-map').slideToggle('slow');
  	});


  	$('.scroll-top').on('click', function(){
  		$("html, body").animate({ scrollTop: 0 }, 1000);
  	});

  	$('select').material_select();

  	$('.search').on('click', function(){
  		$('.search-head-section, .search-close-btn').addClass('active');
  	});

  	$('.search-close-btn').on('click',function(){
  		$('.search-head-section, .search-close-btn').removeClass('active');
  	});

  	var scrollDisable = false;
  	$('.burger-menu').on('click', function(){
  		$(".burger-menu, .responsive-menu").toggleClass('active');
		$('header').toggleClass('header-scroll-down');
		$('main, header, .scroll, footer, .partniors-section').toggleClass('blur');
		$('body').toggleClass('scroll-disable');
		if(scrollDisable == false) {
			$("body").css("overflow","hidden");
			scrollDisable = true;
		} else {
			$("body").css("overflow","auto");
			scrollDisable = false;
		}
  	});

  	jQuery.each($('.langs a, .menu a'), function() {
  		var dataDelay = $(this).attr('data-delay');
	  	$(this).css('transition-delay',0.1 * dataDelay + 's');
	});

  	$('.company-burger').on('click', function(){
  		$('.company-burger').toggleClass('active');
  		$('.responsive-company-nav').slideToggle();
  	});

  	$('.project-slider .owl-carousel').owlCarousel({
	    loop:true,
	    margin:2,
	    nav:false,
	    // navText: [$('.project-arrows .next'),$('.project-arrows .prev')],
	    dots: false,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:2
	        }
	    }
	})
	var owlProj = $('.project-slider .owl-carousel');
	owlProj.owlCarousel();
	$('.project-arrows .prev').click(function() {
	    owlProj.trigger('prev.owl.carousel');
	})
	$('.project-arrows .next').click(function() {
	    owlProj.trigger('next.owl.carousel', [300]);
	});


	$('.each-number .number').countUp();

	$('.about-team-slider .owl-carousel').owlCarousel({
	    loop:false,
	    margin: 30,
	    nav:false,
	    dots: false,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:3
	        },
	        1000:{
	        	items: 4
	        }
	    }
	});
	var owl = $('.about-team-slider .owl-carousel');
	owl.owlCarousel();
	$('.about-team-arrows .prev').click(function() {
	    owl.trigger('prev.owl.carousel');
	})
	$('.about-team-arrows .next').click(function() {
	    owl.trigger('next.owl.carousel', [300]);
	});
	var certAmount = $('.certificates-block .item').length;
	$('.certificates-block .amount').html(certAmount);
	$('.certificates-block .owl-carousel').owlCarousel({
	    loop:true,
	    margin: 30,
	    nav:false,
	    dots: false,
	    items:1
	});

	var owlCert = $('.certificates-block .owl-carousel');
	owlCert.owlCarousel();
	$('.certificates-block .prev').click(function() {
	    owlCert.trigger('prev.owl.carousel', [1000]);
	})
	$('.certificates-block .next').click(function() {
	    owlCert.trigger('next.owl.carousel', [1000]);
	});
	var certId = $('.certificates-block .owl-item.active').find('.item').attr('data-id');
	$('.certificates-block .current').html(++certId);
	owlCert.on('changed.owl.carousel', function(event) {
		var certId = $('.certificates-block .owl-item.active + .owl-item').find('.item').attr('data-id');
		$('.certificates-block .current').html(++certId);
	});



	if ( $('.activity-slider-main').length ) {
        var $slider = $('.activity-slider-main')
            .on('init', function(slick) {
                $('.activity-slider-main').fadeIn(1000);
            })
            .slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                autoplay: false,
                lazyLoad: 'ondemand',
                autoplaySpeed: 3000,
                centerMode: false,
                asNavFor: '.activity-slider-thmb'
            });

	    var $slider2 = $('.activity-slider-thmb')
	        .on('init', function(slick) {
	            $('.activity-slider-thmb').fadeIn(1000);
	        })
	        .slick({
	            slidesToShow: 5,
	            slidesToScroll: 1,
	            lazyLoad: 'ondemand',
	            asNavFor: '.activity-slider-main',
	            dots: false,
	            centerMode: false,
	            focusOnSelect: true
	        });
	}

	$('.similar-activities .owl-carousel').owlCarousel({
	    loop:false,
	    margin:20,
	    nav:false,
	    dots: false,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1.6
	        },
	        992:{
	            items:3
	        }
	    }
	});

	var owlAct = $('.similar-activities .owl-carousel');
	owlAct.owlCarousel();
	$('.similar-activities .prev').click(function() {
	    owlAct.trigger('prev.owl.carousel');
	})
	$('.similar-activities .next').click(function() {
	    owlAct.trigger('next.owl.carousel', [300]);
	});

	var owlIndexReview = $('.index-review-resp .owl-carousel');
	owlIndexReview.owlCarousel({
	    loop:true,
	    margin:0,
	    nav:false,
	    autoplay: true,
	    dots: false,
	    items: 1
	})
	$('.index-slider-arrows .prev').click(function() {
	    owlIndexReview.trigger('prev.owl.carousel');
	})
	$('.index-slider-arrows .next').click(function() {
	    owlIndexReview.trigger('next.owl.carousel', [300]);
	});

});
