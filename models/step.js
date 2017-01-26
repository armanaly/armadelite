var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    stepId: {type: Number, required: true},
    type: String,
    configuration: {
        value: {type: String, name: String},
        labelPanel: String,
        selection: String,
        list: Array
    }

});

module.exports = mongoose.model('step', schema);
