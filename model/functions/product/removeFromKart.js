

  const productCollection = require("../../collections/products");

const removeFromkart=async (data)=>{
    try {
        const {itemCode,batchCode,decreasedQty,price} = data;
        console.log(parseInt(decreasedQty) * -1  ,'parseInt(decreasedQty) * -1  ')
        const result = await productCollection.updateOne(
            {
              itemCode: itemCode,
              'batch.batchCode': batchCode,
               
            },
            {
              $inc: {
                'batch.$.quantity': parseInt(decreasedQty)   
              }
            }
          );
          return {status:true,message:'stock updated ',...result} 
        
    } catch (error) {
          return {status:false,message:error}  
    }
}

module.exports = removeFromkart