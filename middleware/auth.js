const jwt = require('jsonwebtoken');
const User = require('../models/User');
require('dotenv/config');
const key = process.env.APP_SECRET;

exports.authenticateToken = (req, res, next) => {
   // const token = req.header('Authorization');
   // console.log('token', token);
   console.log('req.headers', req.headers);
   const authHeader = req.headers['authorization'];
   const token = authHeader && authHeader.split(' ')[1];
   console.log(token);
   if (!token) {
      return res.status(401).json({ message: 'Authorization denied!' });
   }
   let decodedUser;
   try {
      decodedUser = jwt.verify(token, key);
      req.user = decodedUser;
      console.log('decodedUser', decodedUser);
      next();
   } catch (err) {
      res.status(403).json({ message: 'Token is not valid!' });
   }

   // jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
   //     console.log(err)
   //     if (err) return res.status(403).json({ message: 'Token is not valid!' })
   //     req.user = user;
   //     next()
   // })
};
