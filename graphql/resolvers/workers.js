const WorkersModel = require("../../models/workersModel")

module.exports = {
    workers: async () => {
        try {
            return await WorkersModel.find()
        } catch (err) {
            throw new err
        }
    },

    createWorker: async (args, req) => {
        if (!req.isAuth) {
            throw new Error("Unauthenticated!")
        }
        const worker = new WorkersModel({
            name: args.workerInput.name,
            position: args.workerInput.position,
            imageUrl: args.workerInput.imageUrl,
            receptionTimes: args.workerInput.receptionTimes,
            mobileTimes: args.workerInput.mobileTimes
        })
        try {
            return await worker.save()

        } catch (err) {
            throw err
        }
    },

    deleteWorker: async (args, req) => {
        if (!req.isAuth) {
            throw new Error("Unauthenticated!")
        }
        try {
            const worker = await WorkersModel.findById(args.workerID)
            await WorkersModel.deleteOne({_id: args.workerID})
            return worker
        } catch (err) {
            throw err
        }
    },

    updateWorker: async (args, req) => {
        if (!req.isAuth) {
            throw new Error("Unauthenticated!")
        }
        try {
            await WorkersModel.updateOne({_id : args.workerInput._id},{$set: {name: args.workerInput.name, position: args.workerInput.position, imageUrl: args.workerInput.imageUrl,receptionTimes: args.workerInput.receptionTimes,mobileTimes: args.workerInput.mobileTimes}});
            return await WorkersModel.findById(args.workerInput._id)
        } catch (err) {
            throw err
        }
    }
}