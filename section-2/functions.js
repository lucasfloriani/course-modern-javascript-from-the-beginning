// FUNCTION DECLARATIONS

function greet(firstName = 'John', lastName = 'Doe') { // ES6
  // if(typeof firstName === 'undefined'){firstName = 'John'} ES5
  // if(typeof lastName === 'undefined'){firstName = 'Doe'} ES5
  //console.log('Hello');
  return `Hello ${firstName} ${lastName}`;
}

//console.log(greet());

// FUNCTION EXPRESSIONS

const square = function(x = 3) {
  return x*x;
};

console.log(square(8));

// IMMIDIATLEY INVOKABLE FUNCTION EXPRESSIONS - IIFEs

// (function() {
//   console.log('IIFE Ran...');
// })();

// (function(name) {
//   console.log('Hello ' + name);
// })('Brad');

// PROPERTY METHODS

const todo = {
  add: function() {
    console.log('Add todo...');
  },
  edit: function(id) {
    console.log(`Edit todo ${id}`);
  }
}
todo.delete = function() {
  console.log('Delete todo...');
}

todo.add();
todo.edit(22);
todo.delete();