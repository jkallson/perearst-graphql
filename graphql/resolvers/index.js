const PricesModel = require("../../models/pricesModel")
const AboutUsModel = require("../../models/aboutUsModel")
const ContactInformationModel = require("../../models/contactInformationModel")
const LinksModel = require("../../models/linksModel")
const WorkersModel = require("../../models/workersModel")

module.exports = {
    aboutUs: async () => {
        try {
            return await AboutUsModel.find()
        } catch (err) {
            throw new err
        }
    },
    prices: async () => {
        try {
            return await PricesModel.find()
        } catch (err) {
            throw new err
        }
    },
    links: async () => {
        try {
            return await LinksModel.find()
        } catch (err) {
            throw new err
        }
    },
    contactInformation: async () => {
        try {
            return await ContactInformationModel.find()
        } catch (err) {
            throw new err
        }
    },
    workers: async () => {
        try {
            return await WorkersModel.find()
        } catch (err) {
            throw new err
        }
    },
    createEvent: (args) => {
        const event = new Event({
            title: args.eventInput.title,
            description: args.eventInput.description,
            price: args.eventInput.price,
            date: new Date(args.eventInput.date)
        })
        return event.save().then(result => {
            console.log(result)
            return {...result._doc}
        }).catch(err => {
            console.log(err)
            throw err;
        })
    }
}