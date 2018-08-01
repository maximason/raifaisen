(function() {

  "use strict";

  // BURGER
  var burger_button = document.getElementById("burger");
  var menu = document.getElementsByClassName('menu')[0];
  var page = document.getElementsByClassName('page')[0];
  // console.log("menu", menu );
  //console.log("page",page);

	burger_button.addEventListener( "click", function(e) {
	  
	  e.preventDefault();

	  if(burger_button.classList.contains("burger_active") === true) { // is close
	  	burger_button.classList.remove("burger_active");
	  	menu.classList.remove('menu_opened');
	  	page.classList.remove('page_close');
  	}else{// is opened
  		burger_button.classList.add("burger_active");
  		menu.classList.add('menu_opened');
  		page.classList.add('page_close');
  	}

	});

}) ();