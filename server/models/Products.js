const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    desc:  String, 
    img: String,
    brand: String,
    category: String,
    sizes: [{
            size: String,
            price: Number
        }]
})

const productsDb = mongoose.connection.useDb('store-database')
const Product = productsDb.model("products", ProductSchema);
module.exports = Product