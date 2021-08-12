$(document).ready(function () {
	// banner slide
	$('.banner-slide').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		autoplay: false,
	});
	// team-slide
	$('.team-slide').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		autoplay: true,
	});
	// video-part
	$('.venobox_video').venobox({
		framewidth: '400px',
		frameheight: '300px',
		spinner: 'wave',
	});
	// img-part
	$('.venobox').venobox({
		framewidth: '440px',
		frameheight: '460px',
		border: '5px',
		bgcolor: '#ffffff',
		titleattr: 'data-title',
		spinner: 'rotating - plane',
	});
	// venobox for team img
	$('.venobox').venobox({
		framewidth: '440px',
		frameheight: '460px',
		border: '5px',
		bgcolor: '#ffffff',
		titleattr: 'data-title',
	});
	//team-slider
	$('.team-slider').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 500,
		arrows: false,
	});
	// team2 part
	$('.slider-team2-text').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.slider-team2-img',
	});
	$('.slider-team2-img').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		asNavFor: '.slider-team2-text',
		prevArrow: '.arrow-left',
		nextArrow: '.arrow-right',
		dots: false,
		centerMode: true,
		centerPadding: '0px',
		focusOnSelect: true,
		autoplay: true,
		autoplaySpeed: 1500,
	});
});
