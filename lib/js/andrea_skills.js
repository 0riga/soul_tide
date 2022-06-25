$('.dropdown').on('click', function () {
	$('.dropdown').removeClass('notclicable');
	$(this).toggleClass('active');
});
$(document).mouseup(function (e) {
	var container = $(".dropdown");
	if (container.has(e.target).length === 0) {
		container.removeClass('active');
	}
});

$('.one div').on('click', function () {
	var getvalue = $(this).attr('value')
	if (document.getElementsByClassName('textbox')[0].value == getvalue || (document.getElementsByClassName('textbox')[0].value == '+0' && getvalue == '+')) {

	} else {
		document.getElementsByClassName('textbox')[0].value = getvalue;
		if (getvalue == '+') {
			document.getElementsByClassName("skilldescr")[0].innerHTML = 'Атакует противника атрибутом молнии, наносит (100% от ATK).'
		};
		if (getvalue == '+1') {
			document.getElementsByClassName("skilldescr")[0].innerHTML = 'Атакует противника атрибутом холода, наносит (110% от ATK).'
		};
		if (getvalue == '+2') {
			document.getElementsByClassName("skilldescr")[0].innerHTML = 'Атакует противника атрибутом холода, наносит (110% от ATK). С вероятностью 50% наносит 1 стак <span class="tooltip chill" data-tooltip="Уменьшает наносимый урон на 3%. Складывается до 10 раз.">Chill</span>';
		};
		if (getvalue == '+3') {
			document.getElementsByClassName("skilldescr")[0].innerHTML = 'Атакует противника атрибутом холода, наносит (120% от ATK). С вероятностью 50% наносит 1 стак <span class="tooltip chill" data-tooltip="Уменьшает наносимый урон на 3%. Складывается до 10 раз.">Chill</span>';
		};
		if (getvalue == '+4') {
			document.getElementsByClassName("skilldescr")[0].innerHTML = 'Атакует противника атрибутом холода, наносит (120% от ATK). С вероятностью 100% наносит 1 стак <span class="tooltip chill" data-tooltip="Уменьшает наносимый урон на 3%. Складывается до 10 раз.">Chill</span>';
		};
	}
});

$('.two div').on('click', function () {
	var getvalue = $(this).attr('value')
	if (document.getElementsByClassName('textbox')[1].value == getvalue || (document.getElementsByClassName('textbox')[1].value == '+0' && getvalue == '+')) {

	} else {
		document.getElementsByClassName('textbox')[1].value = getvalue;
		if (getvalue == '+') {
			document.querySelectorAll(".cost")[1].innerHTML = 'Стоимость: 20 SP'
			document.getElementsByClassName("skilldescr")[1].innerHTML = 'Атакует противника в первом ряду атрибутом холода 2 раза, нанося 2 * 75% от ATK. Противникам, с уровнем HP выше 50%, наносится на 10% урона больше.'
		};
		if (getvalue == '+1') {
			document.querySelectorAll(".cost")[1].innerHTML = 'Стоимость: 18 SP'
			document.getElementsByClassName("skilldescr")[1].innerHTML = 'Атакует противника в первом ряду атрибутом холода 2 раза, нанося 2 * 75% от ATK. Противникам, с уровнем HP выше 50%, наносится на 10% урона больше.'
		};
		if (getvalue == '+2') {
			document.querySelectorAll(".cost")[1].innerHTML = 'Стоимость: 18 SP'
			document.getElementsByClassName("skilldescr")[1].innerHTML = 'Атакует противника в первом ряду атрибутом холода 2 раза, нанося 2 * 83% от ATK. Противникам, с уровнем HP выше 50%, наносится на 10% урона больше.';
		};
		if (getvalue == '+3') {
			document.querySelectorAll(".cost")[1].innerHTML = 'Стоимость: 18 SP'
			document.getElementsByClassName("skilldescr")[1].innerHTML = 'Атакует противника в первом ряду атрибутом холода 2 раза, нанося 2 * 83% от ATK. Противникам, с уровнем HP выше 50%, наносится на 15% урона больше.';
		};
		if (getvalue == '+4') {
			document.querySelectorAll(".cost")[1].innerHTML = 'Стоимость: 16 SP'
			document.getElementsByClassName("skilldescr")[1].innerHTML = 'Атакует противника в первом ряду атрибутом холода 2 раза, нанося 2 * 90% от ATK. Противникам, с уровнем HP выше 50%, наносится на 15% урона больше.';
		};
	}
});

