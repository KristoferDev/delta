const Page = require('../models/Page');

exports.getIndex = (req, res) => {
   res.render('page/index', {
      pageTitle: 'Home',
      path: 'home'
   });
}

exports.getAbout = (req, res) => {
   res.render('page/about', {
      pageTitle: 'About',
      path: 'about'
   });
}

exports.getWorkout = (req, res) => {
   res.render('page/workout', {
      pageTitle: 'Workout',
      path: 'workout'
   });
}
