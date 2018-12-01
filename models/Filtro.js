var mongoose = require('mongoose');
var {Schema} = mongoose;

var FiltroSchema = new Schema({
    codigo: {
        type: String,
        unique: true,
        required: true
    },
    tipo:{
        type: String,
        required: true
    },
    precio:{
        type: Number

    }
});

module.exports = mongoose.model('filtros',FiltroSchema);