$('.three div').on('click', function () {
	var getvalue = $(this).attr('value')
	if (document.getElementsByClassName('textbox')[2].value == getvalue || (document.getElementsByClassName('textbox')[2].value == '+0' && getvalue == '+')) {

	} else {
		document.getElementsByClassName('textbox')[2].value = getvalue;
		if (getvalue == '+') {
			document.querySelectorAll(".cost")[2].innerHTML = 'Стоимость: 0 SP'
			document.getElementsByClassName("skilldescr")[2].innerHTML = 'Когда Андреа нанесит прямой урон, ее урон атрибутом холода на увеличивает 1%, складывается до 6 раз. Когда Spell Amplifier набирает 6 стаков, АТК Андреа увеличивается на 10%.'
		};
		if (getvalue == '+1') {
			document.querySelectorAll(".cost")[2].innerHTML = 'Стоимость: 0 SP'
			document.getElementsByClassName("skilldescr")[2].innerHTML = 'Когда Андреа нанесит прямой урон, ее урон атрибутом холода на увеличивает 1.5%, складывается до 6 раз. Когда Spell Amplifier набирает 6 стаков, АТК Андреа увеличивается на 10%.'
		};
		if (getvalue == '+2') {
			document.querySelectorAll(".cost")[2].innerHTML = 'Стоимость: 0 SP'
			document.getElementsByClassName("skilldescr")[2].innerHTML = 'Когда Андреа нанесит прямой урон, ее урон атрибутом холода на увеличивает 2%, складывается до 6 раз. Когда Spell Amplifier набирает 6 стаков, АТК Андреа увеличивается на 10%.';
		};
		if (getvalue == '+3') {
			document.querySelectorAll(".cost")[2].innerHTML = 'Стоимость: 0 SP'
			document.getElementsByClassName("skilldescr")[2].innerHTML = 'Когда Андреа нанесит прямой урон, ее урон атрибутом холода на увеличивает 2.5%, складывается до 6 раз. Когда Spell Amplifier набирает 6 стаков, АТК Андреа увеличивается на 10%.';
		};
		if (getvalue == '+4') {
			document.querySelectorAll(".cost")[2].innerHTML = 'Стоимость: 0 SP'
			document.getElementsByClassName("skilldescr")[2].innerHTML = 'Когда Андреа нанесит прямой урон, ее урон атрибутом холода на увеличивает 3%, складывается до 6 раз. Когда Spell Amplifier набирает 6 стаков, АТК Андреа увеличивается на 10%.';
		};
	}
});

