const designationCollection = require("../collections/designation")
const userCollection = require("../collections/user")
const bcrypt = require('bcrypt') 


const userLogin =async(email,password)=>{
    const result = await userCollection.findOne({email:email})
    if(result){
        const validate = await bcrypt.compare(password,result.password)
        result.password = null
        console.log(result,validate,'validatevalidate')
        if(validate==true){
            let temp =  JSON.parse(JSON.stringify(result)) 
            const designation =await designationCollection.findOne({designationId:temp.designation})
            return {...temp,result:true,message:'success',...JSON.parse(JSON.stringify(designation)) }
        }
        else return {result:false,message:'wrong credentials '}
    }
    else{
         return {result:false,message:'user does not exist'}
    }
        
}

module.exports = userLogin