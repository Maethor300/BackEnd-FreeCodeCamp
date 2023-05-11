require('dotenv').config()
let express = require('express');
let app = express();

console.log("Hello World")
 
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/views/index.html");
  });
app.use("/public", express.static(__dirname + "/public"));
app.get("/json",(req,res)=>{
  const name1 = process.env.MESSAGE_STYLE
if(name1 === "uppercase"){
   res.json({"message":"Hello json".toUpperCase()})
 }else{
  res.json({"message":"Hello json"})
 }
})






























 module.exports = app;
