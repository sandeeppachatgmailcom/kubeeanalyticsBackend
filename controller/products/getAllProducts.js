const readProducts = require("../../model/functions/product/readAllProducts")


const getAllProducts =async  (req,res)=>{
    console.log('66666666666666666666666')
    const result = await readProducts('')
    console.log(result,'------------>>>>>>>>>>>>>>>') 
    res.json(result)
} 

module.exports = getAllProducts 