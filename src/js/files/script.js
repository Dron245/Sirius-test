/** @format */

// Подключение функционала "Чертоги Фрилансера"
import { isMobile } from './functions.js';
// Подключение списка активных модулей
import { flsModules } from './modules.js';

window.addEventListener('DOMContentLoaded', () => {
	document.addEventListener('click', documentActions);
	function documentActions(e) {
		const targetElement = e.target;
		function closePopup(id) {
			history.pushState('', document.title, window.location.pathname);
			document.documentElement.classList.remove('popup-show', 'lock');
			document.body.removeAttribute('style');
			targetElement.closest(`${id}`).classList.remove('popup_show');
			targetElement.closest(`${id}`).setAttribute('aria-hidden', 'false');
		}
		// console.log(targetElement);
		//Включаю/выключаю теги
		if (targetElement.closest('.tags__item')) {
			targetElement.closest('.tags__item').classList.toggle('_active');
		}
		//Открываю фильтры в мобилке
		if (targetElement.closest('.sort__button')) {
			document.querySelector('html').classList.add('_filter-active', 'lock');
		}
		//Закрываю фильтры в мобилке
		if (targetElement.closest('.filters__close')) {
			document.querySelector('html').classList.remove('_filter-active', 'lock');
		}
		//Закрываю модалку и добавлюя в корзину
		if (targetElement.closest('.popup__button')) {
			closePopup('#add');
			let valueQuanity = document.querySelector('#quantity');
			let value = Number(valueQuanity.innerHTML);
			valueQuanity.innerHTML = `${value + 1}`;
		}
		//Сбрасываю все чекбоксы
		if (targetElement.closest('.filters__reset')) {
			const checkboxes = targetElement.closest('aside').querySelectorAll('input[type=checkbox]')
			checkboxes.forEach(element => {
				element.checked = false;
			});
		}
	}
	// Обнуляю количество в размерной сетке
	document.addEventListener('afterPopupClose', function (e) {
		const currentPopup = e.detail.popup;
		const inputQuantity = currentPopup.previousOpen.element.querySelectorAll('input');
		inputQuantity.forEach((element) => {
			element.value = 0;
		});
	});
});
