$(document).ready(function () {

	$('a[href="#"]').on('click', function (e) {
		e.preventDefault();

		console.log('Click on a[href=#]');
	});

	$('[data-box-nav]').on('click', function (e) {
		e.preventDefault();

		var box = $('[data-box=' + $(this).attr('data-box-nav') + ']');

		$('html, body').stop().animate({
			scrollTop: box.offset().top - 18
		}, 500);
	});

	$(window).on('load resize scroll', function () {
		var st = $(window).scrollTop();
		var lastActive = 0;

		$('[data-box]').each(function () {
			if ($(this).offset().top <= st + 200)
				lastActive = $(this).attr('data-box');
		});

		$('[data-box-nav]').parent().removeClass('is-active');
		$('[data-box-nav=' + lastActive + ']').parent().addClass('is-active');
	});

	$('.table').each(function () {
		var prev = $(this).find('.table--arrow.is-prev');
		var next = $(this).find('.table--arrow.is-next');

		var pages = $(this).find('.table--page');

		prev.on('click', function (e) {
			e.preventDefault();

			var curPage = pages.filter('.is-shown');
			var prevPage = curPage.prev();

			next.removeClass('is-disabled');

			if (prevPage.length > 0) {
				curPage.removeClass('is-shown');
				prevPage.addClass('is-shown');

				if (prevPage.index() == 0)
					prev.addClass('is-disabled');
			}
		});

		next.on('click', function (e) {
			e.preventDefault();

			var curPage = pages.filter('.is-shown');
			var nextPage = curPage.next();

			prev.removeClass('is-disabled');

			if (nextPage.length > 0) {
				curPage.removeClass('is-shown');
				nextPage.addClass('is-shown');

				if (nextPage.index() == pages.length - 1)
					next.addClass('is-disabled');
			}
		});
	});

});