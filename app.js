const express = require('express');
const app = express();

// app.Method (path,handler)

app.get('/',function(request, response){
response.send("Hello World");
});

let products =[
  {id:1, name: "JavaScript Book", price:9.99},
  {id:2, name: "A Christmas Carol", price: 19.99},
  {id:3, name: "EggNOG", price: 2.99},
  {id:4, name: "Breck Bourbon", price: 29.99},
  {id:5, name: "A Christmas Story", price: 5.99}


];

app.get('/api/products',(req,res)=>{
let stringified = JSON.stringify(products)
res.send(stringified)
});

app.get('/api/products/:id', (req,res)=>{
  let id = Number(req.params.id)
  let product = products.find((element)=> element.id ===id)
  let stringified = JSON.stringify(product)
  res.send(stringified)
});

const json_parson = bodyPar.json();
app.post('/api/products', (req, res) =>{

})

app.listen(3000, function(){
  console.log("Listen on port 3000. Go to http://localhost:3000/");
});
