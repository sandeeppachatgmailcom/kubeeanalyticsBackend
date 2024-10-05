const userCollection = require("../collections/user")
const bcrypt = require('bcrypt') 


const adminLogin =async(email,password)=>{
    const result = await userCollection.findOne({email:email,isAdmin:true})
    if(result){
        const validate = await bcrypt.compare(password,result.password)
        if(validate==true){
            return {result:true,message:'success'}
        }
        else return {result:false,message:'wrong credentials '}
    }
    else{
         return {result:false,message:'user does not exist'}
    }
        
}

module.exports = adminLogin