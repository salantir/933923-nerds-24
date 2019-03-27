	var writeus = document.querySelector(".button-write-us");
	var popup = document.querySelector(".modal");
	var close = document.querySelector(".feedback-close");
	var login = popup.querySelector("[name=name]");
	var form = popup.querySelector("form");

      writeus.addEventListener("click", function (evt) {
        evt.preventDefault();
        popup.classList.add("modal-show");
		popup.classList.remove("modal-error");
		login.focus();
      });

      close.addEventListener("click", function (evt) {
        evt.preventDefault();
        popup.classList.remove("modal-show");
      });
	  
	  form.addEventListener("submit", function(evt) {
		 evt.preventDefault();
		 popup.classList.add("modal-error");
	  });
	  
	  window.addEventListener("keydown", function (evt) {
		if (evt.keyCode === 27) {
			evt.preventDefault();
		if (popup.classList.contains("modal-show")) {
			popup.classList.remove("modal-show");
			popup.classList.remove("modal-error");
		  }	
		}
	  });