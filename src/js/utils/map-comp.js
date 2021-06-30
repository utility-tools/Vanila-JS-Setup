/**
 * @function
 * @param { Node } El HTML Element/node
 * @param { Class } ComponentClass Component class reference with Element has to be initiated with
 * @returns instance of component class
 */
 function initComponent(El, ComponentClass) {
    return new ComponentClass(El);
}

/**
 * @function
 * @param { Node | NodeList } El HTML Element or Element Collcation
 * @param { Class } ComponentClass Component class reference with Element has to be initiated with
 * @returns 
 */
function mapComponent(ElRef, Component) {
    if(!ElRef || !Component) {
        console.info('Component mapping failed, Node or Component not found');
        return null;
    }

    if(typeof Component !== 'function') {
        console.info(`${Component} is not a class!`);
        return null;
    }

    // for one element
    if(Node.prototype.isPrototypeOf(ElRef)) {
        return initComponent(ElRef, Component);
    }

    // for nodelist
    if(NodeList.prototype.isPrototypeOf(ElRef)) {
        return ElRef.forEach(El => new initComponent(El, Component));
    }

    // show info
    console.info(`Component ${Component} can not be initiated as ${ElRef} is not a Node or NodeList`);
}

export default mapComponent;