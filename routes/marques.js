var express = require('express');
var router = express.Router();

var Marque = require('../models/marque');

router.get('/', function(req, res, next){
    var url = '';
    Marque.find()
        .exec(function(err, docs){
            if (err) {
                return res.status(404).json({
                    title: 'An error occured',
                    error: err
                });
            }     
                res.status(200).json({
                    message: 'Success',
                    obj: docs
                });                   
        });
});

module.exports = router;