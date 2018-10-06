const { graphql } = require('graphql');
const schema = require('./schema');
const root = require('./root');

module.exports = async function(context, req) {
  const body = req.body;
  context.log(`GraphQL request: ${body}`);

  await graphql(
    schema.schema,
    body.query,
    root,
    null,
    body.variables,
    body.operationName
  ).then(response => {
    context.res = {
      body: response
    };
  });
};
