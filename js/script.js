let totalSlides = document.querySelectorAll('.slider-item').length;
let currentSlide = 0;

document.querySelector('.slider-width').style.width = 
	`calc(100vw * ${totalSlides})`;

function goPrev(){
	currentSlide--;
	if (currentSlide < 0) {
		currentSlide = totalSlides - 1;
	}
	updateMargin();

}

function goNext(){
	currentSlide++;
	if (currentSlide > (totalSlides - 1)) {
		currentSlide = 0;
	}
	updateMargin();
}

function updateMargin(){
	let sliderItem = document.querySelector('.slider-item').clientWidth;
	let newMargin = (currentSlide * sliderItem);
	document.querySelector('.slider-width').style.marginLeft = 
	`-${newMargin}px`;
}

function interval(){
	setInterval(goNext, 5000);
}

interval();


