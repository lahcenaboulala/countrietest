const express = require('express');
const router = express.Router();

const product_controller = require('../controllers/countriecontroller');
//const test = require('../test/test');

router.get('/test', product_controller.test);
//noderouter.get('/test', product_controller.test);

module.exports = router;