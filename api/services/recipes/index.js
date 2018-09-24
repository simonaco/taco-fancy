const recipes = require('./recipe.service');
const appInsights = require('applicationinsights');
appInsights.setup();
const context = appInsights.defaultClient.context;
context.tags[context.keys.cloudRole] = 'backend';
appInsights.start();
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
