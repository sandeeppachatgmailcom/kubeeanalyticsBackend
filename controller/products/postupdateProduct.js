const updateProduct = require("../../model/functions/product/updateProduct")

const postupdateProduct = async (req,res)=>{
    const data = req.body
    console.log(data,'data')
    const result = await updateProduct(data) 
    console.log('---------',result,'result')
    
    res.json(result)
}
module.exports = postupdateProduct