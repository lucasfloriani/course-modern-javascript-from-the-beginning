// Separate the code in files to export functionalities

// Basic structure
// (function() {
//   // Declare private variables and functions
//   return {
//     // Declare public variables and functions
//   }
// })();

// STANDARD MODULE PATTERN
// const UICtrl = (function(){
//   let text = 'Hello World';

//   const changeText = function() {
//     const element = document.querySelector('h1');
//     element.textContent = text;
//   }

//   return {
//     callChangeText: function() {
//       changeText();
//       console.log(text);
//     }
//   }
// })();

// UICtrl.callChangeText();
// console.log(UICtrl.text); // undefined
// console.log(UICtrl.changeText()); // Error

// REVEALING MODULE PATTERN
const ItemCtrl = (function() {
  let data = [];

  function add(item) {
    data.push(item);
    console.log('Item Added....');
  }

  function get(id) {
    return data.find(item => item.id === id)
  }

  return {
    add: add, // Revealing the private methods
    get: get  // Revealing the private methods
  }
})();

ItemCtrl.add({id: 1, name: 'John'});
ItemCtrl.add({id: 2, name: 'Mark'});
console.log(ItemCtrl.get(1));
console.log(ItemCtrl.get(2));