const recipes = require('./recipe.service');
const appInsights = require('applicationinsights');
appInsights.setup();
const context = appInsights.defaultClient.context;
context.tags[context.keys.cloudRole] = 'backend';
appInsights.start();
module.exports = async function(context, req) {
  const SIZE = 10;
  await recipes
    .getRecipes(req.body.sort, req.body.order, req.body.page, SIZE)
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
