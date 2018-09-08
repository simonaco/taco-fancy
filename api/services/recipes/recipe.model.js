const mongoose = require('mongoose');
const Ingredient = require('./ingredient.model');
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
    ingredientId: String,
    directions: String,
    tags: String
  },
  {
    collection: 'Recipes',
    read: 'nearest'
  }
);
RecipeSchema.methods.ingredients = () => {
  return Ingredient.findById(this.ingredientId);
};
const Recipe = mongoose.model('Recipe', RecipeSchema);
module.exports = Recipe;
