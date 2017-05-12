
var modal = document.getElementById("modal");
var blur = document.getElementById("shadow");
var close = document.getElementById("close");

setTimeout(function(){
	modal.style.display = 'inline-flex'; 
	blur.classList.add("blur");
}, 500);

	close.addEventListener("click", function(){
	blur.classList.add("fadeoutBlur");
	blur.classList.remove("blur");
	modal.classList.add("fadeout");
	
	setTimeout(function(){
		modal.style.display = 'none'; 
	}, 1250);
});

window.addEventListener("keyup", listenKey);
function listenKey(e) {
	if (e.keyCode == "27") {
		modal.classList.add("fadeout");
		blur.classList.add("fadeoutBlur");
		blur.classList.remove("blur");
		
		setTimeout(function(){
			modal.style.display = 'none'; 
	}, 1250);
		
	} else if (e.keyCode == "32") {
		modal.classList.remove("fadeout")
		blur.classList.remove("fadeoutBlur")
		modal.style.display = 'inline-flex';
		blur.classList.add("blur");
	}

}






















