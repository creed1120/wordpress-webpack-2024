// Webpack Imports
import * as bootstrap from 'bootstrap';

(function () {
	'use strict';

	/**********************
	 * BS Trigger Alert
	 *********************/
	// const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
	// const appendAlert = (message, type) => {
	// const wrapper = document.createElement('div')
	// wrapper.innerHTML = [
	// 	`<div class="alert alert-${type} alert-dismissible" role="alert">`,
	// 	`   <div>${message}</div>`,
	// 	'   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
	// 	'</div>'
	// ].join('')

	// alertPlaceholder.append(wrapper)
	// }

	// const alertTrigger = document.getElementById('liveAlertBtn')
	// if (alertTrigger) {
	// alertTrigger.addEventListener('click', () => {
	// 	appendAlert('Nice, you triggered this alert message!', 'success')
	// })
	// }

	/**********************************************
	 * BS Focus input if Searchform is empty
	 **********************************************/
	[].forEach.call(document.querySelectorAll('.search-form'), (el) => {
		el.addEventListener('submit', function (e) {
			var search = el.querySelector('input');
			if (search.value.length < 1) {
				e.preventDefault();
				search.focus();
			}
		});
	});

	/****************
	 * BS Poppover
	 ****************/
	// Initialize Popovers: https://getbootstrap.com/docs/5.0/components/popovers
	var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
	var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
		return new bootstrap.Popover(popoverTriggerEl, {
			trigger: 'focus',
		});
	});

	/****************
	 * BS Tooltip
	 ****************/
	var tootipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
	var tooltipList = tootipTriggerList.map(function (tooltipTriggerEl) {
		return new bootstrap.Tooltip(tooltipTriggerEl);
	});
})();
