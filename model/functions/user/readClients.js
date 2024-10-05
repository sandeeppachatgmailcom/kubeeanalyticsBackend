const userCollection = require("../../collections/user")


const readAllClients =async ()=>{
    const data =await userCollection.find({deleted:false})
 return data || []
}

module.exports =  readAllClients 
