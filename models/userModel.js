const { hashSync } = require("bcrypt")

module.exports=(sequelize,DataTypes)=>{
const User=sequelize.define("user",{
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    username:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true,
        validate:{
            isEmail:true
        }
    },
    phone:{
        type:DataTypes.BIGINT
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false,
        set(value){
            const password=hashSync(value,10)
            this.setDataValue("password",password)
        }
    },otp:{
        type:DataTypes.INTEGER
    }
},{
    timestamps:false
})
return User
}