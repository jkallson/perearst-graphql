const WorkersModel = require("../../models/workersModel")

module.exports = {
    workers: async () => {
        try {
            return await WorkersModel.find()
        } catch (err) {
            throw new err
        }
    }
}