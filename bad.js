'use strict';

const loadConfig = require('./loadConfig');

// Cache of promise result - safer
let configCache;

module.exports.test = (event, context, callback) => {
  const query = event.queryStringParameters || {};

  Promise.resolve()
    .then(() => {
      return configCache || loadConfig(query.fail === 'true');
    })
    .then(config => {
      // Cache sucessfull promise result not promise itself.
      configCache = config;
      callback(null, { statusCode: 200, body: `${config.successMessage}` });
    })
    .catch(err => {
      callback(err, { statusCode: 200, body: 'Oh noes!' });
    });
};
