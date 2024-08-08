const express = require("express");
const { CatCtrl } = require("../controller");

// const categoryCtrl= new CatCtrl.createCategory();
const router= express.Router();

router.post("/create-category", CatCtrl.createCategory)

module.exports=router;