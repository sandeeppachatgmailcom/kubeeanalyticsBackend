const readProducts = require("../../model/functions/product/readAllProducts")


const getAllProducts =async  (req,res)=>{
  
    const result = await readProducts('')
    
    res.json(result)
} 

module.exports = getAllProducts 