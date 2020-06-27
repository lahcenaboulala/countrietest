const express = require('express');
const router = express.Router();

const country = require('../controllers/countrieController')
//const product_controller = require('../controllers/countriecontroller');
//const test = require('../test/test');
router.route('/api/countries')
    .get(country.getAllCountries)
    .post(country.createCountry);
    router.route('/api/countries/:countryId')
    .get(country.getCountry)
    .put(country.updateCountry)
    .delete(country.deleteCountry);

module.exports = router;

//router.get('/test', product_controller.test);
//noderouter.get('/test', product_controller.test);


module.exports = router;