const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../config/keys');
const User = require('../models/User');

exports.getLogin = (req, res) => {
  res.render('admin/login', {
    pageTitle: 'Login',
    path: '/login'
  });
};

exports.postLogin = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  //Find user by email
  User.findOne({email})
    .then(user => {
      // check for user
      if(!user) {
        res.render('admin/login', {
          pageTitle: 'Login',
          error: 'User not found',
          path: '/login'
        });    
      }
      // Check password
      bcrypt.compare(password, user.password)
        .then(isMatch => {
          if(isMatch) {
            // User Matched
            const payload = { id: user.id, name: user.name } // Create jwt payload
            // Sign Token
            jwt.sign(
              payload, 
              keys.secretOrKey, 
              { expiresIn: 3600 }, 
              (err, token) => {
                res.render('admin/landing', {
                  pageTitle: 'Admin',
                  success: 'True',
                  user: user.name,
                  token: 'Bearer ' + token,
                  path: '/landing'
                });
              }
            );
          }  else {
            res.render('admin/login', {
              pageTitle: 'Login',
              error: 'Password incorrect',
              path: '/login'
            }); 
          }
        });
    });
};

// @route   Get admin/register
// @desc    Register User
// @access  Public
exports.getRegister = (req, res) => {
  res.render('admin/register', {
    pageTitle: 'Register',
    path: '/register'
  });
};

// @route   Get admin/register
// @desc    Register User
// @access  Public
exports.postRegister = (req, res) => {

  User.findOne({ email: req.body.email})
    .then(user => {
     if(user) {
      //errors.email = 'Email already exists';
      console.log('Fail User already exist');
      res.render('admin/register', {
        pageTitle: 'Register',
        error: 'Email already exists',
        path: '/register'
      });
     } else {
      const newUser = new User({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if(err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => {
              res.render('admin/login', {
                pageTitle: 'login',
                path: '/login'
              });
            })
            .catch(err => console.log(err));
        });
      });
     }
  });
};

exports.getLanding = (req,res) => {
  res.render('admin/landing', {
    pageTitle: 'Admin',
    path: '/admin'
  });
}