$('.four div').on('click', function () {
	var getvalue = $(this).attr('value')
	if (document.getElementsByClassName('textbox')[3].value == getvalue || (document.getElementsByClassName('textbox')[3].value == '+0' && getvalue == '+')) {

	} else {
		document.getElementsByClassName('textbox')[3].value = getvalue;
		if (getvalue == '+') {
			document.querySelectorAll(".cost")[3].innerHTML = 'Стоимость: 80 SP'
			document.getElementsByClassName("skilldescr")[3].innerHTML = 'Атакует противника атрибутом холода, нанося 300% от ATK и накладывает<span class="tooltip lockedon" data-tooltip="При повторном получении статуса Locked-On, цель получает урон атрибутом холода в размере 80% от АТК.">Locked-On</span>.'
		};
		if (getvalue == '+1') {
			document.querySelectorAll(".cost")[3].innerHTML = 'Стоимость: 72 SP'
			document.getElementsByClassName("skilldescr")[3].innerHTML = 'Атакует противника атрибутом холода, нанося 300% от ATK и накладывает<span class="tooltip lockedon" data-tooltip="При повторном получении статуса Locked-On, цель получает урон атрибутом холода в размере 80% от АТК.">Locked-On</span>.'
		};
		if (getvalue == '+2') {
			document.querySelectorAll(".cost")[3].innerHTML = 'Стоимость: 72 SP'
			document.getElementsByClassName("skilldescr")[3].innerHTML = 'Атакует противника атрибутом холода, нанося 330% от ATK и накладывает<span class="tooltip lockedon" data-tooltip="При повторном получении статуса Locked-On, цель получает урон атрибутом холода в размере 80% от АТК.">Locked-On</span>.';
		};
		if (getvalue == '+3') {
			document.querySelectorAll(".cost")[3].innerHTML = 'Стоимость: 72 SP'
			document.getElementsByClassName("skilldescr")[3].innerHTML = 'Атакует противника атрибутом холода, нанося 330% от ATK и накладывает<span class="tooltip lockedon" data-tooltip="При повторном получении статуса Locked-On, цель получает урон атрибутом холода в размере 80% от АТК.">Locked-On</span>. Увеличивает множитель урона Locked-On на 20% после каждого срабатывания.';
		};
		if (getvalue == '+4') {
			document.querySelectorAll(".cost")[3].innerHTML = 'Стоимость: 64 SP'
			document.getElementsByClassName("skilldescr")[3].innerHTML = 'Атакует противника атрибутом холода, нанося 360% от ATK и накладывает<span class="tooltip lockedon" data-tooltip="При повторном получении статуса Locked-On, цель получает урон атрибутом холода в размере 80% от АТК.">Locked-On</span>. Увеличивает множитель урона Locked-On на 20% после каждого срабатывания.';
		};
	}
});
$('.five div').on('click', function () {
	var getvalue = $(this).attr('value')
	if (document.getElementsByClassName('textbox')[4].value == getvalue || (document.getElementsByClassName('textbox')[4].value == '+0' && getvalue == '+')) {

	} else {
		document.getElementsByClassName('textbox')[4].value = getvalue;
		if (getvalue == '+') {
			document.getElementsByClassName("skilldescr")[4].innerHTML = 'Атакует противника атрибутом молнии, наносит 100% от ATK.'
		};
		if (getvalue == '+1') {
			document.getElementsByClassName("skilldescr")[4].innerHTML = 'Атакует противника атрибутом молнии, наносит 110% от ATK.'
		};
		if (getvalue == '+2') {
			document.getElementsByClassName("skilldescr")[4].innerHTML = 'Атакует противника атрибутом молнии, наносит 110% от ATK. С вероятностью 50% наносит 1 стак <span class="tooltip shock" data-tooltip="При накоплении 4 стаков наносит Electrocute урон в размере 120% от ATK атакующего и снимает стаки.">Shock</span>';
		};
		if (getvalue == '+3') {
			document.getElementsByClassName("skilldescr")[4].innerHTML = 'Атакует противника атрибутом молнии, наносит 120% от ATK. С вероятностью 50% наносит 1 стак <span class="tooltip shock" data-tooltip="При накоплении 4 стаков наносит Electrocute урон в размере 120% от ATK атакующего и снимает стаки.">Shock</span>';
		};
		if (getvalue == '+4') {
			document.getElementsByClassName("skilldescr")[4].innerHTML = 'Атакует противника атрибутом молнии, наносит 120% от ATK. С вероятностью 100% наносит 1 стак <span class="tooltip shock" data-tooltip="При накоплении 4 стаков наносит Electrocute урон в размере 120% от ATK атакующего и снимает стаки.">Shock</span>';
		};
	}
});

