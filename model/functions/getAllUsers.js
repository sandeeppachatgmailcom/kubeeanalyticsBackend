
const userCollection = require("../collections/user");

async function getAllUsers(){
    const result =await userCollection.find()
    console.log(result,'rre')
    return result

}

module.exports = getAllUsers