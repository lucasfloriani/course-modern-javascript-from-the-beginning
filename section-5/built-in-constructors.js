// Strings

const name1 = 'Jeff'; // String
const name2 = new String('Jeff'); // Object

// name2.foo = 'bar';
// console.log(name1,name2);

console.log(typeof name1, typeof name2);

if(name2 === 'Jeff') {
  console.log('YES');
} else {
  console.log('NO');
}

// Number
const num1 = 5; // Number
const num2 = new Number(5); // Object

console.log(num1, num2);

//Boolean
const bool1 = true; // Boolean
const bool2 = new Boolean(true); // Object

console.log(typeof bool1, typeof bool2);

// Function
const getSum1 = function(x, y) {
  return x + y;
}

const getSum2 = new Function('x','y', 'return 1 + 1');

console.log(getSum2(1,1));

// Object
const john1 = {name: 'John'}
const john2 = new Object({name: 'John'});
console.log(john1);

// Arrays
const arr1 = [1,2,3,4];
const arr2 = new Array(1,2,3,4);

console.log(arr1, arr2);

// Regular Expressions
const re1 = /\w+/;
const re2 = new RegExp('\\w+');

console.log(re1,re2);