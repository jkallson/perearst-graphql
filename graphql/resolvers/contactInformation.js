const ContactInformationModel = require("../../models/contactInformationModel")

module.exports = {
    contactInformation: async () => {
        try {
            return await ContactInformationModel.find()
        } catch (err) {
            throw new err
        }
    }
}