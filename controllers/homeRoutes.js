const router = require('express').Router();
const { Experience } = require('../models');

router.get('/', async (req, res) => {
  console.log("This is in home routes" + req.session.eq);
  let eqData = req.session.eq ? JSON.parse(req.session.eq) : null;
  let experiences = [];
  if (eqData && eqData.__OBJECTID) {

    try {
      // Get all projects and JOIN with user data
      const experienceData = await Experience.findAll({
            attributes: ['eq_id', 'feel_it', 'description', 'user_id'],
            where: {
              eq_id: eqData.__OBJECTID,
            },
      });

      // Serialize data so the template can read it
      experiences = experienceData.map((experience) => experience.get({ plain: true }));

    } catch (err) {
      res.status(500).json(err);
      return;
    }
  }

  res.render('earthquake', { logged_in: req.session.logged_in, eq: eqData, experiences });
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

module.exports = router;
