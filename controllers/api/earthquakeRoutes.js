const router = require('express').Router();
// const { RAW } = require('sequelize/types/query-types');
// const { Earthquake } = require('../../models');
const withAuth = require('../../utils/auth');
const topTen = require('../../public/data.json')

router.post('/', async (req, res) => {
  try {
    req.session.eq = JSON.stringify(req.body);
    res.status(200).json(newEarthquake);

  } catch (err) {
    res.status(400).json(err);
  }
});

router.get('/', (req, res) => res.json(topTen));

// router.get('/', async (req, res) => {
//   try {
//     console.log("test earthquakes");
//     fetch("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson")
//     .then(response => { 
//       console.log(response);
//       return response.json() })
//     .then(data => {
//       console.log(data);
//       const topTen = response.body.features.sort((a,b) => {
//         return a.properties.mag >= b.properties.mag
//       }).slice(0,9)
//       res.status(200).json(topTen);
//     })
    
//     // if (response.ok) {
//     //   document.location.replace('/');
//     // } else {
//     //   alert('Failed to create earthquake');
//     // }

//     // Fetch data from URL
//     // Sort DESC by magnitude
//     // Return top 10

//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

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
