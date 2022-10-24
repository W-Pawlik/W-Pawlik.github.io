let activeSlideNumber = 1;
let arrowLeft = document.querySelector('.arrow-left');
let arrowRight = document.querySelector('.arrow-right');
let slide1 = document.querySelector('#slide1');
let slide2 = document.querySelector('#slide2');
let slide3 = document.querySelector('#slide3');
let slide4 = document.querySelector('#slide4');

let hideActiveSlide = () => {
    let activeElement = document.querySelector('.active');
    activeElement.classList.remove('active');
};

let showSlide = (slideNumber) => {
    hideActiveSlide();
    document.querySelector('#slide'+slideNumber).classList.add('active');
};

let changeToPrioviousSlide = () => {
    if(activeSlideNumber === 1) {
        activeSlideNumber = 4;
    }
    else {
        activeSlideNumber = activeSlideNumber - 1;
    }
    showSlide(activeSlideNumber);
};
arrowLeft.addEventListener('click', changeToPrioviousSlide);

let changeToNextSlide = () => {
    if(activeSlideNumber === 4) {
        activeSlideNumber = 1;
    }
    else {
        activeSlideNumber = activeSlideNumber + 1;
    }
    showSlide(activeSlideNumber);

};
arrowRight.addEventListener('click', changeToNextSlide);