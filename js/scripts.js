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

	$('body').on('mousemove', function (e) {
		parallax (e, $('.intro--image.is-buildings')[0], 1);
		parallax (e, $('.intro--image.is-clouds')[0], 2);
	});

	function parallax (e, target, layer) {
		var layer_coeff = 75 / layer;
		var x = -1 * ((e.pageX - ($(window).width() / 2)) / layer_coeff);
		var y = -1 * ((e.pageY - ($(window).height() / 2)) / layer_coeff);

		$(target).css('transform', 'translate(' + x + 'px, ' + y + 'px)');
	};

});