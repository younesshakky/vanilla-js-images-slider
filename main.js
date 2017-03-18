
var prev = document.querySelector('.left-ctrl'),

		next = document.querySelector('.right-ctrl'),

		slides = document.querySelectorAll('.slider-item'),

		slidesWrapper = document.querySelector('.slides-wrapper'),

		slideWidth = 248,

		clicks = 0;


if (clicks == 0){
			prev.style.display = 'none';
}

next.onclick = function  () {
	for (i = 0; i < slides.length; i++){
		slides[i].style.transform = 'translateX(-' + slideWidth + 'px)';
		// console.log(slideWidth);
	}
	clicks++;
	slideWidth = slideWidth + 248;

	if(clicks >= slides.length - 2){
		slideWidth = null;
	}
	if(clicks >= 1){
			prev.style.display = 'block';

	}
}

prev.onmousedown =  function () {
	slideWidth = 0;
	clicks = 0;
	for (i = 0; i < slides.length; i++){
		slides[i].style.transform = 'translateX(' + slideWidth + 'px)';
	}
}

prev.onmouseup = function () {
	slideWidth = 233;
}

/*		if(clicks >= slides.length){
			next.style.display = 'none';
		}*/

// next.onclick = function(){
// 	moveLeft();
// }

// prev.onclick = function(){
// 	moveRight();
// }