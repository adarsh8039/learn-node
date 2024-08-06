const {Sequelize, DataTypes}=require("sequelize");

module.exports=(sequelize,DataTypes)=>{
    const prooduct = sequelize.define("products",{
        id:{
            type:DataTypes.INTEGER(10),
            autoIncrement:true,
            primaryKey:true,
            allowNull:false
        },
        product_name:{
            type:DataTypes.STRING(100),
            allowNull:false
        },
        description:{
            type:DataTypes.STRING(255),
            allowNull:false
        },
        price:{
            type:DataTypes.INTEGER(10),
            allowNull:false
        },
        review:{
            type:DataTypes.STRING(200),
            allowNull:true
        }
    })
    return prooduct;
}

