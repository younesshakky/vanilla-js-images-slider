
var prev = document.querySelector('.left-ctrl');
var next = document.querySelector('.right-ctrl');

var slides = document.querySelectorAll('.slider-item');

// var slidesWrapper = document.querySelector('.slides-wrapper');

var slideWidth = 233;




next.onclick = function  () {
	for (i = 0; i < slides.length; i++){
		slides[i].style.transform = 'translateX(' + slideWidth + 'px)';
		console.log(slideWidth);

	}
		slideWidth = slideWidth + 233;
}

prev.onclick =  function () {
	for (i = 0; i < slides.length; i++){
	slideWidth = 0;

		slides[i].style.transform = 'translateX(' + slideWidth + 'px)';
		console.log(slideWidth);

	}
		slideWidth = slideWidth - 233;
}


// next.onclick = function(){
// 	moveLeft();
// }

// prev.onclick = function(){
// 	moveRight();
// }