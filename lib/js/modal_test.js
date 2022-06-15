
$('.prority_verves_test').on('click', function () {
	id = $(this).attr('verveid')
	if (id == 'SSR_2') {
		$('.modal_test_wrap').load('verves.html #SSR_2');
		$('.wrapper').addClass('modal_open')
		$('.modal_test_wrap').addClass('modal_wrapper_open')

	}
})
$('.modal_test_wrap').on('click', function () {
	$('.wrapper').removeClass('modal_open')
	$('.modal_test_wrap').removeClass('modal_wrapper_open')
})
