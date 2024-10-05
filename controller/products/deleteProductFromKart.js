const removeFromkart = require("../../model/functions/product/removeFromKart")

const deleteProductFromKart = async (req, res) => {

    if (req.body) {
        try {
            const result = await removeFromkart(req.body)
            console.log(req.body,result )
            res.json(result)
        } catch (error) {

        }
    }

}

module.exports = deleteProductFromKart 