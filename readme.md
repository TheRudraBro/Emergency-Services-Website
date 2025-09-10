1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll : 

getElementById method returns a single element with the specified ID. It is unique within the document, so there should only be one element with a given ID.getElementsByClassName method returns a live HTMLCollection of all elements with the specified class name. It can return multiple elements, and the collection is updated automatically when the document changes.querySelector method returns the first element that matches a specified CSS selector. It can be used to select elements by ID, class, attribute, and more. querySelectorAll method returns a static NodeList of all elements that match a specified CSS selector. Unlike `getElementsByClassName`, the NodeList is not live and does not update automatically.

---------------------------------------------------------------------------------------------------------------------------

2.How do you create and insert a new element into the DOM?
In this approach, we are using the createElement() method which is used to dynamically create a new HTML element. This method allows developers to create new elements and then insert them into the DOM.
Syntax: let newElement = document.createElement("elementName");

---------------------------------------------------------------------------------------------------------------------------

3.What is Event Bubbling and how does it work?
When an event happens on a child element, it first runs its own handler, then goes upward through parent elements until it reaches the document.

Example: Clicking a button inside a div → event fires on the button → then the div → then body → then document.

---------------------------------------------------------------------------------------------------------------------------

4.What is Event Delegation in JavaScript? Why is it useful?
Event Delegation in Javascript is an instead of adding event listeners to many child elements, put one listener on their parent and check the event target.

It's useful because of better performance and Works even for dynamically added elements.

---------------------------------------------------------------------------------------------------------------------------

5.What is the difference between preventDefault() and stopPropagation() methods?
Difference between preventDefault() and stopPropagation() is :
preventDefault() stops the default browser action and stopPropagation() Stops the event from bubbling up (or going down in capture).