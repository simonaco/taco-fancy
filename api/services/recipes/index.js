const recipes = require('./recipe.service');
module.exports = async function(context, req) {
  await recipes
    .getRecipes()
    .then(recipes => {
      context.res = {
        body: recipes
      };
    })
    .catch(err => {
      context.res = {
        status: 500,
        body: err
      };
    });
};
