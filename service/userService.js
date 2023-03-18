const { User } = require("../database/connection")
const { mail } = require("../mail/mailConfig")

module.exports.RegistrationService=async({name,username,email,phone,password})=>{
    const result=await User.create({name,username,email,phone,password})
    if(result) return {success:true,msg:"Registered Successfully"}
    return {success:false,msg:"Internal Server Error"}
}


module.exports.resetPasswordService=async(email)=>{
    const result=await User.findOne({where:{email}})
    if(!result) return {success:false,msg:"Email Address Doesn't Exist"}
    const random=Math.floor(Math.random()*8999)+1000
   
    mail("Welcome To My Story App.","Reset Password for your account.",`Your Otp is ${random} for changing your password.`,result.email)
await User.update({otp:random},{where:{email}})
    
    return {success:true,msg:"Otp sent to your email"}
}

module.exports.changePasswordService = async (otp, password) => {
    const result = await User.findOne({ where: { otp } })
    if (result) {
        const change = await User.update({ password }, { where: { otp } })
        if (change) {
            result.otp = null
            await result.save()
        }
        return { success: true, msg: "Successfully Updated your password" }
    }
    return { success: false, msg: "Otp invalid" }
}

