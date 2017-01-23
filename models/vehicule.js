var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    name: {type: String, required: true},
    modele: {type: String, required: true},
    date_debut: {type: String, required: true},
    date_fin: {type: String, required: true},
    version: {type: String, required: true},
    portes: {type: String, required: true},
    carburant: {type: String, required: true},
    puissance: {type: String, required: true},
    boite_vitesse: {type: String, required: true}
});

module.exports = mongoose.model('Vehicule', schema);
