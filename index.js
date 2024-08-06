const express= require("express");
const bodyParser=require("body-parser")
const jwt = require("jsonwebtoken")
const fs= require("fs");
const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
require("./models/index")

const PORT= 4000;

app.use(require("./router/index"));

app.get("/", async(req, res)=>{
    console.log("1st request");
    const token=jwt.sign({userId:"1", userName:"ABC"}, "randomsecret123@");
    const verifyToken= jwt.verify(token,"randomsecret123@");
    console.log(verifyToken);

    res.json({Token:token, message:"Token Generated sucesfully"})
    // res.send("Hello from slash route ")
})

app.get("/readFile",async(req, res)=>{
  try {
    fs.readFileSync("./readFile.txt",function(error, data){
      if(error){
        console.log(error);
      }
      console.log(data.toString());
      return res.status(200).send(data);
    });
    console.log("File read sucesfully !");
  } catch (error) {
    console.log({error});
    return res.status(500).send(error)
  }
})


// const sum = 


app.listen(PORT, function(){
console.log(`server start at ${PORT}` )
})