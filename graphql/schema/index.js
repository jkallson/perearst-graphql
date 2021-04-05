const { buildSchema } = require('graphql')

module.exports = buildSchema(`
       type AboutUsText {
            _id: ID!
            text: String!
        }
        
        type Prices {
            _id: ID!
            name: String!
            price: String!
            class: String!
        }
        type PricesQuery {
            data: [Prices!]!
            class: String!
        }
        
        input PriceInput {
            _id: ID
            name: String!
            price: String!
            class: String!      
        }
        
        input ContactInformationInput {
            _id: ID!
            address: String!
            email: String!
            phone: String!
        }
        
        input LinkInput {
            _id: ID
            name: String!
            link: String!
            orderIndex: Int!
        }
        
        input WorkerInput {
            _id: ID
            name: String!
            position: String!
            imageUrl: String!
            receptionTimes: [TimeInput!]!
            mobileTimes: [TimeInput!]!
        }
        
        input TimeInput {
            day: String!
            time: String!
        }
        
        input AboutUsTextInput {
            _id: ID!
            text: String!
        }
        
        type ContactInformation {
            _id: ID!
            address: String!
            phone: String!
            email: String!
        }
        
        type Links {
            _id: ID!
            name: String!
            link: String!
            orderIndex: Int
        }
        
        type User {
            _id: ID!    
            username: String!
            password: String
        }
        
        type AuthData {
            userId: ID!
            token: String!
            tokenExpiration: Int!       
        }
        
        type Times {
            day: String!
            time: String!
        }
        
        type Workers {
            _id: ID!
            name: String!
            position: String!
            imageUrl: String!
            receptionTimes: [Times]!
            mobileTimes: [Times]!
        }
        type News {
            _id: ID!
            name: String!
            content: String!
            date: String!
        }
        
        input NewsInput {
            _id: ID
            name: String!
            content: String!
            date: String!
        }
        
        input RegulationsInput {
            _id: ID
            name: String!
            content: String!
        }
        
        type Regulation {
            _id: ID!
            name: String!
            content: String!
        }
        
        type RootQuery {
            aboutUs: AboutUsText!
            prices: [PricesQuery!]!
            contactInformation: ContactInformation!
            links: [Links!]!
            workers: [Workers!]!
            login(username: String!, password: String!): AuthData!
            news: [News!]!
            regulations: [Regulation!]!
        }
        
        type RootMutation {
            createPrice(priceInput: PriceInput): Prices
            removePrice(priceID: ID!): Prices
            updatePrice(priceInput: PriceInput): Prices
            updateContactInformation(contactInformationInput: ContactInformationInput): ContactInformation
            updateAboutUsText(aboutUsTextInput: AboutUsTextInput) : AboutUsText
            createLink(linkInput: LinkInput!): Links
            deleteLink(linkID: ID!): Links
            updateLink(linkInput: LinkInput!): Links
            updateLinkOrder(linkInput: [LinkInput!]!) : [Links!]!
            createWorker(workerInput: WorkerInput!): Workers
            deleteWorker(workerID: ID!): Workers
            updateWorker(workerInput: WorkerInput!): Workers
            createNews(newsInput: NewsInput!): News
            updateNews(newsInput: NewsInput!): News
            deleteNews(newsID: ID!): News
            createRegulation(regulationsInput: RegulationsInput!): Regulation
            updateRegulation(regulationsInput: RegulationsInput!): Regulation
            deleteRegulation(regulationID: ID!): Regulation
        }
        
        schema {
            query: RootQuery
            mutation: RootMutation
        }
        `)