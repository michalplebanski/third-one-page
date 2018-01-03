$(function(){

	$('body').fadeIn('slow');
	
	var btn = $('.myBtn'),
		modal = $('.modal'),
		close = $('.close'),
		twitterRedirect = $('.fa-twitter'),
		linkedinRedirect = $('.fa-linkedin'),
		fbRedirect = $('.fa-facebook');

	btn.click(function() {
		modal.css('display', 'block');
	});

	close.click(function() {
		modal.css('display', 'none');
	});

	twitterRedirect.click(function() {
		window.location = 'https://twitter.com/';
	});

	linkedinRedirect.click(function() {
		window.location = 'https://www.linkedin.com/';
	});

	fbRedirect.click(function() {
		window.location = 'https://www.facebook.com/';
	});


	$('.navbar a[href^="#"]').on('click', function(event) {
		var target = $( $(this).attr('href') );
		if( target.length ) {
			event.preventDefault();
			$('html, body').animate({
				scrollTop: target.offset().top
			}, 1000);
		}
	});
});




