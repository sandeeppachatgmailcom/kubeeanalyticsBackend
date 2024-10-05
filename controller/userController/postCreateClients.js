const createClient = require("../../model/functions/user/createClient")


const postCreateClients =async (req,res)=>{
    try {   
        const newClient =  await createClient(req.body)
        console.log(req.body)

        res.json(newClient)
    } catch (error) {
        
    }
}

module.exports = postCreateClients