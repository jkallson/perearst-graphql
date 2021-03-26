const aboutUsResolver = require("./aboutUs")
const contactInformationResolver = require("./contactInformation")
const linksResolver = require("./links")
const pricesResolver = require("./prices")
const workersResolver = require("./workers")

const rootResolver = {
    ...aboutUsResolver,
    ...contactInformationResolver,
    ...linksResolver,
    ...pricesResolver,
    ...workersResolver
}

module.exports = rootResolver