const Page = require('../models/Page');

exports.getIndex = (req, res) => {
   res.render('page/index');
};

exports.getWorkout = (req, res) => {
   res.render('page/workout');
};

exports.getAbout = (req, res) => {
   res.render('page/about');
};
