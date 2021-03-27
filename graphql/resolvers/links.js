const LinksModel = require("../../models/linksModel")

module.exports = {
    links: async () => {
        try {
            return await LinksModel.find()
        } catch (err) {
            throw new err
        }
    },

    createLink: async (args, req) => {
        if (!req.isAuth) {
            throw new Error("Unauthenticated!")
        }
        const link = new LinksModel({
            name: args.linkInput.name,
            link: args.linkInput.link,
            orderIndex: args.linkInput.orderIndex
        })
        try {
            return await link.save()

        } catch (err) {
            throw err
        }
    },

    deleteLink: async (args, req) => {
        if (!req.isAuth) {
            throw new Error("Unauthenticated!")
        }
        try {
            const link = await LinksModel.findById(args.linkID)
            await LinksModel.deleteOne({_id: args.linkID})
            return link
        } catch (err) {
            throw err
        }
    },

    updateLink: async (args, req) => {
        if (!req.isAuth) {
            throw new Error("Unauthenticated!")
        }
        try {
            await LinksModel.updateOne({_id : args.linkInput._id},{$set: {name: args.linkInput.name, link: args.linkInput.link, orderIndex: args.linkInput.orderIndex}});
            return await LinksModel.findById(args.linkInput._id)
        } catch (err) {
            throw err
        }
    }
}