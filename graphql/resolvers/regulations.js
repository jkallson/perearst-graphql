const RegulationsModel = require('../../models/regulationsModel')

module.exports = {
    regulations: async () => {
        try {
            return await RegulationsModel.find()
        } catch (err) {
            throw new err
        }
    },

    createRegulation: async (args, req) => {
        if (!req.isAuth) {
            throw new Error("Unauthenticated!")
        }
        const regulation = new RegulationsModel({
            name: args.regulationsInput.name,
            content: args.regulationsInput.content
        })
        try {
            return await regulation.save()

        } catch (err) {
            throw new err
        }
    },

    updateRegulation: async (args, req) => {
        if (!req.isAuth) {
            throw new Error("Unauthenticated!")
        }
        try {
            await RegulationsModel.updateOne({_id : args.regulationsInput._id},{$set: {name: args.regulationsInput.name, content: args.regulationsInput.content}});
            return await RegulationsModel.findById(args.regulationsInput._id)
        } catch (err) {
            throw new err
        }
    },

    deleteRegulation: async (args, req) => {
        if (!req.isAuth) {
            throw new Error("Unauthenticated!")
        }
        try {
            const regulation = await RegulationsModel.findById(args.regulationID)
            await RegulationsModel.deleteOne({_id: args.regulationID})
            return regulation
        } catch (err) {
            throw new err
        }
    }
}