$('.six div').on('click', function () {
	var getvalue = $(this).attr('value')
	if (document.getElementsByClassName('textbox')[5].value == getvalue || (document.getElementsByClassName('textbox')[5].value == '+0' && getvalue == '+')) {

	} else {
		document.getElementsByClassName('textbox')[5].value = getvalue;
		if (getvalue == '+') {
			document.querySelectorAll(".cost")[5].innerHTML = 'Стоимость: 20 SP'
			document.getElementsByClassName("skilldescr")[5].innerHTML = 'Атакует противников в первом ряду атрибутом молнии, нанося 90% от ATK и накладывая 1 стак <span class="tooltip shock" data-tooltip="При накоплении 4 стаков наносит Electrocute урон в размере 120% от ATK атакующего и снимает стаки.">Shock</span> с вероятностью 50%.'
		};
		if (getvalue == '+1') {
			document.querySelectorAll(".cost")[5].innerHTML = 'Стоимость: 18 SP'
			document.getElementsByClassName("skilldescr")[5].innerHTML = 'Атакует противников в первом ряду атрибутом молнии, нанося 90% от ATK и накладывая 1 стак <span class="tooltip shock" data-tooltip="При накоплении 4 стаков наносит Electrocute урон в размере 120% от ATK атакующего и снимает стаки.">Shock</span> с вероятностью 50%.'
		};
		if (getvalue == '+2') {
			document.querySelectorAll(".cost")[5].innerHTML = 'Стоимость: 18 SP'
			document.getElementsByClassName("skilldescr")[5].innerHTML = 'Атакует противников в первом ряду атрибутом молнии, нанося 100% от ATK и накладывая 1 стак <span class="tooltip shock" data-tooltip="При накоплении 4 стаков наносит Electrocute урон в размере 120% от ATK атакующего и снимает стаки.">Shock</span> с вероятностью 50%.';
		};
		if (getvalue == '+3') {
			document.querySelectorAll(".cost")[5].innerHTML = 'Стоимость: 18 SP'
			document.getElementsByClassName("skilldescr")[5].innerHTML = 'Атакует противников в первом ряду атрибутом молнии, нанося 100% от ATK и накладывая 1 стак <span class="tooltip shock" data-tooltip="При накоплении 4 стаков наносит Electrocute урон в размере 120% от ATK атакующего и снимает стаки.">Shock</span> с вероятностью 100%.';
		};
		if (getvalue == '+4') {
			document.querySelectorAll(".cost")[5].innerHTML = 'Стоимость: 16 SP'
			document.getElementsByClassName("skilldescr")[5].innerHTML = 'Атакует противников в первом ряду атрибутом молнии, нанося 110% от ATK и накладывая 1 стак <span class="tooltip shock" data-tooltip="При накоплении 4 стаков наносит Electrocute урон в размере 120% от ATK атакующего и снимает стаки.">Shock</span> с вероятностью 100%.';
		};
	}
});
$('.seven div').on('click', function () {
	var getvalue = $(this).attr('value')
	if (document.getElementsByClassName('textbox')[6].value == getvalue || (document.getElementsByClassName('textbox')[6].value == '+0' && getvalue == '+')) {

	} else {
		document.getElementsByClassName('textbox')[6].value = getvalue;
		if (getvalue == '+') {
			document.getElementsByClassName("skilldescr")[6].innerHTML = 'Увеличивает максимальное количество HP Андреа на 15%. Перенаправляет 10% входящего урона, который получит ваш отряд, на Андреа.'
		};
		if (getvalue == '+1') {
			document.getElementsByClassName("skilldescr")[6].innerHTML = 'Увеличивает максимальное количество HP Андреа на 15%. Перенаправляет 15% входящего урона, который получит ваш отряд, на Андреа.'
		};
		if (getvalue == '+2') {
			document.getElementsByClassName("skilldescr")[6].innerHTML = 'Увеличивает максимальное количество HP Андреа на 15%. Перенаправляет 15% входящего урона, который получит ваш отряд, на Андреа. В начале каждого боя увеличивает урон атрибута молнии и <span class="tooltip electrocute" data-tooltip="Активируется при накоплении 4 стаков Shock и наносит урон в размере 120% от ATK атакующего снимая все стаки Shock.">Electrocute</span> вашего отряда на 2% на 5 ходов.';
		};
		if (getvalue == '+3') {
			document.getElementsByClassName("skilldescr")[6].innerHTML = 'Увеличивает максимальное количество HP Андреа на 15%. Перенаправляет 20% входящего урона, который получит ваш отряд, на Андреа. В начале каждого боя увеличивает урон атрибута молнии и <span class="tooltip electrocute" data-tooltip="Активируется при накоплении 4 стаков Shock и наносит урон в размере 120% от ATK атакующего снимая все стаки Shock.">Electrocute</span> вашего отряда на 2% на 5 ходов.';
		};
		if (getvalue == '+4') {
			document.getElementsByClassName("skilldescr")[6].innerHTML = 'Увеличивает максимальное количество HP Андреа на 15%. Перенаправляет 20% входящего урона, который получит ваш отряд, на Андреа. В начале каждого боя увеличивает урон атрибута молнии и <span class="tooltip electrocute" data-tooltip="Активируется при накоплении 4 стаков Shock и наносит урон в размере 120% от ATK атакующего снимая все стаки Shock.">Electrocute</span> вашего отряда на 5% на 5 ходов.';
		};
	}
});

