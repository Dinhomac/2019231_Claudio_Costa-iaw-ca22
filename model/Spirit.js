const { Schema, model } = require('mongoose');

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