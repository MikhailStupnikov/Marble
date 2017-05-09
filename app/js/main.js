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



// ======= МОДУЛЬ ОБРАТНОЙ СВЯЗИ =======
var Feedback = (function() {
	
	var _form = $('#send-msg'),
		_btn = $('#btn'),
		_popup = $('.popup'),
		_preloader = $('.popup-preloader'),
		_popupWindow = $('.popup-window'),
		_popupText = $('.popup-window-text'),
		_popupClose = $('.popup-close');

	function init() {
		_setUpListener();
	}

	function _setUpListener() {
		_form.on('submit', _checkForm);
		_popup.on('click', _closeWindow);
		_popupClose.on('click', _closeWindow);
	}

	function _checkForm(event) {
		event.preventDefault();

		var name = _form.find('[name="name"]').val().trim(),
			email = _form.find('[name="email"]').val().trim(),
			message = _form.find('[name="message"]').val().trim();

		_popup.show();
		_preloader.show();

		if ((name == '') || (email == '') || (message == '')) {
			_preloader.hide();
			_popupWindow.show();
			_popupText.html('Fields are not filled.');
		} else {
			return _sendRequest();
		}
	}

	function _closeWindow() {
		_popupWindow.hide();
		_popup.hide();
		_popupText.html('');
	}

	function _sendRequest() {
		var dataForm = _form.serialize();

		$.ajax({
			url: 'php/action.php',
			method: 'POST',
			data: dataForm,
			success: function() {
				_preloader.hide();
				_popupWindow.show();
				_popupText.html('Message sent.');
				_form[0].reset();
			},
			error: function() {
				_preloader.hide();
				_popupWindow.show();
				_popupText.html('Error sending.');
			}
		});
	}

	return {
		init: init
	};

})();



// ======= ИНИЦИАЛИЗАЦИЯ МОДУЛЕЙ =======
$(document).ready(function(){

	AdaptiveMenu.init();

	Feedback.init();

});