const router = require('express').Router();
const { Experience, User } = require('../models');
const topTen = require('../public/data.json');

// Display experience data for a specfic earthquake
router.get('/', async (req, res) => {
  let eqData = req.session.eq ? JSON.parse(req.session.eq) : null;
  let experiences = [];
  console.log(topTen);
  if (eqData && eqData.__OBJECTID) {

    try {
      const experienceData = await Experience.findAll({
            attributes: ['eq_id', 'feel_it', 'description', 'user_id', 'created_at'],
            include: [{ model: User}],
            where: {
              eq_id: eqData.__OBJECTID,
            },
      });
      experiences = experienceData.map((experience) => experience.get({ plain: true }));

    } catch (err) {
      res.status(500).json(err);
      return;
    }
  }

  res.render('earthquake', { logged_in: req.session.logged_in, eq: eqData, experiences, topTen });
});


// Login route - if use is already logged in, redirect to home /
router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

// Logout route 
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
