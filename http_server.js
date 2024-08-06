const http = require("http");
const { log } = require("util");



http.createServer(function(req,res){
console.log("Server created");
http.get("/home",()=>{
    return res.status(200).send({Data:"Hello world"})
})
}).listen(4001,()=>{
    console.log(`server started at http://localhost:4001`);
});

