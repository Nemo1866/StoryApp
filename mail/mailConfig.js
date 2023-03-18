require("dotenv").config()
// const {google}=require("googleapis")
const nodemailer=require("nodemailer")

// const oAuthGoogleClient=new google.auth.OAuth2(process.env.CLIENT_ID,process.env.CLIENT_SECRET,process.env.REDIRECT_URI)

// oAuthGoogleClient.setCredentials({refresh_token:process.env.REFRESH_TOKEN})


function mail(title,subject,body,email){

    // let accessToken= oAuthGoogleClient.getAccessToken()

    let transport=nodemailer.createTransport({
        service:"gmail",
        auth:{
            
// type:"OAuth2",
// user:process.env.USER,
// clientId:process.env.CLIENT_ID,
// clientSecret:process.env.CLIENT_SECRET,
// refreshToken:process.env.REFRESH_TOKEN,
// accessToken:accessToken
user:process.env.USER,
pass:process.env.PASS
        }
    })

    let mailOptions={
        from:`${title}  <${process.env.USER}>`,
        to:email,
        subject:subject,
       
        text:"Checking ",
        html:body
    }

    transport.sendMail(mailOptions,(err)=>{
        if(err){
            return {err:err}
        }else{
           return {msg:"Sent to your email."}
        }
    })

}
module.exports={mail}