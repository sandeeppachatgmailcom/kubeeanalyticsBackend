
const userLogin = require("../model/functions/userLogin")

const postuserLogin = async (req,res)=>{
    const {email,password} = req.body
    console.log(req.body,'req.body')

    const result =  await userLogin(email,password)
    res.json(result)
}


module.exports = postuserLogin