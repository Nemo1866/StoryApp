const { Story } = require("../database/connection")
const { mail } = require("../mail/mailConfig")
const { RegistrationService, resetPasswordService, changePasswordService } = require("../service/userService")

module.exports.registerUserData=async(req,res,next)=>{
    const {name,username,email,phone,password}=req.body
    const result = await RegistrationService({name,username,email,phone,password})
    if(result.success) return res.status(200).json({msg:result})
    return res.status(502).json({msg:result})
}

module.exports.loginUserData=async(req,res,next)=>{
    const result=await Story.findAll({attributes:["image","text","appLogo"]})
    if(result) return res.status(200).json({data:result})
    return res.status(400).json({data:"Not Logged In"})
}

module.exports.resetPasswordData=async(req,res,next)=>{
    const {email} = req.body
    
   
    const result=await resetPasswordService(email)
    console.log(result);
    if(result.success) return res.status(200).json({data:result})
    return res.status(404).json({data:result})
   
}

module.exports.changePasswordData=async(req,res,next)=>{
    const {otp,password}=req.body
    const result= await changePasswordService(otp,password)
    if(result.success) return res.status(200).json({data:result})
    return res.status(404).json({data:result})
}

module.exports.logoutData=async(req,res,next)=>{
    req.logout(err=>{
        return res.status(200).json({msg:"Successfully Logout"})
    })
}