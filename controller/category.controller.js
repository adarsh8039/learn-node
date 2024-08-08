const db = require("../models/index");
const Category = db.Category;

class Multiply {
    multiply_A_B = async (req) => {

    }
}

const createCategory = async (req, res) => {
    try {
        const { categoryName, description } = req.body;
        const prepareData = {
            category_name: categoryName,
            description: description
        }
        const create = await Category.create(prepareData);
        return res.status(200).json({ message: "category created", data: create })

    } catch (error) {
        return res.status(500).json({ message: "Internal server error", err: error.message })
    }
}

module.exports = { Multiply, createCategory }