const mongoose = require('mongoose');
const IngredientSchema = new mongoose.Schema(
  {
    name: String,
    quantity: String,
    directions: String,
    size: String,
    measure: {
      type: String,
      enum: ['CUP', 'TABLESPOON', 'PINT', 'HANDFUL', 'CLOVES']
    }
  },
  {
    collection: 'Ingredients',
    read: 'nearest'
  }
);

const Ingredient = mongoose.model('Ingredient', IngredientSchema);
module.exports = Ingredient;
