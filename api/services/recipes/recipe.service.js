const Recipe = require('./recipe.model');
const Ingredient = require('./ingredient.model');
const Step = require('./step.model');
const ReadPreference = require('mongodb').ReadPreference;
require('./mongo').connect();

function getRecipes() {
  const docQuery = Recipe.find({}).read(ReadPreference.NEAREST);
  return new Promise((resolve, reject) => {
    docQuery
      .populate('steps')
      .populate('ingredients')
      .exec()
      .then(recipes => {
        resolve(recipes);
      })
      .catch(err => {
        reject(err.status);
      });
  });
}

module.exports = {
  getRecipes
};
