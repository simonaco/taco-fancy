const mongoose = require('mongoose');
const IngredientSchema = new mongoose.Schema(
  {
    name: String,
    quantity: String,
    measure: {
      type: String,
      enum: ['CUP', 'TABLESPOON', 'PINT']
    }
  },
  {
    collection: 'Ingredients',
    read: 'nearest'
  }
);

const Ingredient = mongoose.model('Ingredient', IngredientSchema);
module.exports = Ingredient;
