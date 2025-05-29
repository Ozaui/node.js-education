const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  image: String,
  date: {
    type: Date,
    default: Date.now,
  },
  isActive: Boolean,
});

module.exports = mongoose.model("Product", productSchema);
