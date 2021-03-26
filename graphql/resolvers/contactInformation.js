const ContactInformationModel = require("../../models/contactInformationModel")

module.exports = {
    contactInformation: async () => {
        try {
            return await ContactInformationModel.find()
        } catch (err) {
            throw new err
        }
    },

    updateContactInformation: async (args, req) => {
        if (!req.isAuth) {
            throw new Error("Unauthenticated!")
        }
        try {
            await ContactInformationModel.updateOne({_id : args.contactInformationInput._id},{$set: {address: args.contactInformationInput.address, phone: args.contactInformationInput.phone, email: args.contactInformationInput.email}});
            return await ContactInformationModel.findById(args.contactInformationInput._id)
        } catch (err) {
            throw err
        }
    }
}