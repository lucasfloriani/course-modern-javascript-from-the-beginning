let val;

// Number to String
val = String(555);
val = String(4+4);
// Boolean to String
val = String(true);
// Date to String
val = String(new Date());
// Array to String
val = String([1,2,3,4]);

// toString()
val = (5).toString();
val = (true).toString();

// String to number
val = Number('5');
// Boolean to a Number
val = Number(true);
val = Number(false);
// Null to a Number
val = Number(null);
val = Number('hello'); // NaN = Not a Number
val = Number([1,2,3,4]); // NaN = Not a Number

val = parseInt('100.30');
val = parseFloat('100.30');

// Output;
console.log(val);
console.log(typeof val);
//console.log(val.length); // attribute from string type
console.log(val.toFixed(2));

const val1 = String(5);
const val2 = 6;
const sum = Number(val1) + val2;
console.log(sum);
console.log(typeof sum);
