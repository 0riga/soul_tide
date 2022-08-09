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
			document.getElementsByClassName("skilldescr")[0].innerHTML = 'Атакует противника атрибутом Тени, наносит 100% от ATK.'
		};
		if (getvalue == '+1') {
			document.getElementsByClassName("skilldescr")[0].innerHTML = 'Атакует противника атрибутом Тени, наносит 110% от ATK.'
		};
		if (getvalue == '+2') {
			document.getElementsByClassName("skilldescr")[0].innerHTML = 'Атакует противника атрибутом Тени, наносит 110% от ATK. С вероятностью 50% наносит 1 стак <span class="tooltip eclipse" data-tooltip="Увеличивает получаемый урон на 4%. Складывается до 10 раз.">Eclipse</span>.';
		};
		if (getvalue == '+3') {
			document.getElementsByClassName("skilldescr")[0].innerHTML = 'Атакует противника атрибутом Тени, наносит 120% от ATK. С вероятностью 50% наносит 1 стак <span class="tooltip eclipse" data-tooltip="Увеличивает получаемый урон на 4%. Складывается до 10 раз.">Eclipse</span>.';
		};
		if (getvalue == '+4') {
			document.getElementsByClassName("skilldescr")[0].innerHTML = 'Атакует противника атрибутом Тени, наносит 120% от ATK. С вероятностью 100% наносит 1 стак <span class="tooltip eclipse" data-tooltip="Увеличивает получаемый урон на 4%. Складывается до 10 раз.">Eclipse</span>.';
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
			document.getElementsByClassName("skilldescr")[1].innerHTML = 'Атакует противника атрибутом Тени 2 раза, нанося 2 * 75% от ATK и снижает ATK цели на 10% на 2 хода.';
		};
		if (getvalue == '+1') {
			document.querySelectorAll(".cost")[1].innerHTML = 'Стоимость: 18 SP'
			document.getElementsByClassName("skilldescr")[1].innerHTML = 'Атакует противника атрибутом Тени 2 раза, нанося 2 * 75% от ATK и снижает ATK цели на 10% на 2 хода.';
		};
		if (getvalue == '+2') {
			document.querySelectorAll(".cost")[1].innerHTML = 'Стоимость: 18 SP'
			document.getElementsByClassName("skilldescr")[1].innerHTML = 'Атакует противника атрибутом Тени 2 раза, нанося 2 * 83% от ATK и снижает ATK цели на 10% на 2 хода.';
		};
		if (getvalue == '+3') {
			document.querySelectorAll(".cost")[1].innerHTML = 'Стоимость: 18 SP'
			document.getElementsByClassName("skilldescr")[1].innerHTML = 'Атакует противника атрибутом Тени 2 раза, нанося 2 * 83% от ATK и снижает ATK цели на 15% на 2 хода.';
		};
		if (getvalue == '+4') {
			document.querySelectorAll(".cost")[1].innerHTML = 'Стоимость: 16 SP'
			document.getElementsByClassName("skilldescr")[1].innerHTML = 'Атакует противника атрибутом Тени 2 раза, нанося 2 * 90% от ATK и снижает ATK цели на 15% на 2 хода.';
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
			document.getElementsByClassName("skilldescr")[2].innerHTML = 'Атакует противника атрибутом Тени, наносит 175% от АТК и увеличивает получаемый целью урон атрибута Тени на 10% на 2 хода.'
		};
		if (getvalue == '+1') {
			document.querySelectorAll(".cost")[2].innerHTML = 'Стоимость: 26 SP'
			document.getElementsByClassName("skilldescr")[2].innerHTML = 'Атакует противника атрибутом Тени, наносит 175% от АТК и увеличивает получаемый целью урон атрибута Тени на 10% на 2 хода.'
		};
		if (getvalue == '+2') {
			document.querySelectorAll(".cost")[2].innerHTML = 'Стоимость: 26 SP'
			document.getElementsByClassName("skilldescr")[2].innerHTML = 'Атакует противника атрибутом Тени, наносит 195% от АТК и увеличивает получаемый целью урон атрибута Тени на 10% на 2 хода.';
		};
		if (getvalue == '+3') {
			document.querySelectorAll(".cost")[2].innerHTML = 'Стоимость: 26 SP'
			document.getElementsByClassName("skilldescr")[2].innerHTML = 'Атакует противника атрибутом Тени, наносит 195% от АТК и увеличивает получаемый целью урон атрибута Тени на 15% на 2 хода.';
		};
		if (getvalue == '+4') {
			document.querySelectorAll(".cost")[2].innerHTML = 'Стоимость: 24 SP'
			document.getElementsByClassName("skilldescr")[2].innerHTML = 'Атакует противника атрибутом Тени, наносит 210% от АТК и увеличивает получаемый целью урон атрибута Тени на 15% на 2 хода.';
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
			document.getElementsByClassName("skilldescr")[3].innerHTML = 'Атакует противника атрибутом Тени, нанося 300% от ATK и накладывает <span class="tooltip aphotic" data-tooltip="В конце хода противник получает доп урон равный 10% суммарного урона Тьмой полученного за ход. Урон понижается на 5% за каждый удар, при нанесении более 4 ударов за ход.">Aphotic</span>.'
		};
		if (getvalue == '+1') {
			document.querySelectorAll(".cost")[3].innerHTML = 'Стоимость: 72 SP'
			document.getElementsByClassName("skilldescr")[3].innerHTML = 'Атакует противника атрибутом Тени, нанося 300% от ATK и накладывает <span class="tooltip aphotic" data-tooltip="В конце хода противник получает доп урон равный 10% суммарного урона Тьмой полученного за ход. Урон понижается на 5% за каждый удар, при нанесении более 4 ударов за ход.">Aphotic</span>.'
		};
		if (getvalue == '+2') {
			document.querySelectorAll(".cost")[3].innerHTML = 'Стоимость: 72 SP'
			document.getElementsByClassName("skilldescr")[3].innerHTML = 'Атакует противника атрибутом Тени, нанося 330% от ATK и накладывает <span class="tooltip aphotic" data-tooltip="В конце хода противник получает доп урон равный 10% суммарного урона Тьмой полученного за ход. Урон понижается на 5% за каждый удар, при нанесении более 4 ударов за ход.">Aphotic</span>.';
		};
		if (getvalue == '+3') {
			document.querySelectorAll(".cost")[3].innerHTML = 'Стоимость: 72 SP'
			document.getElementsByClassName("skilldescr")[3].innerHTML = 'Атакует противника атрибутом Тени, нанося 330% от ATK и накладывает <span class="tooltip aphotic" data-tooltip="В конце хода противник получает доп урон равный 20% суммарного урона Тьмой полученного за ход. Урон понижается на 5% за каждый удар, при нанесении более 6 ударов за ход.">Aphotic</span>. Увеличивается доп урон Aphotic до 20% и количество ударов до 6.';
		};
		if (getvalue == '+4') {
			document.querySelectorAll(".cost")[3].innerHTML = 'Стоимость: 64 SP'
			document.getElementsByClassName("skilldescr")[3].innerHTML = 'Атакует противника атрибутом Тени, нанося 360% от ATK и накладывает <span class="tooltip aphotic" data-tooltip="В конце хода противник получает доп урон равный 20% суммарного урона Тьмой полученного за ход. Урон понижается на 5% за каждый удар, при нанесении более 6 ударов за ход.">Aphotic</span>. Увеличивается доп урон Aphotic до 20% и количество ударов до 6.';
		};
	}
});
$('.five div').on('click', function () {
	var getvalue = $(this).attr('value')
	if (document.getElementsByClassName('textbox')[4].value == getvalue || (document.getElementsByClassName('textbox')[4].value == '+0' && getvalue == '+')) {

	} else {
		document.getElementsByClassName('textbox')[4].value = getvalue;
		if (getvalue == '+') {
			document.getElementsByClassName("skilldescr")[4].innerHTML = 'Лечит куклу на 60% от ATK.'
		};
		if (getvalue == '+1') {
			document.getElementsByClassName("skilldescr")[4].innerHTML = 'Лечит куклу на 65% от ATK.'
		};
		if (getvalue == '+2') {
			document.getElementsByClassName("skilldescr")[4].innerHTML = 'Лечит куклу на 65% от ATK. Дополнительно лечит куклу с наименьшим количеством HP в размере 15% от ATK.';
		};
		if (getvalue == '+3') {
			document.getElementsByClassName("skilldescr")[4].innerHTML = 'Лечит куклу на 70% от ATK. Дополнительно лечит куклу с наименьшим количеством HP в размере 15% от ATK.';
		};
		if (getvalue == '+4') {
			document.getElementsByClassName("skilldescr")[4].innerHTML = 'Лечит куклу на 70% от ATK. Дополнительно лечит куклу с наименьшим количеством HP в размере 25% от ATK.';
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
			document.getElementsByClassName("skilldescr")[5].innerHTML = 'Атакует противников в первом ряду атрибутом холода, нанося 90% от ATK и увеличивает наносимый отрядом урон атрибута холода на 10% на 2 хода.'
		};
		if (getvalue == '+1') {
			document.querySelectorAll(".cost")[5].innerHTML = 'Стоимость: 18 SP'
			document.getElementsByClassName("skilldescr")[5].innerHTML = 'Атакует противников в первом ряду атрибутом холода, нанося 90% от ATK и увеличивает наносимый отрядом урон атрибута холода на 10% на 2 хода.'
		};
		if (getvalue == '+2') {
			document.querySelectorAll(".cost")[5].innerHTML = 'Стоимость: 18 SP'
			document.getElementsByClassName("skilldescr")[5].innerHTML = 'Атакует противников в первом ряду атрибутом холода, нанося 100% от ATK и увеличивает наносимый отрядом урон атрибута холода на 10% на 2 хода.';
		};
		if (getvalue == '+3') {
			document.querySelectorAll(".cost")[5].innerHTML = 'Стоимость: 18 SP'
			document.getElementsByClassName("skilldescr")[5].innerHTML = 'Атакует противников в первом ряду атрибутом холода, нанося 100% от ATK и увеличивает наносимый отрядом урон атрибута холода на 15% на 2 хода.';
		};
		if (getvalue == '+4') {
			document.querySelectorAll(".cost")[5].innerHTML = 'Стоимость: 16 SP'
			document.getElementsByClassName("skilldescr")[5].innerHTML = 'Атакует противников в первом ряду атрибутом холода, нанося 110% от ATK и увеличивает наносимый отрядом урон атрибута холода на 15% на 2 хода.';
		};
	}
});
$('.seven div').on('click', function () {
	var getvalue = $(this).attr('value')
	if (document.getElementsByClassName('textbox')[6].value == getvalue || (document.getElementsByClassName('textbox')[6].value == '+0' && getvalue == '+')) {

	} else {
		document.getElementsByClassName('textbox')[6].value = getvalue;
		if (getvalue == '+') {
			document.querySelectorAll(".cost")[6].innerHTML = 'Стоимость: 40 SP'
			document.getElementsByClassName("skilldescr")[6].innerHTML = 'Лечит отряд на 55% от ATK и увеличивает лечение на 5% за каждого противника с <span class="tooltip freeze" data-tooltip="Невозможно действовать. Увеличивает получаемый урон на 10%.">Freeze</span>.'
		};
		if (getvalue == '+1') {
			document.querySelectorAll(".cost")[6].innerHTML = 'Стоимость: 36 SP'
			document.getElementsByClassName("skilldescr")[6].innerHTML = 'Лечит отряд на 55% от ATK и увеличивает лечение на 5% за каждого противника с <span class="tooltip freeze" data-tooltip="Невозможно действовать. Увеличивает получаемый урон на 10%.">Freeze</span>.'
		};
		if (getvalue == '+2') {
			document.querySelectorAll(".cost")[6].innerHTML = 'Стоимость: 36 SP'
			document.getElementsByClassName("skilldescr")[6].innerHTML = 'Лечит отряд на 60% от ATK и увеличивает лечение на 5% за каждого противника с <span class="tooltip freeze" data-tooltip="Невозможно действовать. Увеличивает получаемый урон на 10%.">Freeze</span>.';
		};
		if (getvalue == '+3') {
			document.querySelectorAll(".cost")[6].innerHTML = 'Стоимость: 36 SP'
			document.getElementsByClassName("skilldescr")[6].innerHTML = 'Лечит отряд на 60% от ATK и увеличивает лечение на 10% за каждого противника с <span class="tooltip freeze" data-tooltip="Невозможно действовать. Увеличивает получаемый урон на 10%.">Freeze</span>.';
		};
		if (getvalue == '+4') {
			document.querySelectorAll(".cost")[6].innerHTML = 'Стоимость: 32 SP'
			document.getElementsByClassName("skilldescr")[6].innerHTML = 'Лечит отряд на 65% от ATK и увеличивает лечение на 10% за каждого противника с <span class="tooltip freeze" data-tooltip="Невозможно действовать. Увеличивает получаемый урон на 10%.">Freeze</span>.';
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
			document.getElementsByClassName("skilldescr")[7].innerHTML = 'Покрывает все поле <span class="tooltip chill" data-tooltip="Только одна аура может одновременно быть на поле.">Ice Aura</span> на 2 хода. Во время Ice Aura, когда Кукла атакует, то получает <span class="tooltip fluffice" data-tooltip="Невозможно действовать. Нельза отразить и снять очищением.">Fluff Ice</span> на 1 ход, а враг получает доп. урон атрибутом холода в размере 15% от АТК Инори. Когда отряд наносит урон атрибутом холода, накладывает на врага <span class="tooltip freeze" data-tooltip="Невозможно действовать. Увеличивает получаемый урон на 10%.">Freeze</span> на 1 ход с вероятностью в 50%.'
		};
		if (getvalue == '+1') {
			document.querySelectorAll(".cost")[7].innerHTML = 'Стоимость: 72 SP'
			document.getElementsByClassName("skilldescr")[7].innerHTML = 'Покрывает все поле <span class="tooltip chill" data-tooltip="Только одна аура может одновременно быть на поле.">Ice Aura</span> на 2 хода. Во время Ice Aura, когда Кукла атакует, то получает <span class="tooltip fluffice" data-tooltip="Невозможно действовать. Нельза отразить и снять очищением.">Fluff Ice</span> на 1 ход, а враг получает доп. урон атрибутом холода в размере 15% от АТК Инори. Когда отряд наносит урон атрибутом холода, накладывает на врага <span class="tooltip freeze" data-tooltip="Невозможно действовать. Увеличивает получаемый урон на 10%.">Freeze</span> на 1 ход с вероятностью в 50%.'
		};
		if (getvalue == '+2') {
			document.querySelectorAll(".cost")[7].innerHTML = 'Стоимость: 72 SP'
			document.getElementsByClassName("skilldescr")[7].innerHTML = 'Покрывает все поле <span class="tooltip chill" data-tooltip="Только одна аура может одновременно быть на поле.">Ice Aura</span> на 2 хода. Во время Ice Aura, когда Кукла атакует, то получает <span class="tooltip fluffice" data-tooltip="Невозможно действовать. Нельза отразить и снять очищением.">Fluff Ice</span> на 1 ход, а враг получает доп. урон атрибутом холода в размере 22% от АТК Инори. Когда отряд наносит урон атрибутом холода, накладывает на врага <span class="tooltip freeze" data-tooltip="Невозможно действовать. Увеличивает получаемый урон на 10%.">Freeze</span> на 1 ход с вероятностью в 50%.';
		};
		if (getvalue == '+3') {
			document.querySelectorAll(".cost")[7].innerHTML = 'Стоимость: 72 SP'
			document.getElementsByClassName("skilldescr")[7].innerHTML = 'Покрывает все поле <span class="tooltip chill" data-tooltip="Только одна аура может одновременно быть на поле.">Ice Aura</span> на 2 хода. Во время Ice Aura, когда Кукла атакует, то получает <span class="tooltip fluffice_adv" data-tooltip="Невозможно действовать. Нельза отразить и снять очищением. Уменьшает получаемый урон на 10%.">Fluff Ice</span> на 1 ход, а враг получает доп. урон атрибутом холода в размере 22% от АТК Инори. Когда отряд наносит урон атрибутом холода, накладывает на врага <span class="tooltip freeze" data-tooltip="Невозможно действовать. Увеличивает получаемый урон на 10%.">Freeze</span> на 1 ход с вероятностью в 50%. Fluff Ice дополнительно уменьшает получаемый урон на 10%.';
		};
		if (getvalue == '+4') {
			document.querySelectorAll(".cost")[7].innerHTML = 'Стоимость: 64 SP'
			document.getElementsByClassName("skilldescr")[7].innerHTML = 'Покрывает все поле <span class="tooltip chill" data-tooltip="Только одна аура может одновременно быть на поле.">Ice Aura</span> на 2 хода. Во время Ice Aura, когда Кукла атакует, то получает <span class="tooltip fluffice_adv" data-tooltip="Невозможно действовать. Нельза отразить и снять очищением. Уменьшает получаемый урон на 10%.">Fluff Ice</span> на 1 ход, а враг получает доп. урон атрибутом холода в размере 30% от АТК Инори. Когда отряд наносит урон атрибутом холода, накладывает на врага <span class="tooltip freeze" data-tooltip="Невозможно действовать. Увеличивает получаемый урон на 10%.">Freeze</span> на 1 ход с вероятностью в 50%. Fluff Ice дополнительно уменьшает получаемый урон на 10%.';
		};
	}
});

