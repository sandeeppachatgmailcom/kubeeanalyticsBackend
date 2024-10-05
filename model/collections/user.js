const mongoose = require('mongoose');

// Define the schema for the User model
const userSchema = new mongoose.Schema(
    {
        userId:{ type: String, required: true,unique:true },
        firstname: { type: String, required: true },
        designation:{ type: String, required: true,default:'DN10000011' },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        isAdmin:{type:Boolean,required:true,default:false},
        lastName:{ type: String  },
        contact:{ type: String, required: true },
        userType:{ type: String, default:'Client',required:true},
        deleted: { type: Boolean, default:false,required:true}   ,
        isActive:{ type: Boolean, default:false,required:true}     
    }
);

// Create the User model from the schema
const userCollection = mongoose.model('User', userSchema);

module.exports = userCollection;
{
    
}