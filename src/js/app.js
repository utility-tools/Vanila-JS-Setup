// components
import Accordion from "./components/accordion.js";
import CardGallery from './components/card-gallery.js';

// Utils
import mapComponent from "./utils/map-comp.js";

// Component Mapping
const compMapping = {
    'accordion': Accordion,
    'card-gallery': CardGallery
};

// Init Components
document.addEventListener('DOMContentLoaded', function() {
    const componentElms = document.querySelectorAll('[data-comp]');

    //
    componentElms.forEach(elm => {
        const compName = elm.dataset.comp;
        const component = compMapping[compName];

        mapComponent(elm, component);
    });
});