const express = require('express');
const router = express.Router();

const countrie = require('../controllers/countrieController')
//const product_controller = require('../controllers/countriecontroller');
//const test = require('../test/test');
router.route('/api/countries')
    .get(countrie.getAllCountries)

    router.route('/api/countries/create')
    .post(countrie.createCountrie);
    router.route('/api/countries/:countrieId')
    .get(countrie.getCountrie)
    .put(countrie.updateCountrie)
    .delete(countrie.deleteCountrie);
    router.route('/api/countries/:code1')
    .get(countrie.getCountriecode)

module.exports = router;

//router.get('/test', product_controller.test);
//noderouter.get('/test', product_controller.test);


module.exports = router;