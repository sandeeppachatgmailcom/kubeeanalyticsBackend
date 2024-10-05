const createDesignation = require("../model/functions/designation/createDesignation")


const postcreateDesignation =async (req,res)=>{
     try {
         const  result = await createDesignation(req.body) 
          
          if(result){
             res.status(200).json(result)
          }
          else
          {
            res.json({status:false,message:'designation already exist'})
          }
     } catch (error) {
        
     }

   }


module.exports = postcreateDesignation