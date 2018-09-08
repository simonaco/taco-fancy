const { buildSchema } = require('graphql');
const typeDefs = buildSchema(`
enum Measure {
    CUP
    TABLESPOON
}
enum Category {
    SHELLS
    BASE_LAYERS
    MIXINS
    SEASONINGS
    CONDIMENTS
    FULL_TACOS
}
type Ingredient {
    name: String!
    quantity: Int
    measure: Measure
}
type Step {
    number: Int
    description: String
    time: Int
}
type Recipe {
    id: ID
    category: Category
    title: String
    description: String
    ingredients: [Ingredient]
    directions: String
    tags: String
    
}
type Query {
    findAll:[Recipe]
}
`);
module.exports = {
  schema: typeDefs
};
