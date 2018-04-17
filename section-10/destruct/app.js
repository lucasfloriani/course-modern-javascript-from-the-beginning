// Destructuring Assigment

let a, b;
[a, b] = [100, 200];
// Rest pattern
[a, b, ...rest] = [100, 200, 300, 400, 500];
console.log(a, b, rest);

({a, b} = {a: 100, b:200, c:300, d:400, e:500});
({a, b, ...rest} = {a: 100, b:200, c:300, d:400, e:500});
console.log(a, b, rest);

// Array Destructuring
const people = ['John', 'Beth', 'Mike'];
const [person1, person2, person3] = people;
console.log(person1, person2, person3);

// Parse array returned from function
function getPeople() {
  return ['John', 'Beth', 'Mike'];
}
let person11, person12, person13;
[person11, person12, person13] = getPeople();
console.log(person11, person12, person13);

// Object Destructuring
const person = {
  name: 'John Doe',
  age: 32,
  city: 'Miami',
  gender: 'Male',
  sayHello: function() {
    console.log('Hello');
  }
}

// Old ES5
// const name = person.name,
//       age = person.age,
//       city = person.city;

// New ES6
const {name, age, city, sayHello} = person;
console.log(name, age, city);
sayHello();