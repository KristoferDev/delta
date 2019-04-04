const Page = require('../models/Page');

exports.getIndex = (req,res) => {
   res.render('page/index', {
      pageTitle: 'Home'
   });
 }
 exports.getAbout = (req,res) => {
   res.render('page/about', {
      pageTitle: 'About'
   });
 }
 exports.getWorkout = (req,res) => {
   res.render('page/workout', {
      pageTitle: 'Workout'
   });
 }
 