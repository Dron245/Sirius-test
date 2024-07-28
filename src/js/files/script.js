// Подключение функционала "Чертоги Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

window.addEventListener("DOMContentLoaded", () => {
	document.addEventListener("click", documentActions);
	function documentActions(e) {
		const targetElement = e.target;
		console.log(targetElement);
		if (targetElement.closest(".tags__item")) {
			targetElement.closest(".tags__item").classList.toggle("_active");
		}

		if (targetElement.closest('.sort__button')) {
			document.querySelector('html').classList.toggle('_filter-active')
			document.querySelector('html').classList.toggle('lock')
		}
		if (targetElement.closest('.filters__close')) {
			document.querySelector('html').classList.remove('_filter-active')
			document.querySelector('html').classList.remove('lock')
		}

	}

	document.addEventListener("afterPopupClose", function (e) {
		const currentPopup = e.detail.popup;
		const inputQuantity = currentPopup.previousOpen.element.querySelectorAll("input");
		inputQuantity.forEach((element) => {
			element.value = 0;
		});
	});
});
