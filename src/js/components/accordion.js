/**
 * @class Accordion
 * @desc Accordion component class
 */
export default class Accordion {
    CompElm = null;
    Items = null;
    Triggers = null;
    MultipleEnabled = false;
    ActiveClass = 'accordion__item--active';

    constructor(El) {
        this.CompElm = El;
        this.Items = El.querySelectorAll('.accordion__item');
        this.MultipleEnabled = El.dataset.multiple;
        this.ActiveClass = El.dataset.activeClass || this.ActiveClass;

        // Bind Events
        this.Items.forEach(item => item.querySelector('.accordion__item-title').addEventListener('click', this.toggleItem));
    }

    /**
     * @method
     * @desc toggle Accordion Item when clicked
     * @param {Event} event 
     */
    toggleItem = (event) => {
        event.stopPropagation();
        const accItem = event.target.parentNode;

        // toggle current item
        accItem.classList.toggle(this.ActiveClass);

        // hide others
        if(!this.MultipleEnabled) {
            this.hideSiblings(accItem);
        }
    }

    hideSiblings(currentItem) {
        Array.from(currentItem.parentElement.children).filter(el => {
            if(el.classList.contains('accordion__item') && el !== currentItem) {
                el.classList.remove(this.ActiveClass);
            }
        });
    }
}
