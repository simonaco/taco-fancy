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
  var countQuery = Recipe.count();
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
        if (recipes.length === 0)
          resolve('There are no results matching your query.');
        else {
          countQuery.exec().then(count => {
            resolve({ items: recipes, totalItems: count });
          });
        }
      })
      .catch(err => {
        reject(err.status);
      });
  });
}

function getRecipe(id) {
  const docQuery = Recipe.find({ _id: id }).read(ReadPreference.NEAREST);
  return new Promise((resolve, reject) => {
    docQuery
      .populate('steps')
      .populate('ingredients')
      .exec()
      .then(recipes => {
        if (recipes.length === 0)
          resolve('There are no results matching your query.');
        else resolve(recipes[0]);
      })
      .catch(err => {
        reject(err.status);
      });
  });
}

function updateRecipe(id, taco) {
  const docQuery = Recipe.findOneAndUpdate({ _id: id }, taco);
  return new Promise((resolve, reject) => {
    docQuery
      .populate('steps')
      .populate('ingredients')
      .exec()
      .then(recipe => {
        if (!recipe) {
          resolve('There are no results matching your query.');
        } else {
          resolve(recipe);
        }
      })
      .catch(err => {
        reject(err.status);
      });
  });
}

module.exports = {
  getRecipes,
  getRecipe,
  updateRecipe
};
