var getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status === 200) {
        callback(null, xhr.response);
      } else {
        callback(status, xhr.response);
      }
    };
    xhr.send();
};

window.onload = function() {
  const form  = document.getElementById('SearchFormInput');
  form.addEventListener('search', (event) => {
    getJSON('https://fastapi-btest.herokuapp.com/' + form.value,
      function(err, data) {
      if (err !== null) {
        console.log('Something went wrong: ' + err);
      } else {
        console.log('Your query count: ' + data.data);
      }
    });
    return false;
  });
}
