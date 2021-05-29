var express = require('express');
const app = require('..');
var UtilitiesTypes = require('../models/utilities_types');

var router = express.Router();

router.get('/', function (req, res) {
    UtilitiesTypes.retrieveAll(function (err, utilitiesTypes){
        if (err)
            return res.json(err);
        return res.json(utilitiesTypes);    
    });
});

router.get('/:id', function (req, res) {
    UtilitiesTypes.retrieveById(req.params.id, function (err, utilitiesTypes){
        if (err)
            return res.json(err);
        return res.json(utilitiesTypes);    
    });
});

router.post('/', function (req, res){
    var utilitiesType = req.body.utilitiesType;

    UtilitiesTypes.insert(utilitiesType, function (err, result) {
        if (err)
            return res.json(err);
        return res.json(result);    
    });
});

module.exports = router;