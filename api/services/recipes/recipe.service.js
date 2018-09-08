const Recipe = require('./recipe.model');
const ReadPreference = require('mongodb').ReadPreference;
require('./mongo').connect();

function getRecipes() {
  const docQuery = Recipe.find({}).read(ReadPreference.NEAREST);
  return new Promise((resolve, reject) => {
    docQuery
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
