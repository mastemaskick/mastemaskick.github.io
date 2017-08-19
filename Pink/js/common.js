// *** Создание слайдера в блоке "отзывы" ***

var slideIndex=1;
showSlides(slideIndex);

function plusSlides(n){
	showSlides(slideIndex += n);
}

function currentSlide(n){
	showSlides(slideIndex = n);
}

function showSlides(n){
	var i;
	var slides = document.getElementsByClassName("review");
	var dots = document.getElementsByClassName("dot");

	if(n > slides.length){
		slideIndex = 1;
	}
	if(n < 1){
		slideIndex = slides.length;
	}
	for(i=0; i<slides.length; i++){
		slides[i].style.display = "none";
	}
	for(i=0; i < dots.length; i++){
		dots[i].className = dots[i].className.replace("active","");
	}
	 slides[slideIndex-1].style.display = "block";
	 dots[slideIndex-1].className+= " active";
}

// *** Создание рабочей toggle-кнопки ***

var toggler = document.querySelector("#toggler");
var header = document.querySelector(".page-header");
var menu = document.querySelector(".main-menu");


toggler.onclick = function() {
    toggler.classList.toggle('page-header__toggle--opened');
    menu.classList.toggle('main-menu--opened');
    header.classList.toggle('page-header--opened');
};


document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1"></' + 'script>')