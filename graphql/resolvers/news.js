const NewsModel = require('../../models/newsModel')

module.exports = {
    news: async () => {
        try {
            return await NewsModel.find().sort({date:-1}).sort({_id: -1}).limit(10);
        } catch (err) {
            throw new err
        }
    },

    createNews: async (args, req) => {
        if (!req.isAuth) {
            throw new Error("Unauthenticated!")
        }
        const news = new NewsModel({
            name: args.newsInput.name,
            content: args.newsInput.content,
            date: args.newsInput.date
        })
        try {
            return await news.save()

        } catch (err) {
            throw new err
        }
    },

    updateNews: async (args, req) => {
        if (!req.isAuth) {
            throw new Error("Unauthenticated!")
        }
        try {
            await NewsModel.updateOne({_id : args.newsInput._id},{$set: {name: args.newsInput.name, content: args.newsInput.content, date: args.newsInput.date}});
            return await NewsModel.findById(args.newsInput._id)
        } catch (err) {
            throw new err
        }
    },

    deleteNews: async (args, req) => {
        if (!req.isAuth) {
            throw new Error("Unauthenticated!")
        }
        try {
            const worker = await NewsModel.findById(args.newsID)
            await NewsModel.deleteOne({_id: args.newsID})
            return worker
        } catch (err) {
            throw new err
        }
    }
}