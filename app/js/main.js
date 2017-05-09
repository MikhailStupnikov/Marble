// ======= МОДУЛЬ МЕНЮ =======
var AdaptiveMenu = (function() {

	var _menu = $('.nav-menu-list'),
		_trigger = $('.nav-menu-trigger');

	function init() {
		_setUpListener();
	}

	function _switchMenu(event) {
		event.preventDefault();
		_menu.slideToggle(500, function() {
			if ($(this).css('display') === 'none') {
				$(this).removeAttr('style');
			}
		});
	}

	function _setUpListener() {
		_trigger.on('click', _switchMenu);
	}

	return {
		init: init
	};

})();



// ======= ИНИЦИАЛИЗАЦИЯ МОДУЛЕЙ =======
$(document).ready(function(){

	AdaptiveMenu.init();

});