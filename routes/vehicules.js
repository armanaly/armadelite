var express = require('express');
var router = express.Router();

var Vehicule = require('../models/vehicule');


router.get('/:modeleSelected', function(req, res, next){
    var url = '';
    Vehicule.find({'modele': req.params.modeleSelected})
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
// router.get('/:yearSelected', function(req, res, next){
//     Vehicule.find()
// }
//
// router.get('/:marqueSelected', function(req, res, next){
//     Vehicule.find({'marque': 'Audi'}).sort({'date_debut': 1}).limit(1)    //req.params.marqueSelected
//         .exec(function(err, docs){
//             if (err) {
//                 return res.status(404).json({
//                     title: 'An error occured',
//                     error: err
//                 });
//             }
//                 res.status(200).json({
//                     message: 'Success',
//                     obj: docs
//                 });
//
//         });
// });

module.exports = router;