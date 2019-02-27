class Carousel {
    constructor(carousel) {

        this.carousel = carousel;
        this.leftButton = this.carousel.querySelector('.left-button');
        this.rightButton = this.carousel.querySelector('.right-button');
        this.images = this.carousel.querySelectorAll('img');

        let carouselIndex = 0;
        this.carouselIndex = carouselIndex;
        this.images[carouselIndex].style.display = 'flex';

        this.leftButton.addEventListener('click', () => this.selectLeft(carouselIndex));
        this.rightButton.addEventListener('click', () => this.selectRight(carouselIndex));
    }


    selectLeft(index) {
        this.images[this.carouselIndex].style.display = 'none';
        if (this.carouselIndex <= 0) {
            this.carouselIndex = this.images.length
        }
        this.carouselIndex--;
        this.images[this.carouselIndex].style.display = 'flex';
        this.images[this.carouselIndex].classList.add('fade-in');

    }
    selectRight(index) {
        this.images[this.carouselIndex].style.display = 'none';
        if (this.carouselIndex >= this.images.length - 1) {
            this.carouselIndex = -1
        }
        this.carouselIndex++;
        this.images[this.carouselIndex].style.display = 'flex';
        this.images[this.carouselIndex].classList.add('fade-in');
    }


}

let carousel = document.querySelector('.carousel');
carousel = new Carousel(carousel);



