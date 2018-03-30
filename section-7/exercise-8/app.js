// const sayHello = function() {
//   console.log('hello');
// }

// const sayHello = () => {
//   console.log('hello');
// }

// One line function does not need braces
// const sayHello = () => console.log('hello');

// One line returns
// const sayHello = () => 'Hello';

// Same as above
// const sayHello = function() {
//   return 'Hello';
// }
// console.log(sayHello());

// Return object
//const sayHello = () => ({ msg: 'Hello'});

// Single param does not need paranthesis
// const sayHello = name => console.log(`Hello ${name}`);
// const sayHello = (name) => console.log(`Hello ${name}`);

// Multi param needs paranthesis
// const sayHello = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}`);

// sayHello('Brad');

const users = ['Nathan', 'John', 'William'];

// Without arrow functions
// const nameLengths = users.map(function(name) {
//   return name.length;
// });

// Shorter with arrow functions
// const nameLengths = users.map(function(name) {
//   return name.length;
// });

// Shortest version with arrow functions
const nameLengths = users.map(name => name.length);

console.log(nameLengths);

