class UI {
  constructor() {
    this.post = document.getElementById('posts');
    this.titleInput = document.getElementById('title');
    this.bodyInput = document.getElementById('body');
    this.idInput = document.getElementById('id');
    this.postInput = document.querySelector('.post-submit');
    this.forState = 'add';
  }

  showPosts(posts) {
    let output = '';

    posts.forEach((post) => {
      output += `
      <div class="card mb-3">
        <div class="card-body">
          <h4 class="card-title">${post.title}</h4>
          <p class="card-text">${post.body}</p>
          <a href="#" class="edit card-link" data-id="${post.id}">
            <i class="fa fa-pencil"></i>
          </a>
          <a href="#" class="delete card-link" data-id="${post.id}">
            <i class="fa fa-remove"></i>
          </a>
        </div>
      </div>
      `;
    });

    this.post.innerHTML = output;
  }

  showAlert(message, className) {
    this.clearAlert();

    // Create div
    const div = document.createElement('div');
    // Add classes
    div.className = className;
    // Add text
    div.appendChild(document.createTextNode(message));
    // Get parent
    const container = document.querySelector('.postsContainer');
    // Get posts
    const posts = document.querySelector('#posts');
    // Append message
    container.insertBefore(div, posts);

    // Timeout
    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  clearAlert() {
    const currentAlert = document.querySelector('.alert');

    if(currentAlert) {
      currentAlert.remove();
    }
  }

  clearFields() {
    this.titleInput.value = '';
    this.bodyInput.value = '';
  }
}

export const ui = new UI();