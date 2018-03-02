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

	$('.feature--icon svg *').each(function () {
		anime({
			targets: $(this)[0],
			strokeDashoffset: [anime.setDashoffset, 0],
			easing: 'easeInOutSine',
			duration: 1500,
			delay: function (el, i) { return i * 250 },
			direction: 'alternate',
			loop: true
		});
	});

});