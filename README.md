# Javascript
createDomElement Class
createDomElement is a JavaScript class designed to simplify the process of creating and manipulating DOM elements dynamically. It provides methods to create various HTML elements, apply styles, set attributes, append child elements, handle events, and more.

Installation
You can simply include the createDomElement.js file in your project, or you can install it via npm:
npm install create-dom-element

Usage
// Import the class
import createDomElement from 'create-dom-element';

// Create an instance
const elementCreator = new createDomElement();

// Create a new DOM element
const divElement = elementCreator.createElement({
    element: 'div',
    css: {
        backgroundColor: 'blue',
        color: 'white'
    },
    html: 'Hello, World!'
});

// Append the element to the document body
document.body.appendChild(divElement);

API
createElement(objectArguments)
Creates a new DOM element with the specified properties.

element: (string or HTMLElement) The type of element to create (e.g., 'div', 'span', etc.).
css: (object) CSS styles to apply to the element.
attr: (object) Attributes to set on the element.
html: (string) HTML content to set inside the element.
children: (array) Child elements to append to the created element.
value: (mixed) Value to set on input elements.
options: (object) Options for creating dropdown elements.
on: (object or array) Event listeners to attach to the element.
callback: (function) Callback function to execute after element creation.
