const { Story } = require("../database/connection")
const { pagination } = require("../pagination")
const { addStoryService, getStoryServices, getAllStoryServices, getNextService } = require("../service/storyService")

module.exports.addStoryData=async(req,res,next)=>{
    const {image,text,appLogo}=req.body
    const result=await addStoryService({image,text,appLogo})
    if(result.success) return res.status(200).json({data:result})
    return res.status(500).json({data:result})
}

module.exports.getStoryData=async(req,res,next)=>{
    const pageNumber=req.query.page
    const sizeNumber=req.query.size
    if(!pageNumber || !sizeNumber){

        const result=await getStoryServices()
        if(result.success) return res.status(200).json({data:result})
        return res.status(404).json({data:result})
    }else{
        const {page,size}=pagination(pageNumber,sizeNumber)
        const result=await Story.findAndCountAll({limit:size,offset:page*size})
        if(result) return res.status(200).json({data:result})
        return res.status(404).json({data:result})
    }
}

module.exports.getAllStoryData=async(req,res,next)=>{
    const result=await getAllStoryServices()
    if(result.success) return res.status(200).json({data:result})
    return res.status(404).json({data:result})
}


