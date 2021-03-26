const { buildSchema } = require('graphql')

module.exports = buildSchema(`
        type Event {
            _id: ID!
            title: String!
            description: String!
            price: Float!
            date: String!
        }
        
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
        
        type Times {
            day: String!
            time: String!
        }
        
        type Workers {
            name: String!
            position: String!
            imageUrl: String!
            receptionTimes: [Times]!
            mobileTimes: [Times]!
        }
        
        input EventInput {
            title: String!
            description: String!
            price: Float!
            date: String!
        }
        
        type RootQuery {
            events: [Event!]!
            aboutUs: [AboutUsText!]!
            prices: [Prices!]!
            contactInformation: [ContactInformation!]!
            links: [Links!]!
            workers: [Workers!]!
        }
        
        type RootMutation {
            createEvent(eventInput: EventInput): Event
        }
        
        schema {
            query: RootQuery
            mutation: RootMutation
        }
        `)