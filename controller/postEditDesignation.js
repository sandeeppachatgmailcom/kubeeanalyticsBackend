const editDesignation = require("../model/functions/designation/editDesignation")


const postpostEditDesignation =async (req,res)=>{
    try {
        console.log(req.body)
        const result = await editDesignation(req.body)
        res.json(result)
    } catch (error) {
        
    }
} 


module.exports = postpostEditDesignation