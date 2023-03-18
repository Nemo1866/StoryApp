module.exports=(sequelize,DataTypes)=>{
const Story=sequelize.define("story",{
    image:{
        type:DataTypes.TEXT
    },
    text:{
        type:DataTypes.STRING
    },
    appLogo:{
        type:DataTypes.TEXT
    },
    readMore:{
        type:DataTypes.TEXT,
    }

},{
    createdAt:'Date',
    updatedAt:'Update At'
})
return Story
}