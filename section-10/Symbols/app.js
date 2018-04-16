// Create a symbol
const sym1 = Symbol();
const sym2 = Symbol('sym2');

console.log(sym1); // Symbol()
console.log(sym2); // Symbol(sym2)
console.log(typeof sym2); // symbol

console.log(Symbol() === Symbol()); // false, never be the same
console.log(Symbol('123') === Symbol('123')); // false, never be the same
console.log(`Hello ${String(sym1)}`); // If needed to print
console.log(`Hello ${sym1.toString()}`); // If needed to print

// Unique Object Keys
const KEY1 = Symbol()
const KEY2 = Symbol('sym2');

const myObj = {};

myObj[KEY1] = 'Prop1';
myObj[KEY2] = 'Prop2';
myObj.key3 = 'Prop3';
myObj.key4 = 'Prop3';

console.log(myObj);
console.log(myObj[KEY1]);
console.log(myObj[KEY2]);

// Symbols are not enumerable in for...in
// Only myObj.key3 and myObj.key4 values in loop
for(let i in myObj) {
  console.log(`${i}: ${myObj[i]}`);
}

// JSON.stringity ignores symbols
console.log(JSON.stringify({key: 'prop'})); // {"key":"prop"}
console.log(JSON.stringify({[Symbol('sym1')]: 'prop'})); //{}