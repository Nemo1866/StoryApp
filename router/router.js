const passport = require("passport")
const { addStoryData, getStoryData, getAllStoryData } = require("../controller/storyController")
const { registerUserData, loginUserData, resetPasswordData, changePasswordData, logoutData } = require("../controller/userController")

const router=require("express").Router()

router.post("/register",registerUserData)
router.post("/login",passport.authenticate("local"),loginUserData)
router.post("/resetpassword",resetPasswordData)
router.post("/changepassword",changePasswordData)
router.get("/logout",logoutData)


router.post("/addStory",addStoryData)
router.get("/getStory",getStoryData)
router.get("/readmore",getAllStoryData)

module.exports=router