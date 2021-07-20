import './card-gallery.scss';

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

        // set initial values
        this.compElm = El;
        this.compWidth = El.offsetWidth;
        this.nextNavEl = El.querySelector('.card-gallery__nav--next');
        this.prevNavEl = El.querySelector('.card-gallery__nav--prev');
        this.slideContainerEl = El.querySelector('.card-gallery__items');
        this.slideCount = this.slideContainerEl.querySelectorAll('.card-gallery__item').length;

        // bind events
        this.nextNavEl.addEventListener('click', this.slide);
        this.prevNavEl.addEventListener('click', this.slide);

        // function inits
        this.disableNavigation();
        this.slideContainerEl.style.left = 0;
        this.slideContainerEl.style.width = this.slideCount * this.compWidth + 'px';
    }

    /**
     * @method
     * @desc changes slide when clicked on navigation items
     * @param { EventObj } event Event object
     * @returns null
     */
    slide = (event) => {
        const indexChange = event.target.classList.contains('card-gallery__nav--prev') ? -1 : 1;

        //
        event.stopPropagation();

        // do nothing if button is disabled
        if(event.target.classList.contains('card-gallery__nav--disabled')) {
            return;
        }

        this.activeIndex = (this.compElm?.dataset.active * 1 || 1) + indexChange;
        this.compElm.dataset.active = this.activeIndex;
        this.slideContainerEl.style.left = (this.activeIndex - 1) * this.compWidth * -1 + 'px';
        this.disableNavigation();
    }

    /**
     * @method
     * @desc disables navigation buttons based on current active index
     */
    disableNavigation = () => {
        this.prevNavEl.classList.toggle('card-gallery__nav--disabled', this.activeIndex <= 1);
        this.nextNavEl.classList.toggle('card-gallery__nav--disabled', this.activeIndex >= this.slideCount);
    }
}