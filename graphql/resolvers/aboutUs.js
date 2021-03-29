const AboutUsModel = require("../../models/aboutUsModel")

module.exports = {
    aboutUs: async () => {
        try {
            return await AboutUsModel.findOne()
        } catch (err) {
            throw new err
        }
    },

    updateAboutUsText: async (args, req) => {
        if (!req.isAuth) {
            throw new Error("Unauthenticated!")
        }
        try {
            await AboutUsModel.updateOne({_id : args.aboutUsTextInput._id},{$set: {text: args.aboutUsTextInput.text,}});
            return await AboutUsModel.findById(args.aboutUsTextInput._id)
        } catch (err) {
            throw err
        }
    }
}