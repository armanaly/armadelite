var express = require('express');
var router = express.Router();

var Step = require('../models/step');

router.get('/', function(req, res, next){
    var url = '';
    Step.find().sort({step_id: 1})
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