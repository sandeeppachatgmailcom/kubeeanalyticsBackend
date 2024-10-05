const addToKart = require("../../model/functions/product/addToKart")


const postAddToKart = async (req, res) => {
    try {
        console.log(req.body);
        const productList = req?.body?.list;
        const list = await Promise.all(productList.map(async (batch) => await addToKart(batch)));
        console.log(list, 'list');
        if(list){
            res.json({status:true,message:'updation Success'});
        }
        else res.json({status:false,message:'updation failed'})
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error processing request' });
    }
};

module.exports = postAddToKart 