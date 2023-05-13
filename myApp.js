require('dotenv').config()
let bodyParser = require('body-parser')
let express = require('express');
let app = express();

app.use("/public", express.static(__dirname + "/public"));

app.use((req, res, next) => {
	let string = req.method + " " + req.path + " - " + req.ip;
	console.log(string);
	next();
});
app.use(bodyParser.urlencoded({extended: false}))
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

app.get("/:word/echo",function(req,res){
	let word = req.params.word
  res.json({echo:word})
})



app.route("/name").get( function(req, res) {
	const {first} = req.query;
	const {last} = req.query;
	 
	const { first: firstName, last: lastName } = req.query;
	 
	res.json({
	  name: `${firstName} ${lastName}`
	});
  }).post(function(req,res){
	const {first} = req.body;
	const {last} = req.body;
	 
	const { first: firstName, last: lastName } = req.body;
	 
	res.json({
	  name: `${firstName} ${lastName}`
	});
  });

  



















 module.exports = app;
