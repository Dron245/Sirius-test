// Подключение с node_modules
import * as noUiSlider from 'nouislider';

// Подключение стилей с scss/base/forms/range.scss
// в файле scss/forms/forms.scss

// Подключение стилей с node_modules
// import 'nouislider/dist/nouislider.css';

export function rangeInit() {
	const priceSlider = document.querySelector('#range');
	if (priceSlider) {
		noUiSlider.create(priceSlider, {
			start:  [86,100000],
			connect: [false, true, false],
			range: {
				'min': [0],
				'max': [180000]
			},
			
			format: wNumb({
				decimals: 0,
				thousand: ' '
			})
			
		});
		priceSlider.noUiSlider.on('update', function (values, handle) {
			if (handle) {
				document.querySelector('.filter__val-max').innerHTML = values[handle];
		  } else {
				document.querySelector('.filter__val-low').innerHTML = values[handle];
		  }
		})
	
		function setPriceValues() {
			let priceStartValue;
			let priceEndValue;
			if (priceStart.value != '') {
				priceStartValue = priceStart.value;
			}
			if (priceEnd.value != '') {
				priceEndValue = priceEnd.value;
			}
			priceSlider.noUiSlider.set([priceStartValue, priceEndValue]);
		}
	}
}
rangeInit();
