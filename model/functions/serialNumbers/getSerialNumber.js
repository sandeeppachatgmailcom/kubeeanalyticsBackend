const serialNumberCollection = require("../../collections/serialNumbers");

const getserialNumber = async (collection) => {
    const result = await serialNumberCollection.findOneAndUpdate({ collectionName: collection }, { $inc: { nextNumber: 1 } })
    if (result) {
        return result.prefix + result.nextNumber
    }
    else {
        return null
    }
}

module.exports = getserialNumber