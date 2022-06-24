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
			document.getElementsByClassName("skilldescr")[1].innerHTML = 'Атакует противника атрибутом холода, нанося 150% от ATK и снижает скорость цели на 5% на 3 хода.'
		};
		if (getvalue == '+1') {
			document.querySelectorAll(".cost")[1].innerHTML = 'Стоимость: 18 SP'
			document.getElementsByClassName("skilldescr")[1].innerHTML = 'Атакует противника атрибутом холода, нанося 150% от ATK и снижает скорость цели на 5% на 3 хода.'
		};
		if (getvalue == '+2') {
			document.querySelectorAll(".cost")[1].innerHTML = 'Стоимость: 18 SP'
			document.getElementsByClassName("skilldescr")[1].innerHTML = 'Атакует противника атрибутом холода, нанося 165% от ATK и снижает скорость цели на 5% на 3 хода.';
		};
		if (getvalue == '+3') {
			document.querySelectorAll(".cost")[1].innerHTML = 'Стоимость: 18 SP'
			document.getElementsByClassName("skilldescr")[1].innerHTML = 'Атакует противника атрибутом холода, нанося 165% от ATK и снижает скорость цели на 10% на 3 хода.';
		};
		if (getvalue == '+4') {
			document.querySelectorAll(".cost")[1].innerHTML = 'Стоимость: 16 SP'
			document.getElementsByClassName("skilldescr")[1].innerHTML = 'Атакует противника атрибутом холода, нанося 180% от ATK и снижает скорость цели на 5% на 3 хода.';
		};
	}
});

