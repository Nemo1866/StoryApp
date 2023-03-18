const { addStoryService, getStoryServices, getAllStoryServices } = require("../service/storyService")

module.exports.addStoryData=async(req,res,next)=>{
    const {image,text,appLogo}=req.body
    const result=await addStoryService({image,text,appLogo})
    if(result.success) return res.status(200).json({data:result})
    return res.status(500).json({data:result})
}

module.exports.getStoryData=async(req,res,next)=>{
    const result=await getStoryServices()
    if(result.success) return res.status(200).json({data:result})
    return res.status(404).json({data:result})
}

module.exports.getAllStoryData=async(req,res,next)=>{
    const result=await getAllStoryServices()
    if(result.success) return res.status(200).json({data:result})
    return res.status(404).json({data:result})
}