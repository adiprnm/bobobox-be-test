const fs = require('fs');

require('dotenv').config()

const env = process.env

module.exports = {
  username: env.DB_USERNAME || 'root',
  password: env.DB_PASSWORD || '',
  database: env.DB_NAME || 'express_skeleton',
  host: env.DB_HOST || '127.0.0.1',
  dialect: env.DB_DIALECT || 'mariadb'
};
