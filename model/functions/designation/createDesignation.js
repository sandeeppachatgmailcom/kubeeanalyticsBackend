const designationCollection = require("../../collections/designation")
const getserialNumber = require("../serialNumbers/getSerialNumber")

const createDesignation  = async(data)=>{
    console.log(data)

    let {designationId ,designation ,short ,rank,reportingHead  } =data
    let result = await designationCollection.findOne({$or:[
        {designation:designation},
        {short:short},
        {rank:rank}
    ]})
         
        if(!result){ 
            console.log(result,'resultresult')
            !designationId? designationId = await getserialNumber('designation'):''
            const newData = new designationCollection({
            designationId:designationId  ,
            designation:designation  ,
            short:short  ,
            reportingHead:reportingHead,
            rank:rank   
            })
            console.log({
                designationId:designationId  ,
                designation:designation  ,
                short:short  ,
                rank:rank ,
                reportingHead:reportingHead  
                })
            const temp= await newData.save()
            return  temp  
        }
        else{
            return {status:true,message:'user already exist'}
        }

    
}

module.exports = createDesignation