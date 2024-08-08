const db = require("../models/index");
const Product = db.Product;
const Category = db.Category;

const { Multiply } = require("./category.controller");
class Abc {
    constructor() {
        this.multiply = new Multiply();
    }

    fistController = async (req, res) => {
        try {
            const a = 10;
            const b = 10;
            const sum = a + b;

            return res.status(200).send({ sum });
        } catch (error) {
            console.log(error);
            return res.status(500).send({ error: "Internal server error" });
        }
    }

    createProduct = async (req, res) => {
        try {
            const { productName, description, price, review, categoryId } = req.body;
            const verifyCategory = await Category.findOne({ where: { id: categoryId } })
            if (!verifyCategory) {
                return res.status(400).json({ message: "Invalid category" })
            }

            const prepareData = {
                product_name: productName,
                description: description,
                price: price,
                review: review,
                category_id: verifyCategory.id
            }
            const create = await Product.create(prepareData);
            return res.status(200).send({ message: "Product created sucesfully", data: create })
        } catch (error) {
            return res.status(500).send({ error: "Internal server error", message: error.message });
        }
    }

    list = async (req, res) => {
        try {
            const listData = await Product.findAll({include:{
                model:Category,
            }});
            return res.status(200).json({ message: "Product listed", data: listData })
        } catch (error) {
            return res.status(500).send({ error: "Internal server error", message: error.message });
        }
    }
}
const listUserOrder = async (req, res) => {
    try {
        const a = 10;
        const b = 10;
        const sum = a + b;
        return res
            .status(200)
            .json({ success: true, message: "User list", data: sum });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: error.message });
    }
}

module.exports = { Abc, listUserOrder }