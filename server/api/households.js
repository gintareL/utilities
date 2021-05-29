var express = require('express');
const app = require('..');
var Household = require('../models/households');

var router = express.Router();

router.get('/', function (req, res) {
    Household.retrieveAll(function (err, households){
        if (err)
            return res.json(err);
        return res.json(households);    
    });
});

router.post('/', function (req, res){
    var households = req.body.households;

    Household.insert(household, function (err, result) {
        if (err)
            return res.json(err);
        return res.json(result);    
    });
});

module.exports = router;