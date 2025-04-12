const mongoose = require('mongoose');

const dishSchema = new mongoose.Schema({
    name: String,
    ingredients: [String],
    preparationSteps: [String],
    cookingTime: Number,
    origin: String,
    spiceLevel: Number

})

module.exports = mongoose.model('Dish', dishSchema)