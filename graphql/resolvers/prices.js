const PricesModel = require("../../models/pricesModel")

module.exports = {
    prices: async () => {
        try {
            return await PricesModel.find()
        } catch (err) {
            throw new err
        }
    },

    createPrice: async (args, req) => {
        if (!req.isAuth) {
            throw new Error("Unauthenticated!")
        }
        const price = new PricesModel({
            name: args.priceInput.name,
            price: args.priceInput.price,
            class: args.priceInput.class
        })
        try {
            return await price.save()

        } catch (err) {
            throw err
        }
    }
}
