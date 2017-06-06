'use strict';

const loadConfig = require('./loadConfig');

// Cache of promise - DANGER!
let configCache;

module.exports.test = (event, context, callback) => {
  const query = event.queryStringParameters || {};

  // Cache promise. Oopsie daisies!
  configCache = configCache || loadConfig(query.fail === 'true');
  configCache
    .then(config => {
      callback(null, { statusCode: 200, body: `${config.successMessage}` });
    })
    .catch(err => {
      callback(err, { statusCode: 200, body: 'Oh noes!' });
    });
};
