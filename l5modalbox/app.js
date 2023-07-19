// GET UI
var getmodal = document.getElementById('signupmodal'),
	getbtnsignup = document.getElementById('btn-signup'),
	getbtnfullscreen = document.getElementById('btn-fullscreen'),
	getbtnclosescreen = document.getElementById('btn-closescreen'),
	getbtnclose = document.querySelector('.btn-close');



getbtnsignup.addEventListener('click',function(){
	getmodal.style.display = 'block';
});


getbtnclose.addEventListener('click',function(){
	getmodal.style.display = 'none';
});


window.onclick = function(e){
	// console.log(e.target);

	if(e.target === getmodal){
		getmodal.style.display = 'none';
	}
}

var getdocele = document.documentElement;

getbtnfullscreen.addEventListener('click',function(){

	if(getdocele.requestFullscreen){
		getdocele.requestFullscreen();
	}else if(getdocele.webkitRequestFullscreen){
		getdocele.webkitRequestFullscreen();
	}else if(getdocele.msRequestFullscreen){
		getdocele.msRequestFullscreen();
	}

	getbtnclosescreen.style.display='inline';
});


getbtnclosescreen.addEventListener('click',function(){

	if(document.exitFullscreen){
		document.exitFullscreen();
	}else if(document.webkitExitFullscreen){
		document.webkitExitFullscreen();
	}else if(document.msExitFullscreen){
		document.msExitFullscreen();
	}


	getbtnclosescreen.style.display='none';



});


