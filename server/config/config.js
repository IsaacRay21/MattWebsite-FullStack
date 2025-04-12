module.exports = {
  development: {
    username: process.env.DB_DEV_USER,
    password: process.env.DB_DEV_PASS,
    database: process.env.DB_DEV_NAME,
    host: process.env.DB_DEV_HOST,
    dialect: 'mysql'
  },
  test: {
    username: process.env.DB_TEST_USER || 'root',
    password: process.env.DB_TEST_PASS,
    database: process.env.DB_TEST_NAME || 'database_test',
    host: process.env.DB_TEST_HOST || '127.0.0.1',
    dialect: 'mysql'
  },
  production: {
    username: process.env.DB_PROD_USER,
    password: process.env.DB_PROD_PASS,
    database: process.env.DB_PROD_NAME,
    host: process.env.DB_PROD_HOST,
    dialect: 'mysql'
  }
};