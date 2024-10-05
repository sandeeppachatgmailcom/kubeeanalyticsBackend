const productCollection = require("../../collections/products");

const updateProductPrice = async (data) => {
   try {
       const { itemCode, sellingPrice, batch } = data.data;
       const link  = await   productCollection.find(
        { itemCode: itemCode, 'batch.batchCode': batch })  
       console.log(link,'itemCode, sellingPrice, batch')
        const update = await productCollection.updateOne(
           { itemCode: itemCode, 'batch.batchCode': batch },   
           { $set: { 'batch.$.sellingPrice': sellingPrice }},
       );
       if(update.modifiedCount){
         return {status:true,message:'update success '}
       }
       else if (update.matchedCount &  !update.modifiedCount) { 
         return {status:false,message:'no changes founnd'}
       }
   } catch (error) {
       console.error("Error updating product price:", error);
       throw error;  
   }
};

module.exports = updateProductPrice;
