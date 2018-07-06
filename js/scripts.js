$(document).ready(function () {

	$('a[href="#"]').on('click', function (e) {
		e.preventDefault();

		console.log('Click on a[href=#]');
	});

	$(window).on('load', function () {
		var photo = Cookies.get('x-openland-user-photo');

		if (photo) {
			$('[data-app]').each(function () {
				var btn = $(this);
				var image = $('<img />');
				var label = $('<span />');

				image.attr('src', photo);
				label.html(btn.attr('data-app-label'));

				btn.attr('href', btn.attr('data-app-url'));
				btn.addClass('is-app');
				btn.html('');
				btn.append(image);
				btn.append(label);
			});
		}

		$('[data-animate="load"]').addClass('is-animated');
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

	$('[data-signup="box"]').each(function (e) {
		var box = $(this);
		var variants = box.find('.signup--variant');
		var togglers = box.find('[data-signup="toggle"]');

		togglers.on('click', function (e) {
			e.preventDefault();

			var selected = variants.filter('[data-signup=' + $(this).attr('data-variant') + ']')

			variants.removeClass('is-shown');
			selected.addClass('is-shown');
			selected.find('input[type="text"]').first().focus();
		});
	});

});