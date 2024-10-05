const readAllTask = require("../model/functions/task/readAllTask")

const postUserWiseWorkList = async (req, res) => {
    try {
        console.log(req.body,'req.body')
        const {userId }= req.body
        const result = await readAllTask(userId)
        res.json(result)
    } catch (error) {

    }

}


module.exports = postUserWiseWorkList