const express = require("express");
const router = express.Router();

const products = [
  { id: 1, name: "Product A", price: 100 },
  { id: 2, name: "Product B", price: 150 },
  { id: 3, name: "Product C", price: 200 },
];

router.get("/", (req, res) => {
  res.send(products[0]);
});

module.exports = router;
