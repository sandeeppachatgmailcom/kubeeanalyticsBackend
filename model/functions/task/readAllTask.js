const userCollection = require("../../collections/user");

const readAllTask = async (userId) => {
    try {
      console.log(userId, 'Fetching tasks for user...');
  
      const data = await userCollection.aggregate([
        {
          $match: {
            userId: userId
          }
        },
        {
          $lookup: {
            from: 'tasks',
            foreignField: 'designation',
            localField: 'designation',
            as: 'workList'
          }
        },
        {
          $unwind:'$workList'
        },
        {
          $addFields:{
            active:'$workList.active',
            createdDate:'$workList.createdDate',
            designation:'$workList.designation',
            taskId:'$workList.taskId',
            taskName:'$workList.taskName',
            createdBy:'$workList.createdBy'
          }
        },
        {
          $lookup:{
            from:'users',
            localField:'createdBy',
            foreignField:'userId',
            as :'createdby'  
          }
        } 
        
      ])  // Use .toArray() to get the result from the cursor
  
      console.log(data, 'Retrieved data');
      return data;
    } catch (error) {
      console.error('Error fetching tasks:', error);
      throw error;
    }
  };
  
module.exports = readAllTask

 