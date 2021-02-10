const express = require('express');
const router = express.Router();
const User = require('../../../models/User');
const authController = require('../../../controllers/auth');
const passport = require('passport');
const { check, body } = require('express-validator');

/**
 * @route POST api/${version}/auth/register
 * @desc Register the user
 * @access Public
 */

router.post(
   '/register',
   [
      check('username')
         .not()
         .isEmpty()
         .withMessage('Username is required')
         .trim()
         .custom((value, { req }) => {
            return User.findOne({ username: req.body.username }).then(
               (userDoc) => {
                  if (userDoc) {
                     return Promise.reject('Username already in use');
                  }
               }
            );
         }),
      check('email')
         .not()
         .isEmpty()
         .isEmail()
         .trim()
         .withMessage('Please enter a valid email')
         .custom((value, { req }) => {
            // console.log('value', value);
            return User.findOne({ email: req.body.email }).then((userDoc) => {
               if (userDoc) {
                  return Promise.reject('E-mail already in use');
               }
            });
         })
         .normalizeEmail(),
      check('password')
         .not()
         .isEmpty()
         .trim()
         .withMessage('Please enter a password'),
      check('confirm_password')
         .not()
         .isEmpty()
         .trim()
         .withMessage('Please enter passowrd again'),
      body('confirm_password')
         .custom((value, { req }) => {
            if (value !== req.body.password) {
               // console.log('value', value);
               throw new Error('Password has to be matched!');
            } else {
               return true;
            }
         })
         .trim(),
   ],
   authController.register
);

/**
 * @route POST api/${version}/auth/login
 * @desc Login the user
 * @access Public
 */
router.post(
   '/login',
   [
      check('username')
         .not()
         .isEmpty()
         .trim()
         .withMessage('Please enter your username')
         .custom((value, { req }) => {
            return User.findOne({ username: req.body.username }).then(
               (userDoc) => {
                  if (!userDoc) {
                     return Promise.reject('User not found');
                  }
               }
            );
         }),
      check('password')
         .not()
         .isEmpty()
         .trim()
         .withMessage('Please enter a password'),
   ],
   authController.login
);

/**
 * @route POST api/users/profile
 * @desc Return the User's Data
 * @access Private
 */

router.get(
   '/profile',
   passport.authenticate('jwt', { session: false }),
   authController.profile
);
module.exports = router;
