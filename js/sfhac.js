$(document).ready(function () {

	$('a[href="#"]').on('click', function (e) {
		e.preventDefault();

		console.log('Click on a[href=#]');
	});

	$('.js-sticky').each(function () {
		$(this).stick_in_parent({
			parent: $(this).closest('.js-sticky-p'),
			recalc_every: 10,
			offset_top: 24
		});
	});

});