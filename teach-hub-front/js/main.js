// == Vanilla JS Conversion (كامل ومظبوط) ==

// Initialize AOS
AOS.init({
	duration: 800,
	easing: 'slide'
  });
  
  // Helpers
  const select = (el) => document.querySelector(el);
  const selectAll = (el) => document.querySelectorAll(el);
  
  // Set full height
  function setFullHeight() {
	selectAll('.js-fullheight').forEach(el => el.style.height = `${window.innerHeight}px`);
  }
  window.addEventListener('resize', setFullHeight);
  setFullHeight();
  
  // Loader hide
  window.addEventListener('load', () => {
	const loader = select('#ftco-loader');
	if (loader) loader.classList.remove('show');
  });
  
  // Parallax simulation
  window.addEventListener('scroll', () => {
	selectAll('[data-stellar-background-ratio]').forEach(el => {
	  const ratio = parseFloat(el.dataset.stellarBackgroundRatio || 0);
	  el.style.backgroundPosition = `center ${-window.scrollY * ratio}px`;
	});
  });
  
  // Navbar dropdown hover
  selectAll('nav .dropdown').forEach(dropdown => {
	dropdown.addEventListener('mouseenter', () => {
	  dropdown.classList.add('show');
	  dropdown.querySelector('> a').setAttribute('aria-expanded', 'true');
	  dropdown.querySelector('.dropdown-menu').classList.add('show');
	});
	dropdown.addEventListener('mouseleave', () => {
	  dropdown.classList.remove('show');
	  dropdown.querySelector('> a').setAttribute('aria-expanded', 'false');
	  dropdown.querySelector('.dropdown-menu').classList.remove('show');
	});
  });
  
  // Navbar scroll effect
  window.addEventListener('scroll', () => {
	const navbar = select('.ftco_navbar');
	const sd = select('.js-scroll-wrap');
	const st = window.scrollY;
  
	if (st > 150) navbar?.classList.add('scrolled');
	else navbar?.classList.remove('scrolled', 'sleep');
  
	if (st > 350) {
	  navbar?.classList.add('awake');
	  sd?.classList.add('sleep');
	} else {
	  navbar?.classList.remove('awake');
	  navbar?.classList.add('sleep');
	  sd?.classList.remove('sleep');
	}
  });
  
  // Simple counter
  function animateCounter(el, number, duration = 7000) {
	let start = 0;
	const startTime = performance.now();
  
	function update(currentTime) {
	  const elapsed = (currentTime - startTime) / duration;
	  const progress = Math.min(elapsed, 1);
	  el.innerText = Math.floor(progress * number).toLocaleString();
	  if (progress < 1) requestAnimationFrame(update);
	}
	requestAnimationFrame(update);
  }
  
  if (select('#section-counter')) {
	const observer = new IntersectionObserver(entries => {
	  entries.forEach(entry => {
		if (entry.isIntersecting) {
		  selectAll('.number').forEach(el => {
			animateCounter(el, parseInt(el.dataset.number));
		  });
		  observer.disconnect();
		}
	  });
	}, { threshold: 0.5 });
  
	observer.observe(select('#section-counter'));
  }
  
  // Content WayPoint animation
  const contentObserver = new IntersectionObserver(entries => {
	entries.forEach(entry => {
	  if (entry.isIntersecting) {
		const el = entry.target;
		const effect = el.dataset.animateEffect || 'fadeInUp';
		el.classList.add(effect, 'ftco-animated');
		contentObserver.unobserve(el);
	  }
	});
  }, { threshold: 0.5 });
  
  selectAll('.ftco-animate').forEach(el => {
	contentObserver.observe(el);
  });
  
  // Image Popup (Simple Version)
  selectAll('.image-popup').forEach(link => {
	link.addEventListener('click', e => {
	  e.preventDefault();
	  const popup = document.createElement('div');
	  popup.style.cssText = `position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.8);display:flex;align-items:center;justify-content:center;z-index:10000;`;
	  popup.innerHTML = `<img src='${link.href}' style='max-width:90%;max-height:90%'>`;
	  popup.addEventListener('click', () => popup.remove());
	  document.body.appendChild(popup);
	});
  });
  
  // Video Popup Simulation (Basic)
  selectAll('.popup-youtube, .popup-vimeo, .popup-gmaps').forEach(link => {
	link.addEventListener('click', e => {
	  e.preventDefault();
	  const iframe = `<iframe src='${link.href}' style='width:80%;height:80%;border:none;' allowfullscreen></iframe>`;
	  const popup = document.createElement('div');
	  popup.style.cssText = `position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.8);display:flex;align-items:center;justify-content:center;z-index:10000;`;
	  popup.innerHTML = iframe;
	  popup.addEventListener('click', () => popup.remove());
	  document.body.appendChild(popup);
	});
  });
  
  // Simple Slider (Home and Testimony)
  function simpleSlider(selector, interval = 4000) {
	const container = select(selector);
	if (!container) return;
  
	const slides = container.children;
	let current = 0;
  
	function showSlide(index) {
	  for (let i = 0; i < slides.length; i++) {
		slides[i].style.display = 'none';
	  }
	  slides[index].style.display = 'block';
	}
  
	showSlide(current);
	setInterval(() => {
	  current = (current + 1) % slides.length;
	  showSlide(current);
	}, interval);
  }
  simpleSlider('.home-slider', 5000);
  simpleSlider('.carousel-testimony', 5000);
  
  // Date and Time Picker Simulation
  selectAll('.appointment_date').forEach(input => input.type = 'date');
  selectAll('.appointment_time').forEach(input => input.type = 'time');
  
















