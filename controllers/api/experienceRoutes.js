const router = require('express').Router();
const { Experience } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    let eq = JSON.parse(req.session.eq);
    const newExperience = await Experience.create({
      ...req.body,
      user_id: req.session.user_id,
      eq_id: eq.__OBJECTID
    });
    console.log(newExperience);
    
    res.status(200).json(newExperience);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
