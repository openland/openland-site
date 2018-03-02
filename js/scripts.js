$(document).ready(function () {

	$('a[href="#"]').on('click', function (e) {
		e.preventDefault();

		console.log('Click on a[href=#]');
	});

	$('.map--tab').on('click', function (e) {
		e.preventDefault();

		$('.map--tab').not(this).removeClass('is-active');
		$(this).addClass('is-active');
	});

});