// AOS.init({
// 	duration: 800,
// 	easing: 'slide'
// });

// (function($) {

//    "use strict";

//    $(window).stellar({
//    responsive: true,
//    parallaxBackgrounds: true,
//    parallaxElements: true,
//    horizontalScrolling: false,
//    hideDistantElements: false,
//    scrollProperty: 'scroll'
//  });


//    var fullHeight = function() {

// 	   $('.js-fullheight').css('height', $(window).height());
// 	   $(window).resize(function(){
// 		   $('.js-fullheight').css('height', $(window).height());
// 	   });

//    };
//    fullHeight();

//    // loader
//    var loader = function() {
// 	   setTimeout(function() { 
// 		   if($('#ftco-loader').length > 0) {
// 			   $('#ftco-loader').removeClass('show');
// 		   }
// 	   }, 1);
//    };
//    loader();

//    // Scrollax
//   $.Scrollax();

//    var carousel = function() {
// 	   $('.home-slider').owlCarousel({
// 	   loop:true,
// 	   autoplay: true,
// 	   margin:0,
// 	   animateOut: 'fadeOut',
// 	   animateIn: 'fadeIn',
// 	   nav:false,
// 	   autoplayHoverPause: false,
// 	   items: 1,
// 	   navText : ["<span class='ion-md-arrow-back'></span>","<span class='ion-chevron-right'></span>"],
// 	   responsive:{
// 		 0:{
// 		   items:1
// 		 },
// 		 600:{
// 		   items:1
// 		 },
// 		 1000:{
// 		   items:1
// 		 }
// 	   }
// 	   });
// 	   $('.carousel-testimony').owlCarousel({
// 		   autoplay: true,
// 		   center: true,
// 		   loop: true,
// 		   items:1,
// 		   margin: 30,
// 		   stagePadding: 0,
// 		   nav: false,
// 		   navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
// 		   responsive:{
// 			   0:{
// 				   items: 1
// 			   },
// 			   600:{
// 				   items: 1
// 			   },
// 			   1000:{
// 				   items: 2
// 			   }
// 		   }
// 	   });

//    };
//    carousel();

//    $('nav .dropdown').hover(function(){
// 	   var $this = $(this);
// 	   // 	 timer;
// 	   // clearTimeout(timer);
// 	   $this.addClass('show');
// 	   $this.find('> a').attr('aria-expanded', true);
// 	   // $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
// 	   $this.find('.dropdown-menu').addClass('show');
//    }, function(){
// 	   var $this = $(this);
// 		   // timer;
// 	   // timer = setTimeout(function(){
// 		   $this.removeClass('show');
// 		   $this.find('> a').attr('aria-expanded', false);
// 		   // $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
// 		   $this.find('.dropdown-menu').removeClass('show');
// 	   // }, 100);
//    });


