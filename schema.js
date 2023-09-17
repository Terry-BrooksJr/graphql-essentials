import { buildSchema } from "graphql";

const schema = buildSchema(`

    type Product {
        id: ID
        name: String
        desc: String
        price: Float
        sold_out: Boolean
    }
    type Query {
        Product: Product
    }
`)

export default schema;