const { graphql } = require('graphql');
const schema = require('./schema');
const root = require('./root');

module.exports = async function(context, req) {
  await graphql(schema.schema, req.body, root)
    .then(res => {
      context.res = {
        body: res
      };
    })
    .catch(err => {
      context.res = {
        status: 500,
        body: err
      };
    });
};
