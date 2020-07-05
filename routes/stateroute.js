const express = require('express');
const router = express.Router();

const state = require('../controllers/stateController')

router.route('/api/states')
    .get(state.getAllStates)

    router.route('/api/countries/create')
    .post(state.createState);
    router.route('/api/states/:stateId')
    .get(state.getState)
    .put(state.updateState)
    .delete(state.deleteState);

module.exports = router;


module.exports = router;