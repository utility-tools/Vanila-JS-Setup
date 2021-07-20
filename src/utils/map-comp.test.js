import mapComponent from './map-comp';
import { JSDOM } from 'jsdom';

class DummyComponent {
    constructor () {
        return null;
    }
}

const dummyHtml = new JSDOM(`
    <div class="accordion" data-comp="accordion" data-multiple="true" data-active-class="accordion--active">
        <h2 class="accordion__title">Accordion: Multiple Expandable</h2>
        <p class="accordion__desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe reiciendis sed iure dolorem praesentium voluptatibus quia, vitae maiores quod, quasi dolores animi consequatur exercitationem quos quas incidunt nobis dolore perspiciatis!</p>

        <div class="accordion__item">
            <h3 class="accordion__item-title">What is an accordion?</h3>
            <div class="accordion__item-details">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores porro voluptates deleniti ullam deserunt ut beatae eos fugit! Libero, magnam.</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, ipsam!</p>
                <p><a href="#">Read more...</a></p>
            </div>
        </div>

        <div class="accordion__item">
            <h3 class="accordion__item-title">When and how it should be used?</h3>
            <div class="accordion__item-details">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores porro voluptates deleniti ullam deserunt ut beatae eos fugit! Libero, magnam.</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, ipsam!</p>
                <p><a href="#">Read more...</a></p>
            </div>
        </div>
    </div>`);

describe('Utils: Map Component', () => {

    document.innerHTML += dummyHtml;

    test('Utils: Map Component', () => {
        const dummyEl = document.querySelector('.accordion');    
        const compInstance = mapComponent(dummyEl, DummyComponent);
        
        expect(compInstance).toBeDefined();
        expect(compInstance).toBe(null);
    });
});