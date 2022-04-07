const router = require('express').Router();
const { Experience } = require('../models');

router.get('/', async (req, res) => {
  let eqData = req.session.eq ? JSON.parse(req.session.eq) : null;
  let experiences = [];
  if (eqData && eqData.__OBJECTID) {

    try {
      // Get all projects and JOIN with user data
      const experienceData = await Experience.findAll({
            attributes: ['eq_id', 'feel_it', 'description', 'user_id', 'created_at'],
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
  // If the user is already logged in, redirect to home page in /
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
