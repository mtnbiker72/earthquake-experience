const router = require('express').Router();

router.get('/', async (req, res) => {
  console.log("This is in home routes" + req.session.eq);
  let eqData = req.session.eq?JSON.parse(req.session.eq):null;
  res.render('earthquake', { logged_in: req.session.logged_in, eq: eqData });
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
