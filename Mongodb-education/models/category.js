const Mongoose = require("mongoose");

const categorySchema = new Mongoose.Schema({
  name: string,
});

module.exports = module.exports = Mongoose.model("Category", categorySchema);
