export default class CardGallery {
    compElm = null;
    activeIndex = 1;
    compWidth = null;
    nextNavEl = null;
    prevtNavEl = null;
    slideContainerEl = null;
    slideCount = null;

    constructor (El) {
        if(!El) {
            return;
        }

        // init values
        this.compElm = El;
        this.compWidth = El.offsetWidth;
        this.nextNavEl = El.querySelector('.card-gallery__nav--next');
        this.prevNavEl = El.querySelector('.card-gallery__nav--prev');
        this.slideContainerEl = El.querySelector('.card-gallery__items');
        this.slideCount = this.slideContainerEl.querySelectorAll('.card-gallery__item').length;

        // event bindings
        this.nextNavEl.addEventListener('click', this.slideNext);
        this.prevNavEl.addEventListener('click', this.slidePrev);

        // function inits
        this.disableNavigation();
        this.slideContainerEl.style.left = 0;
        this.slideContainerEl.style.width = this.slideCount * this.compWidth + 'px';
    }

    slideNext = () => {
        if(this.nextNavEl.classList.contains('card-gallery__nav--disabled')) {
            return;
        }
        this.activeIndex = (this.compElm?.dataset.active * 1 || 1) + 1;
        this.compElm.dataset.active = this.activeIndex;
        this.slideContainerEl.style.left = (this.activeIndex - 1) * this.compWidth * -1 + 'px';
        this.disableNavigation();
    }

    slidePrev = () => {
        if(this.prevNavEl.classList.contains('card-gallery__nav--disabled')) {
            return;
        }
        this.activeIndex = (this.compElm?.dataset.active * 1 || 1) - 1;
        this.compElm.dataset.active = this.activeIndex;
        this.slideContainerEl.style.left = (this.activeIndex - 1) * this.compWidth * -1 + 'px';
        this.disableNavigation();
    }

    disableNavigation = () => {
        if(this.activeIndex === 1) {
            this.prevNavEl.classList.add('card-gallery__nav--disabled');
        } else {
            this.prevNavEl.classList.remove('card-gallery__nav--disabled');
        }

        if(this.activeIndex >= this.slideCount) {
            this.nextNavEl.classList.add('card-gallery__nav--disabled');
        } else {
            this.nextNavEl.classList.remove('card-gallery__nav--disabled');
        }
    }
}