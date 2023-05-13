require('dotenv').config()
let express = require('express');
let app = express();

app.use("/public", express.static(__dirname + "/public"));

app.use((req, res, next) => {
	let string = req.method + " " + req.path + " - " + req.ip;
	console.log(string);
	next();
});

app.get("/json",(req,res)=>{
  const name1 = process.env.MESSAGE_STYLE
if(name1 === "uppercase"){
   res.json({"message":"Hello json".toUpperCase()})
 }else{
  res.json({"message":"Hello json"})
 }
})


app.get("/", function(req, res) {
  res.sendFile(__dirname + "/views/index.html");
});
app.get("/now", function(req,res,next){
	req.time = new Date().toString();
	next();
},function(req,res){
  res.json({time:req.time})
});

























 module.exports = app;