$('.three div').on('click', function () {
	var getvalue = $(this).attr('value')
	if (document.getElementsByClassName('textbox')[2].value == getvalue || (document.getElementsByClassName('textbox')[2].value == '+0' && getvalue == '+')) {

	} else {
		document.getElementsByClassName('textbox')[2].value = getvalue;
		if (getvalue == '+') {
			document.querySelectorAll(".cost")[2].innerHTML = 'Стоимость: 30 SP'
			document.getElementsByClassName("skilldescr")[2].innerHTML = 'Атакует противников в первом ряду атрибутом холода, нанося 100% от ATK и накладывает статус <span class="tooltip frostbite" data-tooltip="При получении урона стихией холода 3 раза за ход, накладывает Freeze(Невозможно действовать. Увеличивает получаемый урон на 10%.) на 1 ход.">Frostbite</span> на 2 хода.</span>'
		};
		if (getvalue == '+1') {
			document.querySelectorAll(".cost")[2].innerHTML = 'Стоимость: 26 SP'
			document.getElementsByClassName("skilldescr")[2].innerHTML = 'Атакует противников в первом ряду атрибутом холода, нанося 100% от ATK и накладывает статус <span class="tooltip frostbite" data-tooltip="При получении урона стихией холода 3 раза за ход, накладывает Freeze(Невозможно действовать. Увеличивает получаемый урон на 10%.) на 1 ход.">Frostbite</span> на 2 хода.</span>'
		};
		if (getvalue == '+2') {
			document.querySelectorAll(".cost")[2].innerHTML = 'Стоимость: 26 SP'
			document.getElementsByClassName("skilldescr")[2].innerHTML = 'Атакует противников в первом ряду атрибутом холода, нанося 110% от ATK и накладывает статус <span class="tooltip frostbite" data-tooltip="При получении урона стихией холода 3 раза за ход, накладывает Freeze(Невозможно действовать. Увеличивает получаемый урон на 10%.) на 1 ход.">Frostbite</span> на 2 хода.</span>';
		};
		if (getvalue == '+3') {
			document.querySelectorAll(".cost")[2].innerHTML = 'Стоимость: 26 SP'
			document.getElementsByClassName("skilldescr")[2].innerHTML = 'Атакует противников в первом ряду атрибутом холода, нанося 110% от ATK, накладывает статус <span class="tooltip frostbite" data-tooltip="При получении урона стихией холода 3 раза за ход, накладывает Freeze(Невозможно действовать. Увеличивает получаемый урон на 10%.) на 1 ход.">Frostbite</span></span> и уменьшает DEF целей на 20% на 2 хода.';
		};
		if (getvalue == '+4') {
			document.querySelectorAll(".cost")[2].innerHTML = 'Стоимость: 24 SP'
			document.getElementsByClassName("skilldescr")[2].innerHTML = 'Атакует противников в первом ряду атрибутом холода, нанося 120% от ATK, накладывает статус <span class="tooltip frostbite" data-tooltip="При получении урона стихией холода 3 раза за ход, накладывает Freeze(Невозможно действовать. Увеличивает получаемый урон на 10%.) на 1 ход.">Frostbite</span></span> и уменьшает DEF целей на 20% на 2 хода.';
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
			document.getElementsByClassName("skilldescr")[3].innerHTML = 'Атакует всех противников в первом и последнем ряду по очереди атрибутом холода, нанося по 90% от ATK и накладывая <span class="tooltip frostrune" data-tooltip="После наложения Freeze, получает урон атрибутом холода в размере 50% от ATK атакуещего.">Frost Rune</span> на 2 хода.'
		};
		if (getvalue == '+1') {
			document.querySelectorAll(".cost")[3].innerHTML = 'Стоимость: 72 SP'
			document.getElementsByClassName("skilldescr")[3].innerHTML = 'Атакует всех противников в первом и последнем ряду по очереди атрибутом холода, нанося по 90% от ATK и накладывая <span class="tooltip frostrune" data-tooltip="После наложения Freeze, получает урон атрибутом холода в размере 50% от ATK атакуещего.">Frost Rune</span> на 2 хода.'
		};
		if (getvalue == '+2') {
			document.querySelectorAll(".cost")[3].innerHTML = 'Стоимость: 72 SP'
			document.getElementsByClassName("skilldescr")[3].innerHTML = 'Атакует всех противников в первом и последнем ряду по очереди атрибутом холода, нанося по 100% от ATK и накладывая <span class="tooltip frostrune" data-tooltip="После наложения Freeze, получает урон атрибутом холода в размере 50% от ATK атакуещего.">Frost Rune</span> на 2 хода.';
		};
		if (getvalue == '+3') {
			document.querySelectorAll(".cost")[3].innerHTML = 'Стоимость: 72 SP'
			document.getElementsByClassName("skilldescr")[3].innerHTML = 'Атакует всех противников в первом и последнем ряду по очереди атрибутом холода, нанося по 100% от ATK и накладывая <span class="tooltip frostrune" data-tooltip="После наложения Freeze, получает урон атрибутом холода в размере 50% от ATK атакуещего.">Frost Rune</span> на 2 хода. Увеличивает урон, получаемый целью от атак атрибутом холода, на 50% на 2 хода.';
		};
		if (getvalue == '+4') {
			document.querySelectorAll(".cost")[3].innerHTML = 'Стоимость: 64 SP'
			document.getElementsByClassName("skilldescr")[3].innerHTML = 'Атакует всех противников в первом и последнем ряду по очереди атрибутом холода, нанося по 110% от ATK и накладывая <span class="tooltip frostrune" data-tooltip="После наложения Freeze, получает урон атрибутом холода в размере 50% от ATK атакуещего.">Frost Rune</span> на 2 хода. Увеличивает урон, получаемый целью от атак атрибутом холода, на 50% на 2 хода.';
		};
	}
});
$('.five div').on('click', function () {
	var getvalue = $(this).attr('value')
	if (document.getElementsByClassName('textbox')[4].value == getvalue || (document.getElementsByClassName('textbox')[4].value == '+0' && getvalue == '+')) {

	} else {
		document.getElementsByClassName('textbox')[4].value = getvalue;
		if (getvalue == '+') {
			document.getElementsByClassName("skilldescr")[4].innerHTML = 'Атакует противника атрибутом огня, наносит 100% от ATK.'
		};
		if (getvalue == '+1') {
			document.getElementsByClassName("skilldescr")[4].innerHTML = 'Атакует противника атрибутом огня, наносит 100% от ATK.'
		};
		if (getvalue == '+2') {
			document.getElementsByClassName("skilldescr")[4].innerHTML = 'Атакует противника атрибутом огня, наносит 110% от ATK. Увеличивает DEF Алисы на 5% на 2 хода.';
		};
		if (getvalue == '+3') {
			document.getElementsByClassName("skilldescr")[4].innerHTML = 'Атакует противника атрибутом огня, наносит 120% от ATK. Увеличивает DEF Алисы на 5% на 2 хода.';
		};
		if (getvalue == '+4') {
			document.getElementsByClassName("skilldescr")[4].innerHTML = 'Атакует противника атрибутом огня, наносит 120% от ATK. Увеличивает DEF Алисы на 10% на 2 хода.';
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
			document.getElementsByClassName("skilldescr")[5].innerHTML = 'Атакует всех противников атрибутом огня, нанося 60% от ATK и снижает получаемый урон вашего отряда на 5% на 2 хода.'
		};
		if (getvalue == '+1') {
			document.querySelectorAll(".cost")[5].innerHTML = 'Стоимость: 18 SP'
			document.getElementsByClassName("skilldescr")[5].innerHTML = 'Атакует всех противников атрибутом огня, нанося 60% от ATK и снижает получаемый урон вашего отряда на 5% на 2 хода.'
		};
		if (getvalue == '+2') {
			document.querySelectorAll(".cost")[5].innerHTML = 'Стоимость: 18 SP'
			document.getElementsByClassName("skilldescr")[5].innerHTML = 'Атакует всех противников атрибутом огня, нанося 65% от ATK и снижает получаемый урон вашего отряда на 5% на 2 хода.';
		};
		if (getvalue == '+3') {
			document.querySelectorAll(".cost")[5].innerHTML = 'Стоимость: 18 SP'
			document.getElementsByClassName("skilldescr")[5].innerHTML = 'Атакует всех противников атрибутом огня, нанося 65% от ATK и снижает получаемый урон вашего отряда на 10% на 2 хода.';
		};
		if (getvalue == '+4') {
			document.querySelectorAll(".cost")[5].innerHTML = 'Стоимость: 16 SP'
			document.getElementsByClassName("skilldescr")[5].innerHTML = 'Атакует всех противников атрибутом огня, нанося 70% от ATK и снижает получаемый урон вашего отряда на 10% на 2 хода.';
		};
	}
});
$('.seven div').on('click', function () {
	var getvalue = $(this).attr('value')
	if (document.getElementsByClassName('textbox')[6].value == getvalue || (document.getElementsByClassName('textbox')[6].value == '+0' && getvalue == '+')) {

	} else {
		document.getElementsByClassName('textbox')[6].value = getvalue;
		if (getvalue == '+') {
			document.getElementsByClassName("skilldescr")[6].innerHTML = 'Когда отряд получает прямой урон 5 раз, накладывается щит на 2 хода в размере 30% от DEF Алисы. Этот эффект может сработать один раз за ход.'
		};
		if (getvalue == '+1') {
			document.getElementsByClassName("skilldescr")[6].innerHTML = 'Когда отряд получает прямой урон 5 раз, накладывается щит на 2 хода в размере 40% от DEF Алисы. Этот эффект может сработать один раз за ход.'
		};
		if (getvalue == '+2') {
			document.getElementsByClassName("skilldescr")[6].innerHTML = 'Когда отряд получает прямой урон 5 раз, накладывается щит на 2 хода в размере 40% от DEF Алисы. Этот эффект может сработать один раз за ход. Когда кукла наносит урон атрибутом огня, её урон атрибута огня повышается на 1%, складывается до 10 раз.';
		};
		if (getvalue == '+3') {
			document.getElementsByClassName("skilldescr")[6].innerHTML = 'Когда отряд получает прямой урон 5 раз, накладывается щит на 2 хода в размере 50% от DEF Алисы. Этот эффект может сработать один раз за ход. Когда кукла наносит урон атрибутом огня, её урон атрибута огня повышается на 1%, складывается до 10 раз.';
		};
		if (getvalue == '+4') {
			document.getElementsByClassName("skilldescr")[6].innerHTML = 'Когда отряд получает прямой урон 5 раз, накладывается щит на 2 хода в размере 50% от DEF Алисы. Этот эффект может сработать один раз за ход. Когда кукла наносит урон атрибутом огня, её урон атрибута огня повышается на 2%, складывается до 10 раз.';
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
			document.getElementsByClassName("skilldescr")[7].innerHTML = 'Накладывает на каждую куклу щит, поглощающий урон до 6% от максимального HP Алисы + 90% от ее DEF, увеличивает получаемый Алисой щит на 50% и снимает ограничение срабатывания Barrier of Ashes на 2 хода.'
		};
		if (getvalue == '+1') {
			document.querySelectorAll(".cost")[7].innerHTML = 'Стоимость: 72 SP'
			document.getElementsByClassName("skilldescr")[7].innerHTML = 'Накладывает на каждую куклу щит, поглощающий урон до 6% от максимального HP Алисы + 90% от ее DEF, увеличивает получаемый Алисой щит на 50% и снимает ограничение срабатывания Barrier of Ashes на 2 хода.'
		};
		if (getvalue == '+2') {
			document.querySelectorAll(".cost")[7].innerHTML = 'Стоимость: 72 SP'
			document.getElementsByClassName("skilldescr")[7].innerHTML = 'Накладывает на каждую куклу щит, поглощающий урон до 8% от максимального HP Алисы + 100% от ее DEF, увеличивает получаемый Алисой щит на 50% и снимает ограничение срабатывания Barrier of Ashes на 2 хода.';
		};
		if (getvalue == '+3') {
			document.querySelectorAll(".cost")[7].innerHTML = 'Стоимость: 72 SP'
			document.getElementsByClassName("skilldescr")[7].innerHTML = 'Накладывает на каждую куклу щит, поглощающий урон до 8% от максимального HP Алисы + 100% от ее DEF, увеличивает получаемый Алисой щит на 50% и снимает ограничение срабатывания Barrier of Ashes на 2 хода. Отменяет следующий эффект контроля, который будет применен к куклам (суммируется).';
		};
		if (getvalue == '+4') {
			document.querySelectorAll(".cost")[7].innerHTML = 'Стоимость: 64 SP'
			document.getElementsByClassName("skilldescr")[7].innerHTML = 'Накладывает на каждую куклу щит, поглощающий урон до 10% от максимального HP Алисы + 110% от ее DEF, увеличивает получаемый Алисой щит на 50% и снимает ограничение срабатывания Barrier of Ashes на 2 хода. Отменяет следующий эффект контроля, который будет применен к куклам (суммируется).';
		};
	}
});

