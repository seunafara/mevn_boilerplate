if (process.env.NODE_ENV == 'production') {
  module.exports = {
    appURL: '',
    secret: 'thebigsecret',
  };
} else {
  module.exports = {
    appURL: 'http://localhost:5000',
    secret: 'thebigsecret',
  };
}
