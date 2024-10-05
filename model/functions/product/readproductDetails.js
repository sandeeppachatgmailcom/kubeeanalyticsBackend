const productCollection = require("../../collections/products")

const readproductDetails =async (item)=>{

    try {
        const result =await productCollection.findOne({itemCode:item.itemCode})
        if (!result) return {status:false,message:'message not Found '}
        if(result?.deleted) return {status:false,message:'product hasbeen deleted by admin'}
        else if(!result?.deleted && !result?.isActive) return {status:false,message:'product blocked by admin'}
        else return result 
    } catch (error) {
        return error
    }
}

module.exports =  readproductDetails