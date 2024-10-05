const createtask = require("../model/functions/task/createTask")

const postCreateTask =async (req,res)=>{
    try {
        console.log(req.body,'re---------->')
        const result = await createtask(req.body)
        console.log('--',result)
        if(result)res.status(200).json({...result})
            else res.status(200).json({status:true,message:'user already exist'})
    } catch (error) {
        
    }
}


module.exports = postCreateTask