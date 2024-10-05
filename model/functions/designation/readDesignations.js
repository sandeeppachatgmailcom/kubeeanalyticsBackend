const designationCollection = require("../../collections/designation")

const readDesignations =async (designation)=>{
    const result =await designationCollection.aggregate([ 
        {
            $match:{
                designationId:designation
            }
        },
        {
            $graphLookup:{
                from:'designations',
                startWith:'$designationId',
                connectFromField:'designationId',
                connectToField:'reportingHead',
                as: "subordinates",
                depthField: "depth"  
            }
        }
    ])
    console.log(result,'resultresultresult')
    return result
}

module.exports = readDesignations