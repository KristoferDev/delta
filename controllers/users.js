const User = require('../models/User');

exports.getLogin = (req, res) => {
  res.render('login', {
    pageTitle: 'Login',
    path: '/login'
  });
};

exports.postLogin = (req, res) => {
  console.log('Login in');
  res.render('login', {
    pageTitle: 'Login',
    path: '/login'
  });
};

exports.getRegister = (req, res) => {
  res.render('register', {
    pageTitle: 'Register',
    path: '/register'
  });
};

exports.postRegister = (req, res) => {
  console.log('Registering');
  res.render('register', {
    pageTitle: 'Register',
    path: '/register'
  });
};
