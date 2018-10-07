const mongoose = require('mongoose');
var Schema = mongoose.Schema;
const RecipeSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      enum: [
        'SHELLS',
        'BASE_LAYERS',
        'MIXINS',
        'SEASONINGS',
        'CONDIMENTS',
        'FULL_TACOS'
      ]
    },
    title: String,
    description: String,
    ingredients: [{ type: Schema.Types.ObjectId, ref: 'Ingredient' }],
    steps: [{ type: Schema.Types.ObjectId, ref: 'Step' }],
    tags: [String]
  },
  {
    collection: 'Recipes',
    read: 'nearest'
  }
);
const Recipe = mongoose.model('Recipe', RecipeSchema);
module.exports = Recipe;
