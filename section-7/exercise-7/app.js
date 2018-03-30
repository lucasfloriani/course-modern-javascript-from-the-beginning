document.getElementById('button1').addEventListener('click', getText);
// Get local text file data
function getText() {
  fetch('test.txt')
  .then(function(res) {
    return res.text();
  })
  .then(function(data) {
    console.log(data);
    document.getElementById('output').innerHTML = data;
  })
  .catch(function(err) {
    console.error(err);
  });
}

document.getElementById('button2').addEventListener('click', getJson);
// Get local json data
function getJson() {
  fetch('posts.json')
  .then(function(res) {
    return res.json();
  })
  .then(function(data) {
    console.log(data);
    let output = '';
    data.forEach(function(post) {
      output += `<li>${post.title}</li>`;
    });
    document.getElementById('output').innerHTML = output;
  })
  .catch(function(err) {
    console.error(err);
  });
}

document.getElementById('button3').addEventListener('click', getExternal);
// Get from external API
function getExternal() {
  fetch('https://api.github.com/users')
  .then(function(res) {
    return res.json();
  })
  .then(function(data) {
    console.log(data);
    let output = '';
    data.forEach(function(user) {
      output += `<li>${user.login}</li>`;
    });
    document.getElementById('output').innerHTML = output;
  })
  .catch(function(err) {
    console.error(err);
  });
}