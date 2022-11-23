const express=require("express")
const app=express()
const port=4444
const cors=require("cors");
const emp=[{id:203109,name:"sivakumar",age:19,Avatar:"https://www.koimoi.com/wp-content/new-galleries/2022/07/vikram-does-unthinkable-at-the-kerala-box-office-001.jpg"},
	{id:203114,name:"karthik",age:19,Avatar:"https://m.media-amazon.com/images/M/MV5BZTI4MDA3ZTYtMDg1OC00MTY1LWE4NjYtZWM2NTRlNGQ2OWU4L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTU0MzI1OTY@._V1_UY264_CR43,0,178,264_AL_.jpg"},
	{id:203116,name:"Rajesh",age:19,Avatar:"https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/10/11/2545322-rolex-final.jpg"},
	{id:203125,name:"trinath",age:19,Avatar:"https://pbs.twimg.com/media/FUi48LNaMAA6cqk.jpg"}
	]
	const student=require("./data.js")
app.use(cors());
app.get("/",(req,res)=>{
	res.send("hi,welcome to my server ")
})
app.get("/user",(req,res)=>{
	res.send("user relative server")
})
app.get("/emp",(req,res)=>{
	res.json(emp)
})
app.get("/student",(req,res)=>{
	res.send(student)
})
app.listen(port,()=>{
	console.log("server activeted")
	console.log("......")
})
