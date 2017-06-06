'use strict';

const loadConfig = require('./loadConfig');

// Only imports in global scope :D

module.exports.test = (event, context, callback) => {
  const query = event.queryStringParameters || {};

  loadConfig(query.fail === 'true')
    .then(config => {
      callback(null, { statusCode: 200, body: `${config.successMessage}` });
    })
    .catch(err => {
      callback(err, { statusCode: 200, body: 'Oh noes!' });
    });
};
