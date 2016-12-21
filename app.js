const express = require('express');
const app = express();

// app.Method (path,handler)

app.get('/',function(request, response){
response.send("Hello World");
});

app.listen(3000, function(){
  console.log("Listen on port 3000. Go to http://locahost:3000/");
});
