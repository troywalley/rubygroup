
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

	
var carousel=document.getElementsByClassName("photo-container")[0]
var arrowRight=document.getElementsByClassName("arrow-right")[0]
var arrowLeft=document.getElementsByClassName("arrow-left")[0]
arrowLeft.addEventListener("click", photoBackward)
arrowRight.addEventListener("click", photoForward)
function carousels(){
	this.time=0;
	this.picArray=["baclava.jpg","bougatsa.jpg","catering.jpg","finikia.jpg","latte.jpg","parfait.jpg","tyropitas.jpg"]
	this.currentpic=1
	this.start=startTime
	var me=this;
	function startTime(){
		setTimeout(function(){
			carousel.style.backgroundImage="url('img/"+me.picArray[me.currentpic]+"')"
			me.time=0;
			if(me.currentpic===me.picArray.length-1){
				me.currentpic=0;
			}else{
		me.currentpic+=1;
	}
		startTime()
		},4000)

	}
}
var pics=new carousels();
pics.start();

function photoBackward(){
pics.time=0;
if(pics.currentpic===0){
		pics.currentpic=pics.picArray.length-1;
	}else{
		pics.currentpic-=1;
	}
	carousel.style.backgroundImage="url('img/"+pics.picArray[pics.currentpic]+"')"
}
function photoForward(){
pics.time=0;
if(pics.currentpic===pics.picArray.length-1){
		pics.currentpic=0;
	}else{
		pics.currentpic+=1;
	}
	carousel.style.backgroundImage="url('img/"+pics.picArray[pics.currentpic]+"')"
}




var modal = document.getElementById("modal");
var blur = document.getElementById("shadow");
var close = document.getElementById("close");

setTimeout(function(){
	modal.style.display = 'inline-flex'; 
	blur.classList.add("blur");
}, 3000);

// 	close.addEventListener("click", function(){
// 	blur.classList.add("fadeoutBlur");
// 	blur.classList.remove("blur");
// 	modal.classList.add("fadeout");
	
// 	setTimeout(function(){
// 		modal.style.display = 'none'; 
// 	}, 1250);
// });

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






















