const getAllUsers = require("../model/functions/getAllUsers")
const userLogin = require("../model/functions/userLogin")

const postAdminLogin = async (req,res)=>{
    const {email,password} = req.body
    const result =  await postAdminLogin(email,password)
    res.json(result)
}


module.exports = postAdminLogin