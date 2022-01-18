let slider = document.querySelector(".slider");
let items = slider.querySelectorAll(".slider__item");
let btnPrew = slider.querySelector(".slider__link--prew");
let btnNext = slider.querySelector(".slider__link--next");


let active = function() {

}
let nextSlide = function() {
    for (let i = 0; i < items.length; i++) {
        if (items[i].classList.contains('slider__item--active')) {
            items[i].classList.remove('slider__item--active');
            if (i == items.length - 1) {
                items[0].classList.add('slider__item--active');
            } else {
                items[i + 1].classList.add('slider__item--active');
            }
            i = items.length;
        }

    }
}
let PrewSlide = function() {
    for (let i = 0; i < items.length; i++) {
        if (items[i].classList.contains('slider__item--active')) {
            items[i].classList.remove('slider__item--active');
            if (i == 0) {
                items[items.length - 1].classList.add('slider__item--active');
            } else {
                items[i - 1].classList.add('slider__item--active');
            }
            i = items.length;
        }

    }

}

btnNext.addEventListener('click', nextSlide);
btnPrew.addEventListener('click', PrewSlide);