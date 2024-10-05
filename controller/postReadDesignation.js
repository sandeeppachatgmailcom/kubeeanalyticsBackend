const readDesignations = require("../model/functions/designation/readDesignations")


const postReadDesignation =async  (req,res)=>{
        const {designation} = req.body
        console.log(req.body)

        const result = await readDesignations(designation) || []
        res.json(result[0]?.subordinates )
}

module.exports = postReadDesignation