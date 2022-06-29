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
		document.getElementById("asuna_traits_one").innerHTML = "10";
		document.getElementById("asuna_traits_one_adv").innerHTML = "5";
		document.getElementById("asuna_traits_two").innerHTML = "1 стак";
		document.getElementById("asuna_traits_two_adv").innerHTML = "50";
	}
	else
		if (getIndex == "2" || getIndex == "3") {
			document.getElementById("asuna_traits_one").innerHTML = "15";
			document.getElementById("asuna_traits_one_adv").innerHTML = "8";
			document.getElementById("asuna_traits_two").innerHTML = "2 стака";
			document.getElementById("asuna_traits_two_adv").innerHTML = "50";
		}
		else
			if (getIndex == "4") {
				document.getElementById("asuna_traits_one").innerHTML = "20";
				document.getElementById("asuna_traits_one_adv").innerHTML = "10";
				document.getElementById("asuna_traits_two").innerHTML = "2 стака";
				document.getElementById("asuna_traits_two_adv").innerHTML = "100";

			}

});
