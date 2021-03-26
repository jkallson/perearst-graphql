const PricesModel = require("../../models/pricesModel")

module.exports = {
    prices: async () => {
        try {
            return await PricesModel.find()
        } catch (err) {
            throw new err
        }
    }
}
