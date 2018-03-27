let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;
val = list;

// Get child nodes
val = list.childNodes; //NodeList (Get line breaks to)
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[1].nodeType; // Numbers below
// 1 - Element
// 2 - Attribute (deprecated)
// 3 - Text node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype


// Get children element nodes
val = list.children; // HTMLCollection (Dont get line breaks)
val = list.children[1];
list.children[1].textContent = 'Hello';
// Children of children
list.children[3].children[0].id = 'test-link';
val = list.children[3].children; // HTMLCollection
val = list.children[3].children[0];

// First child
val = list.firstChild; // Like NodeList childNodes, but only the first
val = list.firstElementChild; // Like HTMLCollection children, but only the first

// Last child
val = list.lastChild; // Like NodeList childNodes, but only the last
val = list.lastElementChild; // Like HTMLCollection children, but only the last

// Count child elements
val = list.childElementCount; // Quantity elements

// Get parent node
val = listItem.parentNode; //Same thing
val = listItem.parentElement; //Same thing
// Parent of parent
val = listItem.parentElement.parentElement;

// Get next sibling
val = listItem.nextSibling; // Like nodeList childNodes
val = listItem.nextElementSibling; // Like HTMLCollection children
val = listItem.nextElementSibling.nextElementSibling; // Like HTMLCollection children

// Get prev sibling
val = listItem.previousSibling; // Like nodeList childNodes
val = listItem.previousElementSibling; // Like HTMLCollection children
//val = listItem.previousElementSibling.previousElementSibling; // Like HTMLCollection children

console.log(val);