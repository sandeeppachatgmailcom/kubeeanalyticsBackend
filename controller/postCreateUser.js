
const userCollection = require("../model/collections/user");
const createUser = require("../model/functions/createUser");
const postCreateUser = async (req,res) => {
    const {email,password,name} = req.body
    console.log(req.body,'req.body')
    const result =await  createUser({ email, password, name })
    console.log(result,'result')
    res.json(result)
}


module.exports = postCreateUser