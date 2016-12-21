const express = require('express');
const app = express();

// app.Method (path,handler)

app.get('/',function(request, response){
response.send("Hello World");
});

app.get('/api',(req,res)=>{
let products =[
  {name: "JavaScript Book", price:9.99},
  {name: "A Christmas Carol", price: 19.99}
];
let stringified = JSON.stringify(products)
res.send(stringified)
});

app.listen(3000, function(){
  console.log("Listen on port 3000. Go to http://locahost:3000/");
});
