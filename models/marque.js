var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    name: {type: String, required: true},
    url: {type: String, required: true},
    modeles: [{type: String, required: false}]
});

module.exports = mongoose.model('Marque', schema);