var getacctitles = document.getElementsByClassName('acctitle');
// console.log(getacctitles); //HTMLCollection
var getactiveacctitles = document.querySelectorAll('.accordent');
// console.log(getactiveacctitles); //NodeList


for(var x = 0; x < getacctitles.length;x++){
	// console.log(x);
	// console.log(getacctitles[x]);

									// event   type
	getacctitles[x].addEventListener('click',function(e){
		// console.log('hay');

		// console.log(e);
		// console.log(e.target);
		// console.log(this);  //(only for regular function not use in arrow function -> (e)=>)

		this.classList.toggle('active');

		var getcontent = this.nextElementSibling;
		// console.log(getcontent);
		// console.log(getcontent.scrollHeight+"px");

		// getcontent.style.height = getcontent.scrollHeight+"px";

		if(getcontent.style.height){
			getcontent.style.height = null;  //beware can't set 0
		}else{
			getcontent.style.height = getcontent.scrollHeight+"px";
		}


	});


	if(getacctitles[0].classList.contains('active')){
		getactiveacctitles[0].style.height=getactiveacctitles[0].scrollHeight+"px";
	}
}
