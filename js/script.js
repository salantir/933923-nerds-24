	var writeus = document.querySelector(".button-write-us");
	var popup = document.querySelector(".modal");
	var close = document.querySelector(".feedback-close");
	var login = popup.querySelector("[name=name]");
	var form = popup.querySelector("form");

      writeus.addEventListener("click", function (evt) {
        evt.preventDefault();
        popup.classList.add("modal-show");
		login.focus();
      });

      close.addEventListener("click", function (evt) {
        evt.preventDefault();
        popup.classList.remove("modal-show");
      });
	  
	  form.addEventListener("submit", function(evt) {
		 evt.preventDefault();
	  });