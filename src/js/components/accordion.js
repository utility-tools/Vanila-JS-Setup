/**
 * @class Accordion
 * @desc Accordion component class
 */
export default class Accordion {
    compElm = null;
    items = null;
    triggers = null;
    isMultipleEnabled = false;
    activeClass = 'accordion__item--active';

    /**
     * @constructor
     * @param { Node } El 
     */
    constructor(El) {
        if(!El) {
            return;
        }

        this.compElm = El;
        this.items = El.querySelectorAll('.accordion__item');
        this.isMultipleEnabled = El.dataset.multiple;
        this.activeClass = El.dataset.activeClass || this.activeClass;
        this.triggers = El.querySelectorAll('.accordion__item-title');

        // Bind Events
        this.triggers.forEach(trigger => trigger.addEventListener('click', this.toggleItem));
    }

    /**
     * @method
     * @desc toggle Accordion Item when clicked
     * @param { Event } event 
     */
    toggleItem = (event) => {
        event.stopPropagation();
        const accItem = event.target.parentNode;

        // toggle current item
        accItem.classList.toggle(this.activeClass);

        // hide others
        if(!this.isMultipleEnabled) {
            this.hideSiblings(accItem);
        }
    }

    /**
     * @method
     * @desc hides other accordion-items
     * @param { Node } currentItem 
     */
    hideSiblings(currentItem) {
        const allItems = [...currentItem.parentElement.children];

        allItems.forEach(el => this.isSiblingItem(el, currentItem) && el.classList.remove(this.activeClass));
    }

    /**
     * @method
     * @desc finds out if passedItem is sibling of current Item
     * @param {Node} el 
     * @param {NodeList} currentItem 
     * @returns {boolean} isSibling
     */
    isSiblingItem(el, currentItem) {
        return el.classList.contains('accordion__item') && el !== currentItem;
    }
}
