const productCollection = require("../../collections/products")
const getserialNumber = require("../serialNumbers/getSerialNumber")

const updateProduct =async  (product)=>{
    const tempProduct = JSON.parse(JSON.stringify(product)) 
    if(!tempProduct?.itemCode) {
        const isExist = await productCollection.findOne({$or:[{itemName:tempProduct?.itemName},{easyCode:tempProduct?.easyCode}]})    
        if(isExist) return {status:false,message:'record already exist',...isExist._doc}
        tempProduct.itemCode = await getserialNumber('items')
         
    } 
    console.log( tempProduct,'tempProduct')
    const result = await productCollection.updateOne({itemCode:tempProduct?.itemCode},{$set:tempProduct},{upsert:true})
    console.log(result,'resultresultresult')

    if(result.upsertedCount){
        return {status:true,message:'item creation success',...tempProduct}
    }
    else if(result.modifiedCount){
        return {status:true,message:'item updation success',...tempProduct}
    }
    else if(!result.upsertedCount & !result.modifiedCount & result.matchedCount){
        return {status:false,message:'no changes found',...tempProduct}
    }
    else return {status:false,message:'unknown reason',...tempProduct}
    
             
  
}
 

module.exports = updateProduct