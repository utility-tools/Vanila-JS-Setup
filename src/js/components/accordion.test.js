import Accordion from './accordion.js';

test('a', () => {
    const instance = new Accordion();
    
    console.log('instance', instance.toggleItem);
    console.log('check', instance instanceof Accordion);
    // expect(instance).not.toBeNull();
});

test('adds', ()=>{
    expect(2).toBe(2);
});