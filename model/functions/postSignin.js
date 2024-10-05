const bcrypt = require('bcrypt')
const userCollection = require('../collections/user')
const PostSignIn = async (req,res)=>{
    try {
        const {email,password} = req.body
        res.cookie('user',req.sessionID,{maxAge:3600000,httpOnly:true})
        const result = await userCollection.findOne({email:email})
        console.log(result,'-----------------')
        if(!result) res.render('login',{message:'user does not exist '})
        const validate = await bcrypt.compare(password,result.password)
        if(validate){
            res.render('homePage',{username :req.body.email})
        } 
        else{
            res.render('login',{message:'Wrong Credentials'})
        }
        } catch (error) {
        
        }
}
module.exports = PostSignIn