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
			document.getElementsByClassName("skilldescr")[0].innerHTML = 'Атакует противника атрибутом молнии, наносит (110% от ATK).'
		};
		if (getvalue == '+2') {
			document.getElementsByClassName("skilldescr")[0].innerHTML = 'Атакует противника атрибутом молнии, наносит (110% от ATK). С вероятностью 50% наносит 1 стак <span class="tooltip shock" data-tooltip="При накоплении 4 стаков наносит Electrocute урон в размере 120% от ATK атакующего и снимает стаки.">Shock</span>';
		};
		if (getvalue == '+3') {
			document.getElementsByClassName("skilldescr")[0].innerHTML = 'Атакует противника атрибутом молнии, наносит (120% от ATK). С вероятностью 50% наносит 1 стак <span class="tooltip shock" data-tooltip="При накоплении 4 стаков наносит Electrocute урон в размере 120% от ATK атакующего и снимает стаки.">Shock</span>';
		};
		if (getvalue == '+4') {
			document.getElementsByClassName("skilldescr")[0].innerHTML = 'Атакует противника атрибутом молнии, наносит (120% от ATK). С вероятностью 100% наносит 1 стак <span class="tooltip shock" data-tooltip="При накоплении 4 стаков наносит Electrocute урон в размере 120% от ATK атакующего и снимает стаки.">Shock</span>';
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
			document.getElementsByClassName("skilldescr")[1].innerHTML = 'Атакует противника в первом ряду атрибутом молнии, нанося 150% от ATK и снижая наносимый целью урон на 15% на 2 хода.'
		};
		if (getvalue == '+1') {
			document.querySelectorAll(".cost")[1].innerHTML = 'Стоимость: 18 SP'
			document.getElementsByClassName("skilldescr")[1].innerHTML = 'Атакует противника в первом ряду атрибутом молнии, нанося 150% от ATK и снижая наносимый целью урон на 15% на 2 хода.'
		};
		if (getvalue == '+2') {
			document.querySelectorAll(".cost")[1].innerHTML = 'Стоимость: 18 SP'
			document.getElementsByClassName("skilldescr")[1].innerHTML = 'Атакует противника в первом ряду атрибутом молнии, нанося 165% от ATK и снижая наносимый целью урон на 15% на 2 хода.';
		};
		if (getvalue == '+3') {
			document.querySelectorAll(".cost")[1].innerHTML = 'Стоимость: 18 SP'
			document.getElementsByClassName("skilldescr")[1].innerHTML = 'Атакует противника в первом ряду атрибутом молнии, нанося 165% от ATK и снижая наносимый целью урон на 20% на 2 хода.';
		};
		if (getvalue == '+4') {
			document.querySelectorAll(".cost")[1].innerHTML = 'Стоимость: 16 SP'
			document.getElementsByClassName("skilldescr")[1].innerHTML = 'Атакует противника в первом ряду атрибутом молнии, нанося 180% от ATK и снижая наносимый целью урон на 20% на 2 хода.';
		};
	}
});

