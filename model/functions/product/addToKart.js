const productCollection = require("../../collections/products");

const addToKart=async (data)=>{
    try {
        const {itemCode,batchCode,quantity,price} = data;
        console.log(parseInt(quantity) * -1  ,'parseInt(decreasedQty) * -1  ')
        const result = await productCollection.updateOne(
            {
              itemCode: itemCode,
              'batch.batchCode': batchCode,
            },
            {
              $inc: {
                'batch.$.quantity': parseInt(quantity)   
              }
            }
          );
        console.log(result)
        return {status:true,message:'stock updated ',...result} 
    } catch (error) {
          return {status:false,message:error}  
    }
}

module.exports = addToKart