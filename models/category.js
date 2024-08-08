const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const category = sequelize.define("categories", {
        id: {
            type: DataTypes.INTEGER(10),
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        category_name: {
            type: DataTypes.STRING(20),
            allowNull: false
        },
        description: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: true
        }
    })
    return category;
}