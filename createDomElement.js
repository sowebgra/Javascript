class createDomElement {
    constructor(objectArguments = {}) {
        const me = this;
    };
    
    createElement(objectArguments = {}) {
        const me = new createDomElement().createElement;
        const setStyleSheet = (element, css) => {
            try {
                if (!element || !css || typeof css !== "object") {
                    throw new Error("Invalid arguments provided.");
                }

                for (const prop in css) {
                    if (css.hasOwnProperty(prop)) {
                        element.style[prop] = css[prop];
                    }
                }
            } catch (error) {
                throw new Error(`Failed to run setStyleSheet due to this error: ${error.message}`);
            }
        };

        const setAttributes = (element, attributes) => {
            try {
                if (!element || !attributes) { return; }
                if (typeof attributes === "object") {
                    for (const prop in attributes) {
                        element.setAttribute(prop, attributes[prop]);
                    }
                }
            } catch (error) {
                throw new Error(`Failed to run setAttributes due this error : ${error.message}`);
            }
        };
        const addChildrenElement = (element, children) => {
            const appender = (element, child) => {
                try {
                    const createChild = me(child);
                    element.appendChild(createChild);
                } catch (error) {
                    throw new Error(`Failed to run appender due this error : ${error.message}`);
                }
            };
            try {
                if (!element || !children) { return; }
                if (!Array.isArray(children) && typeof children === "object") {
                    appender(element, children);
                    return;
                }
                if (Array.isArray(children) && children.length > 0) {
                    for (const child of children) {
                        if (typeof child === "object") {
                            appender(element, child);
                        }
                    }
                }

            } catch (error) {
                throw new Error(`Failed to run addChildrenElement due this error : ${error.message}`);
            }
        };
        const setValue = (element, value) => {
            try {
                if (value === null) { return; }
                element.value = value;
            } catch (error) {
                throw new Error(`Failed to run setValue due this errro : ${error.message}`);
            }
        };
        const addOptionsToDropDown = (element, options) => {
            const setValue = (row, id) => {
                try {
                    if (typeof row === "object" && row.hasOwnProperty(id)) {
                        return row[id];
                    }
                } catch (error) {
                    throw new Error(`Failed to run setValue due this error : ${error.message}`);
                }
            };
            const setHTML = (row, output) => {
                const singleReading = (row, field) => {
                    try {
                        if (typeof row === "object" && row.hasOwnProperty(field)) { return row[field]; }
                    } catch (error) {
                        throw new Error(`Failed to run singleReading due this errro : ${error.message}`);
                    }
                };
                try {

                    if (typeof row !== "object") {
                        return;
                    }
                    if (Array.isArray(output)) {
                        const result = [];
                        for (const item of output) {
                            result.push(singleReading(row, item));
                        }
                        return result.join(" ");
                    }

                    return singleReading(row, output);
                } catch (error) {
                    throw new Error(`Failed to run setHTML due this error : ${error.message}`);
                }
            };
            try {
                if (!element || !options) { return; }
                const { data, id, output, beforedata, editedvalue = "" } = options;
                if (!id || !output) { return; }
                if (Array.isArray(beforedata) && beforedata.length > 0) {
                    for (const child of beforedata) {
                        const attributes = {
                            value: setValue(child, id)
                        }
                        if (typeof child === "object" && child.hasOwnProperty("selected") && child.selected === true) {
                            attributes.selected = "selected"
                        }
                        const selectChild = this.createElement({
                            element: "option",
                            attr: attributes,
                            html: setHTML(child, output)
                        });
                        element.appendChild(selectChild);
                    }
                }
                if (Array.isArray(data) && data.length > 0) {
                    for (const child of data) {
                        const value = setValue(child, id);
                        const attr = {
                            value,
                            selected: "selected"
                        };

                        if (data.length > 1) {
                            delete attr.selected;
                        }

                        if (editedvalue !== null && value.toString() === editedvalue.toString()) {
                            attr.selected = "selected";
                        }

                        const selectChild = this.createElement({
                            element: "option",
                            attr,
                            html: setHTML(child, output)
                        });
                        element.appendChild(selectChild);
                    }
                }

            } catch (error) {
                throw new Error(`Failed to run addOptionsToDropDown due this error : ${error.message}`);
            }
        };
        const addEvents = (element, on) => {
            const singleEvent = (element, eventObject = {}) => {
                try {
                    if (!element || !eventObject || typeof eventObject !== "object") { return; }
                    const { type, callback } = eventObject;
                    if (!type || !callback || typeof callback !== "function") { return; }
                    element.addEventListener(type, callback);
                } catch (error) {
                    throw new Error(`Failed to run singleEvent due this error : ${error.message}`);
                }
            };
            try {
                if (Array.isArray(on)) {
                    for (const child of on) {
                        singleEvent(element, child);
                    }
                    return;
                }
                singleEvent(element, on);

            } catch (error) {
                throw new Error(`Failed to run addEvents due this error : ${error.message}`);
            }
        };
        const runCallBack = (callback, element) => {
            try {
                if (typeof callback === "function") {
                    setTimeout(() => { callback(element); }, 1000);
                }
            } catch (error) {
                throw new Error(`Failed to run runCallBack due this error : ${error.message}`);
            }
        };
        try {
            const { element, css = {}, attr = {}, html = null, children = [], value = null, options = {}, on = {}, callback } = objectArguments;
            if (!element) { return; }
            const domElement = typeof element == "object" ? element : document.createElement(element);
            domElement.innerHTML = html;
            setStyleSheet(domElement, css);
            setAttributes(domElement, attr);
            addChildrenElement(domElement, children);
            setValue(domElement, value);
            addOptionsToDropDown(domElement, options);
            addEvents(domElement, on);
            runCallBack(callback, element);
            return domElement;
        } catch (error) {
            throw new Error(`Failed to run createElement due this error : ${error.message}`);
        }
    }
}