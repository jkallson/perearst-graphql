const LinksModel = require("../../models/linksModel")

module.exports = {
    links: async () => {
        try {
            return await LinksModel.find()
        } catch (err) {
            throw new err
        }
    }
}