const transactionMasterCollection = require("../../collections/transactionMaster");
const getserialNumber = require("../serialNumbers/getSerialNumber");

const createTransaction = async (data) => {
    try {
        console.log(data);

        let { billnumber, clientId, totalAmount, createdUser, deleted ,type , billDate} = data;

        const existingTransaction = await transactionMasterCollection.findOne({
            billnumber: billnumber,
        });

        if (!existingTransaction) {
            console.log(existingTransaction, 'No existing transaction found');
            if (!billnumber?.length) {
                console.log('reached here ')
                billnumber = type=='SALES' ? await getserialNumber('Sales'):await getserialNumber('Purchase');
            }
        }
        const newTransaction = {
            billnumber: billnumber,
            clientId: clientId,
            totalAmount: totalAmount,
            createdUser: createdUser,
            deleted: deleted || false,
            type:type,
            billDate:billDate
        }
 
        console.log(newTransaction,'newTransaction');
        const savedTransaction = await transactionMasterCollection.updateOne({ billnumber: billnumber }, { $set: newTransaction }, { upsert: true })
        console.log(savedTransaction)
        if (savedTransaction.modifiedCount || savedTransaction.upsertedCount) {
            return { status: true, message: 'success', ...newTransaction }
        }

    } catch (error) {
        console.error("Error in createTransaction:", error);
        throw error; // Throw error for handling in higher layers if necessary
    }
};

module.exports = createTransaction;