$('.three div').on('click', function () {
	var getvalue = $(this).attr('value')
	if (document.getElementsByClassName('textbox')[2].value == getvalue || (document.getElementsByClassName('textbox')[2].value == '+0' && getvalue == '+')) {

	} else {
		document.getElementsByClassName('textbox')[2].value = getvalue;
		if (getvalue == '+') {
			document.querySelectorAll(".cost")[2].innerHTML = 'Стоимость: 40 SP'
			document.getElementsByClassName("skilldescr")[2].innerHTML = 'Атакует противников в первом ряду атрибутом молнии, нанося 90% от ATK и увеличивая получаемый целью урон от AoE атак на 10% на 2 хода.'
		};
		if (getvalue == '+1') {
			document.querySelectorAll(".cost")[2].innerHTML = 'Стоимость: 36 SP'
			document.getElementsByClassName("skilldescr")[2].innerHTML = 'Атакует противников в первом ряду атрибутом молнии, нанося 90% от ATK и увеличивая получаемый целью урон от AoE атак на 10% на 2 хода.'
		};
		if (getvalue == '+2') {
			document.querySelectorAll(".cost")[2].innerHTML = 'Стоимость: 36 SP'
			document.getElementsByClassName("skilldescr")[2].innerHTML = 'Атакует противников в первом ряду атрибутом молнии, нанося 100% от ATK и увеличивая получаемый целью урон от AoE атак на 10% на 2 хода.';
		};
		if (getvalue == '+3') {
			document.querySelectorAll(".cost")[2].innerHTML = 'Стоимость: 36 SP'
			document.getElementsByClassName("skilldescr")[2].innerHTML = 'Атакует противников в первом ряду атрибутом молнии, нанося 100% от ATK и увеличивая получаемый целью урон от AoE атак на 15% на 2 хода.';
		};
		if (getvalue == '+4') {
			document.querySelectorAll(".cost")[2].innerHTML = 'Стоимость: 32 SP'
			document.getElementsByClassName("skilldescr")[2].innerHTML = 'Атакует противников в первом ряду атрибутом молнии, нанося 110% от ATK и увеличивая получаемый целью урон от AoE атак на 15% на 2 хода.';
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
			document.getElementsByClassName("skilldescr")[3].innerHTML = 'Атакует противников в первом ряду атрибутом молнии, нанося 180% от ATK и накладывает статус <span class="tooltip electrify" data-tooltip="При получении урона атрибутом молнии, дает 1 стак Shock.">Electrify</span> на 2 хода.'
		};
		if (getvalue == '+1') {
			document.querySelectorAll(".cost")[3].innerHTML = 'Стоимость: 72 SP'
			document.getElementsByClassName("skilldescr")[3].innerHTML = 'Атакует противников в первом ряду атрибутом молнии, нанося 180% от ATK и накладывает статус <span class="tooltip electrify" data-tooltip="При получении урона атрибутом молнии, дает 1 стак Shock.">Electrify</span> на 2 хода.'
		};
		if (getvalue == '+2') {
			document.querySelectorAll(".cost")[3].innerHTML = 'Стоимость: 72 SP'
			document.getElementsByClassName("skilldescr")[3].innerHTML = 'Атакует противников в первом ряду атрибутом молнии, нанося 190% от ATK и накладывает статус <span class="tooltip electrify" data-tooltip="При получении урона атрибутом молнии, дает 1 стак Shock.">Electrify</span> на 2 хода.';
		};
		if (getvalue == '+3') {
			document.querySelectorAll(".cost")[3].innerHTML = 'Стоимость: 72 SP'
			document.getElementsByClassName("skilldescr")[3].innerHTML = 'Атакует противников в первом ряду атрибутом молнии, нанося 190% от ATK и накладывает статус <span class="tooltip electrify" data-tooltip="При получении урона атрибутом молнии, дает 1 стак Shock.">Electrify</span> на 2 хода. Увеличивает получаемый целью урон от <span class="tooltip electrocute" data-tooltip="Активируется при накоплении 4 стаков Shock и наносит урон в размере 120% от ATK атакующего снимая все стаки Shock.">Electrocute</span> на 100% на 2 хода.';
		};
		if (getvalue == '+4') {
			document.querySelectorAll(".cost")[3].innerHTML = 'Стоимость: 64 SP'
			document.getElementsByClassName("skilldescr")[3].innerHTML = 'Атакует противников в первом ряду атрибутом молнии, нанося 200% от ATK и накладывает статус <span class="tooltip electrify" data-tooltip="При получении урона атрибутом молнии, дает 1 стак Shock.">Electrify</span> на 2 хода. Увеличивает получаемый целью урон от <span class="tooltip electrocute" data-tooltip="Активируется при накоплении 4 стаков Shock и наносит урон в размере 120% от ATK атакующего снимая все стаки Shock.">Electrocute</span> на 100% на 2 хода.';
		};
	}
});
$('.five div').on('click', function () {
	var getvalue = $(this).attr('value')
	if (document.getElementsByClassName('textbox')[4].value == getvalue || (document.getElementsByClassName('textbox')[4].value == '+0' && getvalue == '+')) {

	} else {
		document.getElementsByClassName('textbox')[4].value = getvalue;
		if (getvalue == '+') {
			document.getElementsByClassName("skilldescr")[4].innerHTML = 'Атакует противника атрибутом холода, наносит (100% от ATK).'
		};
		if (getvalue == '+1') {
			document.getElementsByClassName("skilldescr")[4].innerHTML = 'Атакует противника атрибутом холода, наносит (110% от ATK).'
		};
		if (getvalue == '+2') {
			document.getElementsByClassName("skilldescr")[4].innerHTML = 'Атакует противника атрибутом холода, наносит (110% от ATK). С вероятностью 50% наносит 1 стак&nbsp; <span class="tooltip chill" data-tooltip="Уменьшает наносимый урон на 3%. Складывается до 10 раз.">Chill</span>.';
		};
		if (getvalue == '+3') {
			document.getElementsByClassName("skilldescr")[4].innerHTML = 'Атакует противника атрибутом холода, наносит (120% от ATK). С вероятностью 50% наносит 1 стак&nbsp; <span class="tooltip chill" data-tooltip="Уменьшает наносимый урон на 3%. Складывается до 10 раз.">Chill</span>.';
		};
		if (getvalue == '+4') {
			document.getElementsByClassName("skilldescr")[4].innerHTML = 'Атакует противника атрибутом холода, наносит (120% от ATK). С вероятностью 100% наносит 1 стак&nbsp; <span class="tooltip chill" data-tooltip="Уменьшает наносимый урон на 3%. Складывается до 10 раз.">Chill</span>.';
		};
	}
});

