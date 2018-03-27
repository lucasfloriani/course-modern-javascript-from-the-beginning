// Set local storage item
// localStorage.setItem('name', 'John');
// localStorage.setItem('age', '30');

// Set session storage item
// sessionStorage.setItem('name', 'Beth');

// Remove from storage
// localStorage.removeItem('name');

// Get from storage
// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');
// console.log(name, age);

// Clear localStorage
// localStorage.clear();

document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();
  const task = document.getElementById('task').value;

  let tasks;

  if(localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks));

  alert('Task saved');
});

// Print values in localStorage
const tasks = JSON.parse(localStorage.getItem('tasks'));
tasks.forEach(function(task){
  console.log(task);
});