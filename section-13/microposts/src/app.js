import { http } from './http';
import { ui } from './ui.js';

// Get posts on DOM load
document.addEventListener('DOMContentLoaded', getPosts);

// Listen for add post
document.querySelector('.post-submit').addEventListener('click', submitPost);

// Listen for edit state
document.querySelector('#posts').addEventListener('click', enableEdit);

// Get Posts
function getPosts() {
  http.get('http://localhost:3000/posts')
  .then(data => ui.showPosts(data))
  .catch(err => console.log(err));
}

// Submit Post
function submitPost() {
  const title = document.getElementById('title').value;
  const body = document.getElementById('body').value;

  const data = {
    title,
    body
  }

  http.post('http://localhost:3000/posts', data)
  .then(data => {
    ui.showAlert('Post added', 'alert alert-success');
    ui.clearFields();
    getPosts();
  })
  .catch(err => console.log(err));
}

// Enable edit state
function enableEdit(e) {
  e.preventDefault();
  if(!e.target.parentElement.classList.contains('edit')) return;

  const id = e.target.parentElement.dataset.id;
  const body = e.target.parentElement.previousElementSibling.textContent;
  const title = e.target.parentElement.previousElementSibling.previousElementSibling.textContent;

  const data = {
    id,
    title,
    body
  }

  // Fill form with current post
  ui.fillForm(data);
}