//    $('#dropdown04').on('show.bs.dropdown', function () {
// 	 console.log('show');
//    });

//    // scroll
//    var scrollWindow = function() {
// 	   $(window).scroll(function(){
// 		   var $w = $(this),
// 				   st = $w.scrollTop(),
// 				   navbar = $('.ftco_navbar'),
// 				   sd = $('.js-scroll-wrap');

// 		   if (st > 150) {
// 			   if ( !navbar.hasClass('scrolled') ) {
// 				   navbar.addClass('scrolled');	
// 			   }
// 		   } 
// 		   if (st < 150) {
// 			   if ( navbar.hasClass('scrolled') ) {
// 				   navbar.removeClass('scrolled sleep');
// 			   }
// 		   } 
// 		   if ( st > 350 ) {
// 			   if ( !navbar.hasClass('awake') ) {
// 				   navbar.addClass('awake');	
// 			   }
			   
// 			   if(sd.length > 0) {
// 				   sd.addClass('sleep');
// 			   }
// 		   }
// 		   if ( st < 350 ) {
// 			   if ( navbar.hasClass('awake') ) {
// 				   navbar.removeClass('awake');
// 				   navbar.addClass('sleep');
// 			   }
// 			   if(sd.length > 0) {
// 				   sd.removeClass('sleep');
// 			   }
// 		   }
// 	   });
//    };
//    scrollWindow();

   
//    var counter = function() {
	   
// 	   $('#section-counter').waypoint( function( direction ) {

// 		   if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

// 			   var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
// 			   $('.number').each(function(){
// 				   var $this = $(this),
// 					   num = $this.data('number');
// 					   console.log(num);
// 				   $this.animateNumber(
// 					 {
// 					   number: num,
// 					   numberStep: comma_separator_number_step
// 					 }, 7000
// 				   );
// 			   });
			   
// 		   }

// 	   } , { offset: '95%' } );

//    }
//    counter();

//    var contentWayPoint = function() {
// 	   var i = 0;
// 	   $('.ftco-animate').waypoint( function( direction ) {

// 		   if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
			   
// 			   i++;

// 			   $(this.element).addClass('item-animate');
// 			   setTimeout(function(){

// 				   $('body .ftco-animate.item-animate').each(function(k){
// 					   var el = $(this);
// 					   setTimeout( function () {
// 						   var effect = el.data('animate-effect');
// 						   if ( effect === 'fadeIn') {
// 							   el.addClass('fadeIn ftco-animated');
// 						   } else if ( effect === 'fadeInLeft') {
// 							   el.addClass('fadeInLeft ftco-animated');
// 						   } else if ( effect === 'fadeInRight') {
// 							   el.addClass('fadeInRight ftco-animated');
// 						   } else {
// 							   el.addClass('fadeInUp ftco-animated');
// 						   }
// 						   el.removeClass('item-animate');
// 					   },  k * 50, 'easeInOutExpo' );
// 				   });
				   
// 			   }, 100);
			   
// 		   }

// 	   } , { offset: '95%' } );
//    };
//    contentWayPoint();


//    // magnific popup
//    $('.image-popup').magnificPopup({
//    type: 'image',
//    closeOnContentClick: true,
//    closeBtnInside: false,
//    fixedContentPos: true,
//    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
// 	gallery: {
// 	 enabled: true,
// 	 navigateByImgClick: true,
// 	 preload: [0,1] // Will preload 0 - before current, and 1 after the current image
//    },
//    image: {
// 	 verticalFit: true
//    },
//    zoom: {
// 	 enabled: true,
// 	 duration: 300 // don't foget to change the duration also in CSS
//    }
//  });

//  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
//    disableOn: 700,
//    type: 'iframe',
//    mainClass: 'mfp-fade',
//    removalDelay: 160,
//    preloader: false,

//    fixedContentPos: false
//  });


//  $('.appointment_date').datepicker({
// 	 'format': 'm/d/yyyy',
// 	 'autoclose': true
//    });

//    $('.appointment_time').timepicker();




// })(jQuery);


