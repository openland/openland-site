$(document).ready(function () {

	$('a[href="#"]').on('click', function (e) {
		e.preventDefault();

		console.log('Click on a[href=#]');
	});

	$(window).on('load', function () {
		$('[data-animate="load"]').addClass('is-animated');
	});

	$('.map--tab').on('click', function (e) {
		e.preventDefault();

		var id = $(this).index();
		var box = $('.map--box:nth-child(' + id + ')');

		$('.map--tab').not(this).removeClass('is-active');
		$(this).addClass('is-active');

		$('.map--box').not(box).removeClass('is-shown');
		$(box).addClass('is-shown');
	});

	$('.header--open').on('click', function (e) {
		e.preventDefault();

		$('.menu').fadeIn(300);
		$('.menu--in').addClass('is-shown');
	});

	$('.menu--close').on('click', function (e) {
		e.preventDefault();

		$('.menu').fadeOut(300);
		$('.menu--in').removeClass('is-shown');
	});

	$('.js-modals-open').on('click', function (e) {
		e.preventDefault();

		var item = $('.modals--item' + $(this).attr('href'));

		$('.modals, .modals--item' + $(this).attr('href')).fadeIn(200, function () {
			$(this).find('input[type="text"]').first().focus();
		});
	});

	$('.js-modals-close').on('click', function (e) {
		e.preventDefault();

		$('.modals, .modals--item').fadeOut(200);
	});

	$('.header--item').on({
		mouseenter: function () {
				if ($(this).find('.header--sub').length > 0)
					$(this).find('.header--sub').stop().fadeIn(200);
			},

		mouseleave: function () {
				if ($(this).find('.header--sub').length > 0)
					$(this).find('.header--sub').stop().fadeOut(200);
			}
	});

});