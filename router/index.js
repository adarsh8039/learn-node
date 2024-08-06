const express= require("express");
// require("./product.routes")
const router= express.Router();

router.use(require("./product.routes"))
router.get("/home", async(request, response)=>{
    response.send("Welcome to home page");
})

module.exports=router;
