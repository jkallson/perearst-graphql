const AboutUsModel = require("../../models/aboutUsModel")

module.exports = {
    aboutUs: async () => {
        try {
            return await AboutUsModel.find()
        } catch (err) {
            throw new err
        }
    }
}