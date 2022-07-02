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
			document.getElementsByClassName("skilldescr")[0].innerHTML = 'Атакует противника физическим уроном, наносит 100% от ATK.'
		};
		if (getvalue == '+1') {
			document.getElementsByClassName("skilldescr")[0].innerHTML = 'Атакует противника физическим уроном, наносит 110% от ATK.'
		};
		if (getvalue == '+2') {
			document.getElementsByClassName("skilldescr")[0].innerHTML = 'Атакует противника физическим уроном, наносит 110% от ATK. Игнорирует 10% Защиты цели.';
		};
		if (getvalue == '+3') {
			document.getElementsByClassName("skilldescr")[0].innerHTML = 'Атакует противника физическим уроном, наносит 120% от ATK. Игнорирует 10% Защиты цели.';
		};
		if (getvalue == '+4') {
			document.getElementsByClassName("skilldescr")[0].innerHTML = 'Атакует противника физическим уроном, наносит 120% от ATK. Игнорирует 20% Защиты цели.';
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
			document.getElementsByClassName("skilldescr")[1].innerHTML = 'Увеличивает шанс критического удара Асуны на 20% и ATK на 5% на 3 хода.'
		};
		if (getvalue == '+1') {
			document.querySelectorAll(".cost")[1].innerHTML = 'Стоимость: 18 SP'
			document.getElementsByClassName("skilldescr")[1].innerHTML = 'Увеличивает шанс критического удара Асуны на 20% и ATK на 5% на 3 хода.'
		};
		if (getvalue == '+2') {
			document.querySelectorAll(".cost")[1].innerHTML = 'Стоимость: 18 SP'
			document.getElementsByClassName("skilldescr")[1].innerHTML = 'Увеличивает шанс критического удара Асуны на 20% и ATK на 10% на 3 хода.';
		};
		if (getvalue == '+3') {
			document.querySelectorAll(".cost")[1].innerHTML = 'Стоимость: 18 SP'
			document.getElementsByClassName("skilldescr")[1].innerHTML = 'Увеличивает шанс критического удара Асуны на 30% и ATK на 10% на 3 хода.';
		};
		if (getvalue == '+4') {
			document.querySelectorAll(".cost")[1].innerHTML = 'Стоимость: 16 SP'
			document.getElementsByClassName("skilldescr")[1].innerHTML = 'Увеличивает шанс критического удара Асуны на 30% и ATK на 15% на 3 хода.';
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
			document.getElementsByClassName("skilldescr")[2].innerHTML = 'Увеличивает шанс критического удара Асуны на 10%, плюс еще 10% при уровне HP выше 70%.'
		};
		if (getvalue == '+1') {
			document.querySelectorAll(".cost")[2].innerHTML = 'Стоимость: 0 SP'
			document.getElementsByClassName("skilldescr")[2].innerHTML = 'Увеличивает шанс критического удара Асуны на 10%, плюс еще 12% при уровне HP выше 70%.'
		};
		if (getvalue == '+2') {
			document.querySelectorAll(".cost")[2].innerHTML = 'Стоимость: 0 SP'
			document.getElementsByClassName("skilldescr")[2].innerHTML = 'Увеличивает шанс критического удара Асуны на 10%, плюс еще 15% при уровне HP выше 70%.';
		};
		if (getvalue == '+3') {
			document.querySelectorAll(".cost")[2].innerHTML = 'Стоимость: 0 SP'
			document.getElementsByClassName("skilldescr")[2].innerHTML = 'Увеличивает шанс критического удара Асуны на 10%, плюс еще 17% при уровне HP выше 70%.';
		};
		if (getvalue == '+4') {
			document.querySelectorAll(".cost")[2].innerHTML = 'Стоимость: 0 SP'
			document.getElementsByClassName("skilldescr")[2].innerHTML = 'Увеличивает шанс критического удара Асуны на 10%, плюс еще 20% при уровне HP выше 70%.';
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
			document.getElementsByClassName("skilldescr")[3].innerHTML = 'Атакует противника физическим уроном, нанося 300% от ATK. При критическом попадании Inevitable Finale игнорирует 50% DEF цели.'
		};
		if (getvalue == '+1') {
			document.querySelectorAll(".cost")[3].innerHTML = 'Стоимость: 72 SP'
			document.getElementsByClassName("skilldescr")[3].innerHTML = 'Атакует противника физическим уроном, нанося 300% от ATK. При критическом попадании Inevitable Finale игнорирует 50% DEF цели.'
		};
		if (getvalue == '+2') {
			document.querySelectorAll(".cost")[3].innerHTML = 'Стоимость: 72 SP'
			document.getElementsByClassName("skilldescr")[3].innerHTML = 'Атакует противника физическим уроном, нанося 330% от ATK. При критическом попадании Inevitable Finale игнорирует 50% DEF цели.';
		};
		if (getvalue == '+3') {
			document.querySelectorAll(".cost")[3].innerHTML = 'Стоимость: 72 SP'
			document.getElementsByClassName("skilldescr")[3].innerHTML = 'Атакует противника физическим уроном, нанося 330% от ATK. При критическом попадании Inevitable Finale игнорирует 50% DEF цели и дает 32 SP.';
		};
		if (getvalue == '+4') {
			document.querySelectorAll(".cost")[3].innerHTML = 'Стоимость: 64 SP'
			document.getElementsByClassName("skilldescr")[3].innerHTML = 'Атакует противника физическим уроном, нанося 360% от ATK. При критическом попадании Inevitable Finale игнорирует 50% DEF цели и дает 32 SP.';
		};
	}
});
$('.five div').on('click', function () {
	var getvalue = $(this).attr('value')
	if (document.getElementsByClassName('textbox')[4].value == getvalue || (document.getElementsByClassName('textbox')[4].value == '+0' && getvalue == '+')) {

	} else {
		document.getElementsByClassName('textbox')[4].value = getvalue;
		if (getvalue == '+') {
			document.getElementsByClassName("skilldescr")[4].innerHTML = 'Атакует противника в первом ряду физическим уроном, нанося 100% от ATK.'
		};
		if (getvalue == '+1') {
			document.getElementsByClassName("skilldescr")[4].innerHTML = 'Атакует противника в первом ряду физическим уроном, нанося 110% от ATK.'
		};
		if (getvalue == '+2') {
			document.getElementsByClassName("skilldescr")[4].innerHTML = 'Атакует противника в первом ряду физическим уроном, нанося 110% от ATK. Наносимый урон увеличивается на 20% против противников с <span class="tooltip shock" data-tooltip="В конце каждого хода наносит 2% от ATK атакующего за каждый стак Bleed. Суммируется.">Bleed</span>.';
		};
		if (getvalue == '+3') {
			document.getElementsByClassName("skilldescr")[4].innerHTML = 'Атакует противника в первом ряду физическим уроном, нанося 120% от ATK. Наносимый урон увеличивается на 20% против противников с <span class="tooltip shock" data-tooltip="В конце каждого хода наносит 2% от ATK атакующего за каждый стак Bleed. Суммируется.">Bleed</span>.';
		};
		if (getvalue == '+4') {
			document.getElementsByClassName("skilldescr")[4].innerHTML = 'Атакует противника в первом ряду физическим уроном, нанося 120% от ATK. Наносимый урон увеличивается на 40% против противников с <span class="tooltip shock" data-tooltip="В конце каждого хода наносит 2% от ATK атакующего за каждый стак Bleed. Суммируется.">Bleed</span>.';
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
			document.getElementsByClassName("skilldescr")[5].innerHTML = '<span>Атакует противника в первом ряду физическим уроном 2 раза, нанося 2 * 75% от ATK и увеличивая получаемый целью урон от <span class="tooltip shock" data-tooltip="В конце каждого хода наносит 2% от ATK атакующего за каждый стак Bleed. Суммируется.">Bleed</span> на 30% на 2 хода.</span>'
		};
		if (getvalue == '+1') {
			document.querySelectorAll(".cost")[5].innerHTML = 'Стоимость: 18 SP'
			document.getElementsByClassName("skilldescr")[5].innerHTML = '<span>Атакует противника в первом ряду физическим уроном 2 раза, нанося 2 * 75% от ATK и увеличивая получаемый целью урон от <span class="tooltip shock" data-tooltip="В конце каждого хода наносит 2% от ATK атакующего за каждый стак Bleed. Суммируется.">Bleed</span> на 30% на 2 хода.</span>'
		};
		if (getvalue == '+2') {
			document.querySelectorAll(".cost")[5].innerHTML = 'Стоимость: 18 SP'
			document.getElementsByClassName("skilldescr")[5].innerHTML = '<span>Атакует противника в первом ряду физическим уроном 2 раза, нанося 2 * 83% от ATK и увеличивая получаемый целью урон от <span class="tooltip shock" data-tooltip="В конце каждого хода наносит 2% от ATK атакующего за каждый стак Bleed. Суммируется.">Bleed</span> на 30% на 2 хода.</span>';
		};
		if (getvalue == '+3') {
			document.querySelectorAll(".cost")[5].innerHTML = 'Стоимость: 18 SP'
			document.getElementsByClassName("skilldescr")[5].innerHTML = '<span>Атакует противника в первом ряду физическим уроном 2 раза, нанося 2 * 83% от ATK и увеличивая получаемый целью урон от <span class="tooltip shock" data-tooltip="В конце каждого хода наносит 2% от ATK атакующего за каждый стак Bleed. Суммируется.">Bleed</span> на 60% на 2 хода.</span>';
		};
		if (getvalue == '+4') {
			document.querySelectorAll(".cost")[5].innerHTML = 'Стоимость: 16 SP'
			document.getElementsByClassName("skilldescr")[5].innerHTML = '<span>Атакует противника в первом ряду физическим уроном 2 раза, нанося 2 * 90% от ATK и увеличивая получаемый целью урон от <span class="tooltip shock" data-tooltip="В конце каждого хода наносит 2% от ATK атакующего за каждый стак Bleed. Суммируется.">Bleed</span> на 60% на 2 хода.</span>';
		};
	}
});
$('.seven div').on('click', function () {
	var getvalue = $(this).attr('value')
	if (document.getElementsByClassName('textbox')[6].value == getvalue || (document.getElementsByClassName('textbox')[6].value == '+0' && getvalue == '+')) {

	} else {
		document.getElementsByClassName('textbox')[6].value = getvalue;
		if (getvalue == '+') {
			document.querySelectorAll(".cost")[6].innerHTML = 'Стоимость: 30 SP'
			document.getElementsByClassName("skilldescr")[6].innerHTML = 'Уменьшает DEF противника на 20% на 2 хода.'
		};
		if (getvalue == '+1') {
			document.querySelectorAll(".cost")[6].innerHTML = 'Стоимость: 26 SP'
			document.getElementsByClassName("skilldescr")[6].innerHTML = 'Уменьшает DEF противника на 20% на 2 хода.'
		};
		if (getvalue == '+2') {
			document.querySelectorAll(".cost")[6].innerHTML = 'Стоимость: 26 SP'
			document.getElementsByClassName("skilldescr")[6].innerHTML = 'Уменьшает DEF противника на 30% на 2 хода.';
		};
		if (getvalue == '+3') {
			document.querySelectorAll(".cost")[6].innerHTML = 'Стоимость: 26 SP'
			document.getElementsByClassName("skilldescr")[6].innerHTML = 'Уменьшает DEF противника на 30% на 2 хода. Снимает с цели 1 положительный эффект.';
		};
		if (getvalue == '+4') {
			document.querySelectorAll(".cost")[6].innerHTML = 'Стоимость: 24 SP'
			document.getElementsByClassName("skilldescr")[6].innerHTML = 'Уменьшает DEF противника на 40% на 2 хода. Снимает с цели 1 положительный эффект.';
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
			document.getElementsByClassName("skilldescr")[7].innerHTML = 'Атакует противника в первом ряду физическим уроном, нанося 300% от ATK и накладывает <span class="tooltip chill" data-tooltip="Снижает DEF на 2% за стак Кровотечения, но не более чем на 30%.">Mutilation</span> на 2 хода.'
		};
		if (getvalue == '+1') {
			document.querySelectorAll(".cost")[7].innerHTML = 'Стоимость: 72 SP'
			document.getElementsByClassName("skilldescr")[7].innerHTML = 'Атакует противника в первом ряду физическим уроном, нанося 300% от ATK и накладывает <span class="tooltip chill" data-tooltip="Снижает DEF на 2% за стак Кровотечения, но не более чем на 30%.">Mutilation</span> на 2 хода.'
		};
		if (getvalue == '+2') {
			document.querySelectorAll(".cost")[7].innerHTML = 'Стоимость: 72 SP'
			document.getElementsByClassName("skilldescr")[7].innerHTML = 'Атакует противника в первом ряду физическим уроном, нанося 330% от ATK и накладывает <span class="tooltip chill" data-tooltip="Снижает DEF на 2% за стак Кровотечения, но не более чем на 30%.">Mutilation</span> на 2 хода.';
		};
		if (getvalue == '+3') {
			document.querySelectorAll(".cost")[7].innerHTML = 'Стоимость: 72 SP'
			document.getElementsByClassName("skilldescr")[7].innerHTML = 'Атакует противника в первом ряду физическим уроном, нанося 330% от ATK и накладывает <span class="tooltip chill" data-tooltip="Снижает DEF на 2% за стак Кровотечения, но не более чем на 30%.">Mutilation</span> на 2 хода. Увеличивает урон на 1% за каждый стак <span class="tooltip shock" data-tooltip="В конце каждого хода наносит 2% от ATK атакующего за каждый стак Bleed. Суммируется.">Bleed</span> на цели, максимум на 40%.';
		};
		if (getvalue == '+4') {
			document.querySelectorAll(".cost")[7].innerHTML = 'Стоимость: 64 SP'
			document.getElementsByClassName("skilldescr")[7].innerHTML = 'Атакует противника в первом ряду физическим уроном, нанося 360% от ATK и накладывает <span class="tooltip chill" data-tooltip="Снижает DEF на 2% за стак Кровотечения, но не более чем на 30%.">Mutilation</span> на 2 хода. Увеличивает урон на 1% за каждый стак <span class="tooltip shock" data-tooltip="В конце каждого хода наносит 2% от ATK атакующего за каждый стак Bleed. Суммируется.">Bleed</span> на цели, максимум на 40%.';
		};
	}
});

