// CommonJS Module Syntax
// const person = require('./mymodule1');

// ES2015 Module
// IMPORT EACH VARIABLE
// import {person, sayHello} from './mymodule2'
// console.log(person.name);
// console.log(sayHello())
// OR IMPORT ALL VARIABLES IN ONE
// import * as mod from './mymodule2'
// console.log(mod.person.name);
// console.log(mod.sayHello())
// OR IMPORT A VARIABLE WITHOUT {}
import greeting from './mymodule2';
console.log(greeting);