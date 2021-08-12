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
	// team2 part

	$('.team2-slider-text').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.team2-slider-img',
	});
	$('.team2-slider-img').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.team2-slider-text',
		dots: false,
		centerMode: true,
		focusOnSelect: true,
	});
});
