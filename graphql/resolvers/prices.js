const PricesModel = require("../../models/pricesModel")

module.exports = {
    prices: async () => {
        try {
            const prices = await PricesModel.find()
            const set = new Set(prices.map(item => item.class))
            let nestedPrices = []
            set.forEach(priceClass => {
                let filteredPrices = {}
                filteredPrices.data = prices.filter(price => price.class === priceClass)
                filteredPrices.class = priceClass
                nestedPrices.push(filteredPrices)
            })
            return nestedPrices
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
    },

    removePrice: async (args, req) => {
        if (!req.isAuth) {
            throw new Error("Unauthenticated!")
        }
        try {
            const price = await PricesModel.findById(args.priceID)
            await PricesModel.deleteOne({_id: args.priceID})
            return price
        } catch (err) {
            throw err
        }
    },

    updatePrice: async (args, req) => {
        if (!req.isAuth) {
            throw new Error("Unauthenticated!")
        }
        try {
            await PricesModel.updateOne({_id : args.priceInput._id},{$set: {name: args.priceInput.name, price: args.priceInput.price, class: args.priceInput.class}});
            return await PricesModel.findById(args.priceInput._id)
        } catch (err) {
            throw err
        }
    }
}
