const express = require('express');
const router = express.Router();

const city = require('../controllers/cityController')

router.route('/api/city')
    .get(city.getAllCity)

    router.route('/api/city/create')
    .post(city.createCity);
    router.route('/api/city/:cityId')
    .get(city.getCity)
    .put(city.updateCity)
    .delete(city.deleteCity);
    

module.exports = router;


module.exports = router;