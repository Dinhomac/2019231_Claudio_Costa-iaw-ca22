const { Schema, model } = require('mongoose');

//Creates the objects of the page
const SpiritSchema = new Schema({
    spirit: {
        type: String,
        required: true
    },
    description: String
    ,price: {
        type: Number,
        required: true
    }
});

module.exports = model('Spirit', SpiritSchema);