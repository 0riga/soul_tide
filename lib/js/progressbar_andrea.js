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
		document.getElementById("andrea_traits_one").innerHTML = "1";
		document.getElementById("andrea_traits_two").innerHTML = "15";
	}
	else
		if (getIndex == "2" || getIndex == "3") {
			document.getElementById("andrea_traits_one").innerHTML = "2";
			document.getElementById("andrea_traits_two").innerHTML = "12";
		}
		else
			if (getIndex == "4") {
				document.getElementById("andrea_traits_one").innerHTML = "3";
				document.getElementById("andrea_traits_two").innerHTML = "10";

			}

});
