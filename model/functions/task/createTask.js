const taskCollection = require("../../collections/talskList");
const getserialNumber = require("../serialNumbers/getSerialNumber");

const createtask = async (data) => {
    try {
        let { taskId, taskName, designation, createdDate, userId,taskDetails } = data;

        if (!taskId) taskId = await getserialNumber('task')

            createdDate = new Date(Date.now())
            
            if (!taskId || !taskName || !designation  ) return { status: false,message:'missing credential' }
            const taskDescription = {
                taskId: taskId,
                taskName: taskName,
                designation: designation,
                createdDate: createdDate,
                taskDetails: taskDetails,
                createdBy: userId,
                active: true,
                completed:false
            } 
            console.log(taskDescription,'taskDescription')
            const result = await taskCollection.updateOne({taskId: taskId},{$set:taskDescription},{upsert:true})
            console.log(result)
            if(result.upsertedCount) return {...taskDescription,status:true,message:'task Created Successfull'}
        else if (result.modifiedCount)  return {...taskDescription,status:true,message:'task updation Successfull'}
        else if (!result.modifiedCount && !result.upsertedCount && result.acknowledged  )  return {...taskDescription,status:true,message:'no changes found '}
        
    } catch (error) {

    }
}

module.exports = createtask