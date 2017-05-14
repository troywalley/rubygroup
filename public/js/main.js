
// var modal = document.getElementById("modal");
// var blur = document.getElementById("shadow");
// var close = document.getElementById("close");

// setTimeout(function(){
// 	modal.style.display = 'inline-flex'; 
// 	blur.classList.add("blur");
// }, 500);

// 	close.addEventListener("click", function(){
// 	blur.classList.add("fadeoutBlur");
// 	blur.classList.remove("blur");
// 	modal.classList.add("fadeout");
	
// 	setTimeout(function(){
// 		modal.style.display = 'none'; 
// 	}, 1250);
// });

// window.addEventListener("keyup", listenKey);
// function listenKey(e) {
// 	if (e.keyCode == "27") {
// 		modal.classList.add("fadeout");
// 		blur.classList.add("fadeoutBlur");
// 		blur.classList.remove("blur");
		
// 		setTimeout(function(){
// 			modal.style.display = 'none'; 
// 	}, 1250);
		
// 	} else if (e.keyCode == "32") {
// 		modal.classList.remove("fadeout")
// 		blur.classList.remove("fadeoutBlur")
// 		modal.style.display = 'inline-flex';
// 		blur.classList.add("blur");
// 	}

// }

function dotSaver(){
this.dot=[];
this.menuList=[];
this.addEL=addEL;
this.loop=loop;
var obj=this;



function loop(){
var menuList=document.getElementsByClassName("menu-list")
var dot=document.getElementsByClassName("dot")
for(let i=0;i<menuList.length;i++){
	obj.dot.push(dot[i])
	obj.menuList.push(menuList[i])
}
}
function addEL(menuList,dot){
	console.log(obj)
for(let i=0;i<obj.menuList.length;i++){
		console.log("hi")
		let j=dot[i]
		menuList[i].addEventListener("mouseover", function(){
			addHoverClass(j)
		})
		menuList[i].addEventListener("mouseleave", function(){
			removeHoverClass(j)
		})
	}

}
function addHoverClass(j){
	
	j.classList.add("visible")
}
function removeHoverClass(j){
	j.classList.remove("visible")
}
}
var dotsaver= new dotSaver()
dotsaver.loop()
dotsaver.addEL(dotsaver.menuList,dotsaver.dot)

	console.log(dotsaver.menuList.length)
	


















