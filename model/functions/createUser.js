const serialNumberCollection = require('../collections/serialNumbers')
const userCollection = require('../collections/user')
const bcrypt = require("bcrypt")
const getserialNumber = require('./serialNumbers/getSerialNumber')


async function createUser({ name, email, password,userId,designation }) {
    try {
        const userExist = await userCollection.findOne({ email: email })
        if (userExist) {
            return { status: false, message: 'Email already exist' }
        }
            !userId ? userId= await getserialNumber('user'):''
            const hashedpassword = await bcrypt.hash(password, 10)
            const newUser = new userCollection({
                userId:userId,
                firstname: name,
                designation:designation?.length?designation: 'DN10000010',
                email: email,
                password: hashedpassword
            });
            const result = await newUser.save();
            if (result)
                return { status: true, message: 'user creation success' }
            else return { status: false, message: 'unknow reason' }
        
    } catch (error) {
          return { status: false, message: `${error} Error on insertion ` }
    };
}
module.exports = createUser