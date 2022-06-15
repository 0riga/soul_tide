// главное меню
$(document).on("click", ".dollinfo_tabs_menu div", function () {
	var numberIndex = $(this).index();

	if (!$(this).is("active")) {
		$(".dollinfo_tabs_menu div").removeClass("active");
		$(".nacc_item").removeClass("active");

		$(this).addClass("active");
		$(".nacc").find(".nacc_item:eq(" + numberIndex + ")").addClass("active");


	}
});
//меню скилсетов
$(document).on("click", ".menu_item", function () {
	var numberIndex = $(this).index();

	if (!$(this).is("active")) {
		$(".menu_item").removeClass("active");
		$(".doll_skilsets").removeClass("active");

		$(this).addClass("active");
		$(".doll_skillsets_wrapper").find(".doll_skilsets:eq(" + numberIndex + ")").addClass("active");


	}
});
