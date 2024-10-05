const productCollection = require("../../collections/products");

const readProducts =async (searchKey) => {
    console.log(searchKey,'searchKey')
    const result = await productCollection.find({
        $or: [
            { itemName: { $regex: searchKey ||'', $options: 'i' } }, // Case-insensitive regex search
            { easyCode: { $regex: searchKey ||'', $options: 'i' } },
            { itemCode: { $regex: searchKey ||'', $options: 'i' } }
        ] 
        
    }) 
    console.log(result,'resultresult')
    return result
};

module.exports = readProducts
