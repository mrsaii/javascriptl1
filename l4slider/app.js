var slides = document.getElementsByClassName('carousel-item');

 	// console.log(slides[1]);

var dots = document.querySelectorAll('.dot');

	// console.log(dots[0]);

var currslide = 1;


carousel(currslide);


document.getElementById('prev').addEventListener('click',function(){
	// console.log('i am prev');

	carousel(currslide -= 1);
});

document.getElementById('next').addEventListener('click',function(){
	// console.log('i am next');

	carousel(currslide += 1);
});


for(var q=0;q < dots.length; q++){
	dots[q].addEventListener('click',function(){
		// console.log(this.getAttribute('data-bs-slide-to'));
		currslide = this.getAttribute('data-bs-slide-to');
		// carousel(currslide = this.getAttribute('data-bs-slide-to'));   //-->(can go this way too)
		carousel(currslide);
	});
}


function carousel(slide){
	

	// hide all display
	for(var x=0; x < slides.length; x++){
		slides[x].style.display = "none";
	}


	// remove all active
	for(var y=0; y < dots.length; y++){
		// dots[y].className = "dot";
		// dots[y].className = dots[y].className.replace("active","");
		// dots[y].className = dots[y].className.replace(" active","");
		dots[y].classList.remove('active');
	}


	if(slide > slides.length){
		currslide = 1;
	}else if(slide < 1){
		currslide = slides.length;
	}

	// console.log('this is slide = ',currslide);
	// console.log('this is currslide = ',currslide);


	slides[currslide-1].style.display = "block";
	// dots[slide-1].className = "dot active";
	// dots[slide-1].className += ' active';
	dots[currslide-1].classList.add('active');
}



// 8SD