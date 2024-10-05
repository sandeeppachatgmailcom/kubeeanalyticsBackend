const designationCollection = require("../../collections/designation")



const editDesignation =async (data)=>{
    let {designationId ,designation ,short ,rank,reportingHead  } =data


    try {
        const result =await designationCollection.findOne({designationId:designationId},{$set:{data}})
       if(result.modifiedCount){
            return {status:true,message:'update Success'}
        }
        else if(result.matchCount && !result.modifiedCount) {
            return { status:false,message:'no changes found'}
        }
        else{
            console.log(result,'resultresultresult')
            const temp =await designationCollection.findOne({$or:[
                {designation:designation} ,
                {short:short} ,
                {ran:rank},
                {reportingHea:reportingHead}   
            ]})
            console.log(temp,'temp')
            if(temp){
                return { status:false,message:'data duplication occured, transaction failed '}
            }
                else return { status:false,message:'unKnown reason, trasaction failed  '}
            
        }
        
    } catch (error) {
        
    }
}

module.exports = editDesignation