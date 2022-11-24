	const express=require("express")
	const app=express();
	const cors=require("cors");
	const bodyParser=require("body-parser")
	const port=4000;

	app.use(bodyParser.urlencoded({
		extended:true
	}))
	app.use(bodyParser.json())

	app.use(cors())

	app.get("/",(req,res)=>{
		res.send("hi,good morning")

	})
	app.post("/newData",(req,res)=>{
		//console.log(req)
		const {name,pin}=req.body
		console.log(name,pin,"values")
		res.send("Data added")
	})
app.listen(port,()=>{
		console.log("api created")
	})