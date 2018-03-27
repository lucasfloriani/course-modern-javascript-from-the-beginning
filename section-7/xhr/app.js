document.getElementById('button').addEventListener('click', loadData);

function loadData() {
  // Create an XHR Object
  const xhr = new XMLHttpRequest();

  // OPEN
  xhr.open('GET', 'data.txt', true);

  console.log('READYSTATE', xhr.readyState);

  // Optional - Used for spinners/loaders (readyState in stage 3)
  xhr.onprogress = function() {
    console.log('READYSTATE', xhr.readyState);
  };

  // HTTP Statuses
  // 200: 'OK'
  // 403: 'Forbidden'
  // 404: 'Not Found'
  // ------------------
  // readyState Values
  // 0: request not initialized
  // 1: server connection established
  // 2: request received
  // 3: processing request
  // 4: request finished and response is ready
  // Newest version, not needed to check readyState, aways in readyState 4
  xhr.onload = function() {
    console.log('READYSTATE', xhr.readyState);
    if(this.status === 200) {
      // console.log(this.responseText);
      document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;
    }
  }

  // Older version
  /*
  xhr.onreadystatechange = function() {
    console.log('READYSTATE', xhr.readyState);
    if(this.status === 200 && this.readyState === 4) {
      console.log(this.responseText);
    }
  }
  */

  // Check for errors
  xhr.onerror = function() {
    console.log('Request error...');
  }

  // Send the request
  xhr.send();
}