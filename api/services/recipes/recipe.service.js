const Recipe = require('./recipe.model');
const Ingredient = require('./ingredient.model');
const Step = require('./step.model');
const ReadPreference = require('mongodb').ReadPreference;
require('./mongo').connect();

function getRecipes(sort, order, page, size) {
  const skips = size * (page - 1);
  const direction = order === 'asc' ? 1 : -1;
  var sortObject = {};
  sortObject[sort] = direction;
  const docQuery = Recipe.find({}).read(ReadPreference.NEAREST);
  return new Promise((resolve, reject) => {
    docQuery
      .skip(skips)
      .limit(size)
      .sort(sortObject)
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
