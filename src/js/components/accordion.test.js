import Accordion from './accordion.js';

test('Accordion', () => {
    const accordionInstance = new Accordion();

    //
    expect(accordionInstance).not.toBeNull();
    expect(typeof accordionInstance.toggleItem).toBe('function');
    expect(typeof accordionInstance.hideSiblings).toBe('function');
});