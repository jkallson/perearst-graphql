const aboutUsResolver = require("./aboutUs")
const contactInformationResolver = require("./contactInformation")
const linksResolver = require("./links")
const pricesResolver = require("./prices")
const workersResolver = require("./workers")
const authResolver = require("./auth")
const newsResolver = require("./news")
const regulationsResolver = require("./regulations")

const rootResolver = {
    ...aboutUsResolver,
    ...contactInformationResolver,
    ...linksResolver,
    ...pricesResolver,
    ...workersResolver,
    ...authResolver,
    ...newsResolver,
    ...regulationsResolver
}

module.exports = rootResolver