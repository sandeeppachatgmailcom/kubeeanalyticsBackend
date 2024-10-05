const readproductDetails = require ( "../../model/functions/product/readproductDetails")


const postreadlatestProduct =async  (req,res)=>{
    try {
        const result = await readproductDetails(req.body)       
        res.json(result)
    } catch (error) {
        res.json({message:error})
    }
      
}

module.exports = postreadlatestProduct