require("./database/connection")
const passport=require("passport")
const express=require("express")
const session=require("express-session")
const { initializePassport } = require("./passport/passportConfig")
const router = require("./router/router")

const app=express()
app.use(express.json())

initializePassport(passport)
app.use(session({
    secret:"Secret",
    resave:false,
    saveUninitialized:false
}))
app.use(passport.session())
app.use(passport.initialize())
app.use("/",router)


app.listen(3000,()=>console.log("Server is running on port 3000"))
