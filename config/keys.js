if (process.env.NODE_ENV == 'production') {
  module.exports = {
    mongoURL: '',
    secret: 'thebigsecret',
  };
} else {
  module.exports = {
    mongoURL: 'mongodb://localhost:27017/mevn_auth',
    secret: 'thebigsecret',
  };
}
