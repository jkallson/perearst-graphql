const express = require("express")
const { graphqlHTTP } = require("express-graphql")
const mongoose = require("mongoose")
const app = express();
const graphQlSchema = require("./graphql/schema")
const graphQlResolvers = require("./graphql/resolvers")
const isAuth = require('./middleware/isAuth')
require("dotenv/config");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', "*")
    res.setHeader('Access-Control-Allow-Methods', "POST, GET, OPTIONS")
    res.setHeader('Access-Control-Allow-Headers', "Content-Type, Authorization")
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    }
    next();
})

app.use(isAuth)

app.use('/graphql', graphqlHTTP({
        schema: graphQlSchema,
        rootValue: graphQlResolvers,
        graphiql: true,
    }),
);

const port = process.env.PORT || "3000";

mongoose.connect(process.env.MONGO_DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
}).then(() => {
    console.log("Successfully connected to the database");
    app.listen(port);
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});