$(document).ready(function(){

	AOS.init({
    once: true
  })

  var certAmount = $('.home-carousel .item').length;
  $('.home-carousel__nav-total').html(certAmount);

  // tooltip script
	$('.tooltipped').tooltip({delay: 0});

  var owlCert = $('.home-carousel .owl-carousel');
  owlCert.owlCarousel({
    loop:true,
    margin:0,
    autoplayTimeout:4500,
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive:{
      0:{
          items:1
      },
    }
	});

  var certId = $('.home-carousel .owl-item.active').find('.item').attr('data-id');
  $('.home-carousel__nav-current').html(+certId);
  owlCert.on('changed.owl.carousel', function(event) {
    var certId = $('.home-carousel .owl-item.active + .owl-item').find('.item').attr('data-id');
    $('.home-carousel__nav-current').html(certId);
  });

	$('.news-page__carousel .owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    navSpeed: 1000,
    loop: false,
    dots: false,
    autoplay: false,
    autoplaySpeed: 1500,
    nav: true,
    navText: ['<img src="assets/images/arrow.svg">', '<img src="assets/images/arrow.svg" style="transform: rotate(180deg)">'],
    responsive:{
      0:{
          items:1
      },
      480:{
          items:2
      },
      768:{
          items:3
      },
      1200:{
          items:4
      },
    }
	});

	$('.team__carousel .owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    navSpeed: 1000,
    loop: true,
    dots: false,
    autoplay: false,
    autoplaySpeed: 1500,
    center: true,
    nav: true,
    navText: ['<img src="assets/images/arrow2.svg">', '<img src="assets/images/arrow2.svg" style="transform: rotate(180deg)">'],
    responsive:{
      0:{
          items:1
      },
      480:{
          items:2
      },
      768:{
          items:3
      },
      1200:{
          items:4
      },
    }
	});

	var scrollDisable = false;
	$('.half-width-menu__bar, .half-width-menu__user').on('click', function(){
		$(".menu, .half-width-menu__bar").toggleClass('active');
		$('header').toggleClass('header-scroll-down');
		$('main, header, .scroll, footer, .partniors-section').toggleClass('blur');
		$('body').toggleClass('scroll-disable');
		if(scrollDisable == false) {
			$("body").css("overflow","hidden");
			scrollDisable = true;
		} else {
			$("body").css("overflow","auto");
			scrollDisable = false;
			$('.submenu, .menu__dropdown, menu__register, .menu__authorization, .menu__reset-password').removeClass('active');
			dataIdForMenu = null;
		}
	});

	var dataIdForMenu;

	$('.menu__dropdown').on('click', function(){
		let submenuList = $(this).find('.each-dropdown-list');
		$(".submenu-inside").html('');
		submenuList.clone().appendTo( ".submenu-inside" );
		setTimeout(function(){
			$(".submenu-inside .each-dropdown-list").addClass('active');
		},10)
		if(dataIdForMenu == $(this).attr('data-id')){
			$('.submenu').removeClass('active');
			$(this).removeClass('active');
			dataIdForMenu = null;
		} else {
			dataIdForMenu = $(this).attr('data-id');
			$('.submenu').addClass('active');
			$(this).addClass('active').siblings().removeClass('active');
		}
	});

  $('.close-submenu').on('click', function(){
      $('.submenu').removeClass('active');
      $(this).removeClass('active');
      dataIdForMenu = null;
  });

	$('.register-btn').on('click', function(){
		$('.menu__register').addClass('active');
	});

  $('.menu__register .back-to-auth').on('click', function(){
    $('.menu__register').removeClass('active');
  });

  $('.reset-password-btn').on('click', function(){
    $('.menu__reset-password').addClass('active');
  })

  $('.menu__reset-password .back-to-auth').on('click', function(){
    $('.menu__reset-password').removeClass('active');
  });

  $('.auth-resp-btn').on('click', function(){
    $('.menu__authorization').addClass('active');
  });

  $('.back-to-menu-btn').on('click', function(){
    $('.menu__authorization').removeClass('active');
  });

  $('.half-width-menu__search, .search-resp-btn').on('click', function(){
    $('.search-block').addClass('active');
  });

  $('.close-search').on('click', function(){
    $('.search-block').removeClass('active');
  });

  $('select').material_select();
  // $('select').prettyDropdown();

  let verticalBlocks = $('.each-vertical-block').length;

  $('.each-vertical-block .image').css('padding-top', '' + (100 / verticalBlocks) +'vh');
  $('.each-vertical-block .text-block').css('padding-top', '' + (100 / verticalBlocks) +'vh');

  if ( $('.blog-slider').length ) {
    var $slider = $('.blog-slider')
    .on('init', function(slick) {
      $('.blog-slider').fadeIn(1000);
    })
    .slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      autoplay: false,
      lazyLoad: 'ondemand',
      autoplaySpeed: 3000,
      centerMode: false,
      prevArrow: $('.blog-prev'),
      nextArrow: $('.blog-next'),
      asNavFor: '.blog-slider-thmb'
    });

    var $slider2 = $('.blog-slider-thmb')
    .on('init', function(slick) {
      $('.blog-slider-thmb').fadeIn(1000);
    })
    .slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      lazyLoad: 'ondemand',
      asNavFor: '.blog-slider',
      dots: false,
      centerMode: false,
      focusOnSelect: true
    });
  }

  $(function() {
    $('input[name="daterange"]').daterangepicker({
      opens: 'left',
      autoApply: true,
    }, function(start, end, label) {
      console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
    });
  });

  $('.switch-price button').on('click', function(){
    $(this).addClass('active').siblings().removeClass('active');
  });

  $(function() {
    $('input[name="birthday"]').daterangepicker({
      singleDatePicker: true,
      showDropdowns: true,
      minYear: 1901,
      maxYear: parseInt(moment().format('YYYY'),10)
    }, function(start, end, label) {
      // var years = moment().diff(start, 'years');
    });
  });

  $('input.date').daterangepicker({
    singleDatePicker: true,
    showDropdowns: true,
    minYear: 1901,
    maxYear: parseInt(moment().format('YYYY'),10)
  }, function(start, end, label) {
    // var years = moment().diff(start, 'years');
  });

  var driversId = 0, insuranceId = 0;

  $(document).on('click', '.add-driver', function(){
    $('.drivers-block').append(`
      <div class="row each-driver-block">
        <div class="col l6 m12 s12">
          <div class="input-field">
            <input id="privateNumber` + driversId + `" type="number" class="validate">
            <label for="privateNumber` + driversId + `" class="">პირადი ნომერი</label>
          </div>
        </div>
        <div class="col l6 m12 s12">
          <div class="input-field">
            <input id="birthDate` + driversId + `" type="text" class="validate date" name="date" >
            <label for="birthDate` + driversId + `" class="">დაბადების თარიღი</label>
          </div>
        </div>
        <button class="delete-driver-block" type="button"></button>
      </div>`
    );
    ++driversId;

    $('input.date').daterangepicker({
      singleDatePicker: true,
      showDropdowns: true,
      minYear: 1901,
      maxYear: parseInt(moment().format('YYYY'),10)
    }, function(start, end, label) {
      // var years = moment().diff(start, 'years');
    });
  });

  $(document).on('click', '.delete-driver-block', function(){
    $(this).parent('.each-driver-block').remove();
  });

  $(document).on('click', '.add-driver', function(){
    $('.drivers-block').append(`
      <div class="row each-driver-block">
        <div class="col l6 m12 s12">
          <div class="input-field">
            <input id="privateNumber` + driversId + `" type="number" class="validate">
            <label for="privateNumber` + driversId + `" class="">პირადი ნომერი</label>
          </div>
        </div>
        <div class="col l6 m12 s12">
          <div class="input-field">
            <input id="birthDate` + driversId + `" type="text" class="validate date" name="date" >
            <label for="birthDate` + driversId + `" class="">დაბადების თარიღი</label>
          </div>
        </div>
        <button class="delete-driver-block" type="button"></button>
      </div>`
    );
    ++driversId;

    $('input.date').daterangepicker({
      singleDatePicker: true,
      showDropdowns: true,
      minYear: 1901,
      maxYear: parseInt(moment().format('YYYY'),10)
    }, function(start, end, label) {
      // var years = moment().diff(start, 'years');
    });
  });

  $(document).on('click', '.add-insurance', function(){
    $('.insurance-block').append(`
      <div class="row each-insurance-block">
        <div class="col l6 m12 s12">
          <div class="input-field">
            <input id="nameField` + insuranceId + `" type="text" class="validate">
            <label for="nameField` + insuranceId + `" class="">სახელი</label>
          </div>
        </div>
        <div class="col l6 m12 s12">
          <div class="input-field">
            <input id="lastNameField` + insuranceId + `" type="text" class="validate" >
            <label for="lastNameField` + insuranceId + `" class="">გვარი</label>
          </div>
        </div>
        <button class="delete-insurance-block" type="button"></button>
      </div>`
    );
    ++insuranceId;
  });

  $(document).on('click', '.delete-insurance-block', function(){
    $(this).parent('.each-insurance-block').remove();
  });

  function readURL(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();            
      reader.onload = function (e) {
          $('#target').css('background-image', 'url(' + e.target.result + ')');
      }
      
      reader.readAsDataURL(input.files[0]);
    }
  }
  
  $("#imgInp").change(function(){
      readURL(this);
  });

  function writeURL(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();            
      reader.onload = function (e) {
        console.log(e);
      }
      
      reader.readAsDataURL(input.files[0]);
    }
  }
  
  $("#writeUrl").change(function(){
      writeURL(this);
  });


});
