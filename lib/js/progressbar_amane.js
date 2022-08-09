$('.progressbar img').on('click', function (e) {
	let
		getIndex = $(this).index(),
		getCompleteIndex = $('.progressbar img').index();

	if (getIndex => getCompleteIndex) {
		$('.point--active').addClass('point--complete').removeClass('point--active').removeClass('icon_blink');
		$(this).addClass('point--active').removeClass('icon_blink').attr("src", "/img/icons/ComToggle_86.png");
		$(this).prevAll().addClass('point--complete').removeClass('icon_blink').attr("src", "/img/icons/ComToggle_86.png");
		$(this).nextAll().removeClass('point--complete').attr("src", "/img/icons/ComToggle_87.png");

	}
	if (getIndex == "0" || getIndex == "1") {
		document.getElementById("amane_traits_one").innerHTML = '<span class="tooltip sheen" data-tooltip="При нанесении урона атрибута Тьмы, снимается 1 стак Sheen с цели, увеличивая получаемый целью урон на 5%, складывается до 6 раз.">Sheen</span> случайному противнику в заднем ряду.';
		document.getElementById("amane_traits_two").innerHTML = "3";
	}
	else
		if (getIndex == "2" || getIndex == "3") {
			document.getElementById("amane_traits_one").innerHTML = '<span class="tooltip sheen" data-tooltip="При нанесении урона атрибута Тьмы, снимается 1 стак Sheen с цели, увеличивая получаемый целью урон на 8%, складывается до 6 раз.">Sheen</span> случайному противнику в заднем ряду. Увеличивает получаемый целью урон от Sheen до 8% за стак';
			document.getElementById("amane_traits_two").innerHTML = "4";
		}
		else
			if (getIndex == "4") {
				document.getElementById("amane_traits_one").innerHTML = '<span class="tooltip sheen" data-tooltip="При нанесении урона атрибута Тьмы, снимается 1 стак Sheen с цели, увеличивая получаемый целью урон на 10%, складывается до 6 раз.">Sheen</span> случайному противнику в заднем ряду. Увеличивает получаемый целью урон от Sheen до 10% за стак';
				document.getElementById("amane_traits_two").innerHTML = "5";

			}

});