$('.eight div').on('click', function () {
	var getvalue = $(this).attr('value')
	if (document.getElementsByClassName('textbox')[7].value == getvalue || (document.getElementsByClassName('textbox')[7].value == '+0' && getvalue == '+')) {

	} else {
		document.getElementsByClassName('textbox')[7].value = getvalue;
		if (getvalue == '+') {
			document.querySelectorAll(".cost")[7].innerHTML = 'Стоимость: 80 SP'
			document.getElementsByClassName("skilldescr")[7].innerHTML = 'Накладывает на ваш отряд <span class="tooltip neuralink" data-tooltip="Перенаправляет 20% входящего урона на Андреа. При получении прямого урона Андреа восстанавливает 6% HP с вероятностью 60%.">Neuralink</span> на 2 хода.'
		};
		if (getvalue == '+1') {
			document.querySelectorAll(".cost")[7].innerHTML = 'Стоимость: 72 SP'
			document.getElementsByClassName("skilldescr")[7].innerHTML = 'Накладывает на ваш отряд <span class="tooltip neuralink" data-tooltip="Перенаправляет 20% входящего урона на Андреа. При получении прямого урона Андреа восстанавливает 6% HP с вероятностью 60%.">Neuralink</span> на 2 хода.'
		};
		if (getvalue == '+2') {
			document.querySelectorAll(".cost")[7].innerHTML = 'Стоимость: 72 SP'
			document.getElementsByClassName("skilldescr")[7].innerHTML = 'Накладывает на ваш отряд <span class="tooltip neuralink" data-tooltip="Перенаправляет 20% входящего урона на Андреа. При получении прямого урона Андреа восстанавливает 6% HP с вероятностью 80%.">Neuralink</span> на 2 хода. Шанс восстановления HP увеличивается до 80%.';
		};
		if (getvalue == '+3') {
			document.querySelectorAll(".cost")[7].innerHTML = 'Стоимость: 72 SP'
			document.getElementsByClassName("skilldescr")[7].innerHTML = 'Накладывает на ваш отряд <span class="tooltip neuralink" data-tooltip="Перенаправляет 20% входящего урона на Андреа. При получении прямого урона Андреа восстанавливает 6% HP с вероятностью 80%.">Neuralink</span> на 2 хода. Шанс восстановления HP увеличивается до 80%.';
		};
		if (getvalue == '+4') {
			document.querySelectorAll(".cost")[7].innerHTML = 'Стоимость: 64 SP'
			document.getElementsByClassName("skilldescr")[7].innerHTML = 'Накладывает на ваш отряд <span class="tooltip neuralink" data-tooltip="Перенаправляет 20% входящего урона на Андреа. При получении прямого урона Андреа восстанавливает 6% HP с вероятностью 100%.">Neuralink</span> на 2 хода. Шанс восстановления HP увеличивается до 100%.';
		};
	}
});

