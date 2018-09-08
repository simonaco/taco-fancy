const axios = require('axios');
module.exports = {
  findAll: (root, args, context) =>
    axios
      .get('http://tacofancy-api.azurewebsites.net/api/recipes')
      .then(res => {
        return res.data;
      })
};
