const {Sequelize,DataTypes}=require("sequelize")
const sequelize=new Sequelize("StoryApp","root","nimap123",{
    dialect:"mysql",
    host:"localhost"
})

sequelize.authenticate().then(()=>console.log("Connected DB")).catch(err=>console.log(err))
const User=require("../models/userModel")(sequelize,DataTypes)
const Story=require("../models/storyModel")(sequelize,DataTypes)


sequelize.sync()

module.exports={User,Story}


