if (process.env.NODE_ENV == 'production') {
   module.exports = {
      appURL: '',
      secret: 'thebigsecret',
      api_version: 'v1',
   };
} else {
   module.exports = {
      appURL: 'http://localhost:5000',
      secret: 'thebigsecret',
      api_version: '',
   };
}