$('.six div').on('click', function () {
	var getvalue = $(this).attr('value')
	if (document.getElementsByClassName('textbox')[5].value == getvalue || (document.getElementsByClassName('textbox')[5].value == '+0' && getvalue == '+')) {

	} else {
		document.getElementsByClassName('textbox')[5].value = getvalue;
		if (getvalue == '+') {
			document.querySelectorAll(".cost")[5].innerHTML = 'Стоимость: 30 SP'
			document.getElementsByClassName("skilldescr")[5].innerHTML = 'Атакует всех противников атрибутом холода, нанося 60% от ATK и увеличивает DEF Akaset на 20% на 2 хода.'
		};
		if (getvalue == '+1') {
			document.querySelectorAll(".cost")[5].innerHTML = 'Стоимость: 26 SP'
			document.getElementsByClassName("skilldescr")[5].innerHTML = 'Атакует всех противников атрибутом холода, нанося 60% от ATK и увеличивает DEF Akaset на 20% на 2 хода.'
		};
		if (getvalue == '+2') {
			document.querySelectorAll(".cost")[5].innerHTML = 'Стоимость: 26 SP'
			document.getElementsByClassName("skilldescr")[5].innerHTML = 'Атакует всех противников атрибутом холода, нанося 65% от ATK и увеличивает DEF Akaset на 20% на 2 хода.';
		};
		if (getvalue == '+3') {
			document.querySelectorAll(".cost")[5].innerHTML = 'Стоимость: 26 SP'
			document.getElementsByClassName("skilldescr")[5].innerHTML = 'Атакует всех противников атрибутом холода, нанося 65% от ATK и увеличивает DEF Akaset на 30% на 2 хода.';
		};
		if (getvalue == '+4') {
			document.querySelectorAll(".cost")[5].innerHTML = 'Стоимость: 24 SP'
			document.getElementsByClassName("skilldescr")[5].innerHTML = 'Атакует всех противников атрибутом холода, нанося 70% от ATK и увеличивает DEF Akaset на 20% на 2 хода.';
		};
	}
});
$('.seven div').on('click', function () {
	var getvalue = $(this).attr('value')
	if (document.getElementsByClassName('textbox')[6].value == getvalue || (document.getElementsByClassName('textbox')[6].value == '+0' && getvalue == '+')) {

	} else {
		document.getElementsByClassName('textbox')[6].value = getvalue;
		if (getvalue == '+') {
			document.getElementsByClassName("skilldescr")[6].innerHTML = '<span>В конце каждого хода подсчитывается количество попаданий, полученных Akaset за этот ход. Если было получено больше АоЕ-попаданий, уменьшается урон, получаемый от АоЕ-атак для всего отряда на 2%. В противном случае уменьшается урон, получаемый Akaset от атак по одиночной цели, на 2%, суммирется до 5 раз.</span>'
		};
		if (getvalue == '+1') {
			document.getElementsByClassName("skilldescr")[6].innerHTML = '<span>В конце каждого хода подсчитывается количество попаданий, полученных Akaset за этот ход. Если было получено больше АоЕ-попаданий, уменьшается урон, получаемый от АоЕ-атак для всего отряда на 3%. В противном случае уменьшается урон, получаемый Akaset от атак по одиночной цели, на 3%, суммирется до 5 раз.</span>'
		};
		if (getvalue == '+2') {
			document.getElementsByClassName("skilldescr")[6].innerHTML = 'В конце каждого хода подсчитывается количество попаданий, полученных Akaset за этот ход. Если было получено больше АоЕ-попаданий, уменьшается урон, получаемый от АоЕ-атак для всего отряда на 3%. В противном случае уменьшается урон, получаемый Akaset от атак по одиночной цели, на 3%, суммирется до 5 раз. Увеличивает отряду наносимый урон от АоЕ атак, на 1% за каждую полученную АОЕ атаку, суммирется до 5 раз.';
		};
		if (getvalue == '+3') {
			document.getElementsByClassName("skilldescr")[6].innerHTML = 'В конце каждого хода подсчитывается количество попаданий, полученных Akaset за этот ход. Если было получено больше АоЕ-попаданий, уменьшается урон, получаемый от АоЕ-атак для всего отряда на 4%. В противном случае уменьшается урон, получаемый Akaset от атак по одиночной цели, на 4%, суммирется до 5 раз. Увеличивает отряду наносимый урон от АоЕ атак, на 1% за каждую полученную АОЕ атаку, суммирется до 5 раз.';
		};
		if (getvalue == '+4') {
			document.getElementsByClassName("skilldescr")[6].innerHTML = 'В конце каждого хода подсчитывается количество попаданий, полученных Akaset за этот ход. Если было получено больше АоЕ-попаданий, уменьшается урон, получаемый от АоЕ-атак для всего отряда на 4%. В противном случае уменьшается урон, получаемый Akaset от атак по одиночной цели, на 4%, суммирется до 5 раз. Увеличивает отряду наносимый урон от АоЕ атак, на 2% за каждую полученную АОЕ атаку, суммирется до 5 раз.';
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
			document.getElementsByClassName("skilldescr")[7].innerHTML = 'Дает каждой кукле 2 заряда I-Field (сумируется). Каждый заряд может снизить входящий урон на 25% на один раз.'
		};
		if (getvalue == '+1') {
			document.querySelectorAll(".cost")[7].innerHTML = 'Стоимость: 72 SP'
			document.getElementsByClassName("skilldescr")[7].innerHTML = 'Дает каждой кукле 2 заряда I-Field (сумируется). Каждый заряд может снизить входящий урон на 25% на один раз.'
		};
		if (getvalue == '+2') {
			document.querySelectorAll(".cost")[7].innerHTML = 'Стоимость: 72 SP'
			document.getElementsByClassName("skilldescr")[7].innerHTML = 'Дает каждой кукле 2 заряда I-Field (сумируется). Каждый заряд может снизить входящий урон на 30% на один раз.';
		};
		if (getvalue == '+3') {
			document.querySelectorAll(".cost")[7].innerHTML = 'Стоимость: 72 SP'
			document.getElementsByClassName("skilldescr")[7].innerHTML = 'Дает каждой кукле 2 заряда I-Field (сумируется). Каждый заряд может снизить входящий урон на 30% на один раз. Дает каждой кукле щит, поглощающий урон до 5% от максимального HP Акасет на 2 хода.';
		};
		if (getvalue == '+4') {
			document.querySelectorAll(".cost")[7].innerHTML = 'Стоимость: 64 SP'
			document.getElementsByClassName("skilldescr")[7].innerHTML = 'Дает каждой кукле 2 заряда I-Field (сумируется). Каждый заряд может снизить входящий урон на 35% на один раз. Дает каждой кукле щит, поглощающий урон до 5% от максимального HP Акасет на 2 хода.';
		};
	}
});

