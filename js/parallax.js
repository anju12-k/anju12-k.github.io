$(function () {
	$('.about-container ').on('inview', function (event, isInView) {
		if (isInView) {
			//表示領域に入ったとき
			$(this).addClass('animate__fadeInRight');
		}

		else {
			//表示領域から出たとき
			$(this).removeClass('animate__fadeIInRight');
			$(this).css('opacity', 0); //非表示にしておく
		}
	});

	$('.skill-container ').on('inview', function (event, isInView) {
		if (isInView) {
			//表示領域に入ったとき
			$(this).addClass('animate__fadeInLeft');
		}

		else {
			//表示領域から出たとき
			$(this).removeClass('animate__fadeIInLeft');
			$(this).css('opacity', 0); //非表示にしておく
		}
	});

	$('.works-container ').on('inview', function (event, isInView) {
		if (isInView) {
			//表示領域に入ったとき
			$(this).addClass('animate__fadeInRight');
		}

		else {
			//表示領域から出たとき
			$(this).removeClass('animate__fadeInRight');
			$(this).css('opacity', 0); //非表示にしておく
		}
	});

	$('.logo-container ').on('inview', function (event, isInView) {
		if (isInView) {
			//表示領域に入ったとき
			$(this).addClass('animate__fadeInUp');
		}

		else {
			//表示領域から出たとき
			$(this).removeClass('animate__fadeInUp');
			$(this).css('opacity', 0); //非表示にしておく
		}
	});
});

