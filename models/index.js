const { Sequelize, DataTypes } = require('sequelize');

// // Option 1: Passing a connection URI
// const sequelize = new Sequelize('sqlite::memory:') // Example for sqlite
// const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname') // Example for postgres

// Option 2: Passing parameters separately (sqlite)
// const sequelize = new Sequelize({
//   dialect: 'sqlite',
//   storage: 'path/to/database.sqlite'
// });

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('test', 'root', 'root', {
  host: 'localhost',
  dialect:  'mysql',
});


const db={}

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// require all models
db.Product=require("./product")(sequelize,DataTypes);
db.Category=require("./category")(sequelize,DataTypes);

// Relationship

db.Product.hasMany(db.Category,{
  foreignKey:"category_id"
})
db.Category.belongsTo(db.Product,{
  foreignKey:"category_id"
})

try {
    sequelize.authenticate();
    console.log(' Connection has been established successfully. 🟢');
  } catch (error) {
    console.error('Unable to connect to the database: 🔴', error);
  }

  db.sequelize
  .sync({
    // force: true,
    // alter: true,
  })
  .then(() => {
    // console.log("table created");
  })
  .catch((error) => {
    console.log("Error in table creation", error);
  });
  

module.exports=db;