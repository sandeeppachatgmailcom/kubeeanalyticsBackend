const createTransaction = require("../transactionMaster/createTransaction");
const createTransactionDetails  = require("../transactionDetails/createTransactionDetails");

const postCreateTransaction = async (req, res) => {
    try {
        if (req.body) {
            const { summary, details } = req.body;
            const result = await createTransaction(summary);
            let out = !details?.billnumber 
                ? details.map((batch) => ({ ...batch, billnumber: result.billnumber })) 
                : details;

            const submitdetails = await Promise.all(out.map(itemsEntry => createTransactionDetails(itemsEntry)));

            console.log(submitdetails, 'Transaction details created');

            res.json({
                status: true,
                message: 'Transaction created successfully',
                transactionSummary: result,
                transactionDetails: submitdetails
            });
        } else {
            res.status(400).json({ status: false, message: 'Missing credentials' });
        }
    } catch (error) {
        console.error('Error creating transaction:', error);
        res.status(500).json({ status: false, message: 'Internal server error', error });
    }
};

module.exports = postCreateTransaction;
