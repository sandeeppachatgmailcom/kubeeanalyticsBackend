


// {
//     itemCode: { type: String, required: true  },
//     itemName: { type: String, required: true  },
//     easyCode: { type: String, required: true  },
//     batchCode: { type: String, required: false },
//     quantity: { type: Number, required: true  },
//     Price: { type: Number, required: true  },
//     type: { type: String, enum: ['SALES', 'PURCHASE']},
//     billnumber: { type: String, required: true  }
//   }

const TransactionDetailedColltion = require("../../collections/transactionDetails");

 





const createTransactionDetails =async (data)=>{
    try {
        const tempData = {...data};
        let out =  await TransactionDetailedColltion.updateOne({billnumber:data?.billnumber,itemCode:data.itemCode,batchCode:data.batchCode},{$set:data},{upsert:true})
        if(out.modifiedCount){
            return {status:true,message:'updation Success',...data}
        }
        else if (out.upsertedCount){
            return {status:true,message:'creation Success',...data}
        }
        else {
            return {status:true,message:'no changes Found',...data}
        }
    } catch (error) {
        
    }


}

module.exports =  createTransactionDetails