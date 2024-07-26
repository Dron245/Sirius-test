// Подключение функционала "Чертоги Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

window.addEventListener("DOMContentLoaded", () => {
	document.addEventListener("click", documentActions);
	
	function documentActions(e) {
		const targetElement = e.target;
	}

	document.addEventListener("afterPopupClose", function (e) {
		// Попап
		const currentPopup = e.detail.popup;
		console.log(currentPopup.previousActiveElement);
		currentPopup.previousActiveElement.closest('.product').querySelector('h3').innerText('qweqwe')
		const currentProduct = currentPopup.previousActiveElement.closest('.product')
		currentProduct.querySelector('h3').innerText='qweqwe'
	});
})
