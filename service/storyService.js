const { Story } = require("../database/connection")

module.exports.addStoryService=async({image,text,appLogo})=>{
    const textString=text.substring(0,50)
    const result=await Story.create({image,text:textString,appLogo,readMore:text})
if(result) return {success:true,msg:"Added a new Story"}
return {success:false,msg:"Internal Server Error"}
}

module.exports.getStoryServices=async()=>{
    const result=await Story.findAll({attributes:["image","text","appLogo"]})
    if(result) return {success:true,data:result}
    return {success:false,data:"No Story found"}
}

module.exports.getAllStoryServices=async()=>{
    const result=await Story.findAll()
    if(result) return {success:true,data:result}
    return {success:false,data:"No Story found"}
}

