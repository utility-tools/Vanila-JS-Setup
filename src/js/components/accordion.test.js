import Accordion from './accordion.js';

test('Accordion', () => {
    const instance = new Accordion();

    //
    expect(instance).not.toBeNull();
    expect(typeof instance.toggleItem).toBe('function');
    expect(typeof instance.hideSiblings).toBe('function');
});