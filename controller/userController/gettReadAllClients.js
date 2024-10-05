const readAllClients = require("../../model/functions/user/readClients")


const gettReadAllClients =async (req,res)=>{
    try {
        const result = await readAllClients()
        res.json(result)
    } catch (error) {
        
    }
}

module.exports = gettReadAllClients