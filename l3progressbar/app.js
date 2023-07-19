var getdownloadbtn = document.querySelector('.download-btn');
var getprogressbar = document.querySelector('.progress-bar');
var seturl = "https://linkedin.com";

getdownloadbtn.addEventListener('click',function(){
	// console.log('hay i am working');

	var setwidth = 0;

	var setinv = setInterval(progressinc,100);

	function progressinc(){
		// console.log('hi');

		if(setwidth >= 100){
			clearInterval(setinv);
			setwidth = 0;

			// redirect
			window.location.href = seturl;
		}else{
			setwidth++;

			getprogressbar.style.width = `${setwidth}%`;

			getprogressbar.setAttribute('data-inc',`${setwidth}%`);
		}

		console.log(setwidth);
	}


});


// 31PG