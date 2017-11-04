const getElementStyle = (e, style) => {
    return (e.style[style] || window.getComputedStyle(e, null)[style]);
};

const getSubElements = (parent, selector) => {
    return [].filter.call(parent.querySelectorAll(selector), (e) => {
        return e.parentNode === parent;
    });
};

let elemsWithBoundingRects = [];
const pbsGetBoundingClientRect = element => {
    // Check if we already got the client rect before.
    if (!element._boundingClientRect) {
      // If not, get it then store it for future use.
        element._boundingClientRect = element.getBoundingClientRect();
        elemsWithBoundingRects.push(element);
    }
    return element._boundingClientRect;
};

export default {
    getElementStyle,
    getSubElements,
    pbsGetBoundingClientRect
};
