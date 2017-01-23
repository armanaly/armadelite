var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    lastName: {type: String, required: true},
    modele: {type: String, required: true},
    month: {type: String, required: true},
    year: {type: String, required: true},
    portes: {type: String, required: true},
    mileage: {type: Number, required: true},
    version: {type: String, required: true},
   // color: {type: String, required: true},
    fuelType: {type: String, required: true},
    gearBox: {type: String, required: true},
    power: {type: String, required: true},
    options: {type: Array},
    roulant: {type: Boolean, required: true},
    raisonNonRoulant: {type: String, required: false},
    raisonPanne: {type: String, required: false},
    responsableAccident: {type: String, required: false},
    assurance: {type: String, required: false},
    importe: {type: String, required: true},
    firstHand: {type: String, required: true},
    doubleCle: {type: String, required: true},
    carnet: {type: String, required: true},
    postCode: {type: Number, required: true},
    email: {type: String, required: true},
    phone: {type: Number, required: true},
    marque: {type: String, required: true},
    dateDemande: {type: Date, required: true}

});

module.exports = mongoose.model('demande', schema);