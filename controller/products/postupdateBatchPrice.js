const updateProductPrice = require("../../model/functions/product/updateProductPrice")


const postupdateBatchPrice = async (req,res)=>{
    try {
        
        const result = await updateProductPrice(req.body)
        console.log(result,'resultresult')
        res.status(200).json(result)

    } catch (error) {
        
    }
}

module.exports = postupdateBatchPrice