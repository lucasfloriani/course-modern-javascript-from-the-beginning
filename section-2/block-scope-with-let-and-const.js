// Global Scope
var a = 1;
let b = 2;
const c = 3;

// function test() {
//   var a = 4;
//   let b = 5;
//   const c = 6;
//   console.log('Function Scope:', a, b, c);
// }

// test();

// if(true) {
//   // Block Scope
//   var a = 4; // var muda a global
//   let b = 5; // let não muda a global
//   const c = 6; // const não muda a global
//   console.log('If Scope:', a, b, c);
// }

// for(let b = 0; b < 10; b++) { // Não muda a variável global
//   console.log(`Loop: ${b}`);
// }

// for(var a = 0; a < 10; a++) { // Muda a variável global
//   console.log(`Loop: ${a}`);
// }

console.log('Global Scope:', a, b, c);