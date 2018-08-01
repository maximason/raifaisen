(function(){

	"use strict";

	// MENU ITEM ACTIVATED

	var menu__item = document.getElementsByClassName('menu__item');
	for (var i=0; i<menu__item.length; i++) {
		console.log("menu_item", menu__item[i]);
	}

	menu__item[0].addEventListener( "click", function(e) {

		e.preventDefault();

		if (menu__item.classList.contains("menu__item") !== true) {
			menu__item.classList.add('menu__item_active');
		}
	});

})();