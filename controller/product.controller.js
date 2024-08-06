const db = require("../models/index");
const Product=db.Product;

const { Multiply } = require("./category.controller");
class Abc{
constructor(){
    this.multiply= new Multiply();
}

fistController=async(req,res)=>{
    try {
        const a=10;
        const b=10;
        const sum= a+b;

        return res.status(200).send({sum});
    } catch (error) {
        console.log(error);
        return res.status(500).send({error:"Internal server error"});
    }
}

createProduct=async(req,res)=>{
    try {
        const {productName, description, price,review}=req.body;

        const prepareData={
            product_name:productName,
            description:description,
            price:price,
            review:review
        }
        const create= await Product.create(prepareData);
        return res.status(200).send({message:"Product created sucesfully", data:create})
    } catch (error) {
        return res.status(500).send({error:"Internal server error",message:error.message});
    }
}
}
const listUserOrder = async (req, res) => {
    try {
        const a=10;
        const b=10;
        const sum= a+b;
      return res
        .status(200)
        .json({ success: true, message: "User list", data: sum });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ success: false, message: error.message });
    }
}

module.exports={Abc,listUserOrder}