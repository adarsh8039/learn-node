const express= require("express");
const { ProdCtrl } = require("../controller");
// const { Abc } = require("../controller/product.controller");
const router= express.Router();
// const {Abc}= require("../controller/product.controller")
const prodCtrl= new ProdCtrl.Abc()

// const AbcCtrl= new Abc();
router.get("/get-product", async(req, res)=>{
    res.send("get product page");
})

router.get("/sum",  async (req, res) => {
    const result = await prodCtrl.fistController(req,res);
    return result;
  });

  router.post("/create-product",prodCtrl.createProduct)
  // router.post("/create-product", async(req, res)=>{
  //   let result = await prodCtrl.createProduct(req);
  //   // res.status(result.status).send(result)
  //   })

module.exports=router;