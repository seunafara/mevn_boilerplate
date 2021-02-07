const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');
require('dotenv/config');
const key = process.env.APP_SECRET;
const User = require('../models/User');
const { validationResult } = require('express-validator');

exports.register = (req, res) => {
   let { name, username, email, password, confirm_password } = req.body;

   const errors = validationResult(req);
   if (!errors.isEmpty()) {
      return res.status(422).json({
         success: false,
         errors: errors.array(),
      });
   }

   // The data is valid and now we can register user
   let newUser = new User({
      name,
      username,
      password,
      email,
   });
   // Hash the password
   bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
         if (err) throw err;
         newUser.password = hash;
         newUser.save().then((user) => {
            return res.status(200).json({
               success: true,
               message: 'User is now registered.',
            });
         });
      });
   });
};

exports.login = (req, res) => {
   User.findOne({ username: req.body.username }).then((user) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
         return res.status(422).json({
            success: false,
            errors: errors.array(),
         });
      }

      if (!user) {
         return res.status(404).json({
            message: 'Username not found',
            success: false,
         });
      }

      // If there is user we compare the password
      bcrypt.compare(req.body.password, user.password).then((isMatch) => {
         if (isMatch) {
            // User's password is correct and we need to send the JSON Token for user
            const payload = {
               _id: user._id,
               username: user.username,
               name: user.name,
               email: user.email,
            };
            //omit user password
            var userObj = user.toObject();
            delete userObj.password;
            //end
            jwt.sign(payload, key, { expiresIn: 604800 }, (err, token) => {
               res.status(200).json({
                  success: true,
                  user: userObj,
                  token: `Bearer ${token}`,
                  message: 'You are now logged in',
               });
            });
         } else {
            return res.status(404).json({
               message: 'Incorrect password',
               success: false,
            });
         }
      });
   });
};

exports.profile = (req, res) => {
   return res.json({
      user: req.user,
   });
};
