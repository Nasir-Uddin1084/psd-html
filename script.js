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
	// video-part
	$('.venobox').venobox({
		framewidth: '400px',
		frameheight: '300px',
	}); 
});
