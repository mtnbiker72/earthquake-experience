const router = require('express').Router();
// const { RAW } = require('sequelize/types/query-types');
// const { Earthquake } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', async (req, res) => {
    console.log(req.body);
  try {
    req.session.eq = JSON.stringify(req.body);
    res.status(200).json(newEarthquake);

  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const earthquakeData = await Earthquake.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!earthquakeData) {
      res.status(404).json({ message: 'No earthquake found with this id!' });
      return;
    }

    res.status(200).json(earthquakeData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
