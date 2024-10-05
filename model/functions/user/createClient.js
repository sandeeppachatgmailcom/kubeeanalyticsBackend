const userCollection = require("../../collections/user")
const getserialNumber = require("../serialNumbers/getSerialNumber")
const createClient =async  (data)=>{
    try {
        let { userId, firstname , designation, email, password, isAdmin, lastName, contact, userType, deleted, isActive  }  =   data      
        if(!userId){
            const clients = await userCollection.findOne({$or:[ {email:email},{contact:contact} ]})
            if(clients){
                return {status:false,message:'user already exist '}
            }
            else{
                userId = await getserialNumber('user')
            }
            if(isAdmin) {isAdmin = false;}
            userType = 'Client'
            deleted= false ;
            isActive = true;
            designation =  'DN10000005'
        }
        const newUser =  {userId, firstname , designation, email, password, isAdmin, lastName, contact, userType, deleted, isActive }
        console.log(newUser,'newUsernewUser')
        const user =await  userCollection.updateOne({userId:userId},{$set:newUser} , { upsert:true} ) 
        console.log(user , 'my result ---------------->>>>>>>>>>>>')
        if( user.upsertedCount){
            return {status:true,message:'Clients registration successfull',...newUser}
        }
        else if( user.modifiedCount){
            return {status:true,message:'Clients updation  successfull',...newUser}
        }
} catch (error) {
    
}

}

module.exports = createClient