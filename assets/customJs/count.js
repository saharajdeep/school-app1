$("#uploadForm").submit(function (event) {
    $.get('/player', $("#uploadForm").serialize(), function (data) {
       console.log(data) //data is the response from the backend
    });
    event.preventDefault();
  });