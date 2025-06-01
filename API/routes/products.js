const express = require("express");
const router = express.Router();
const Joi = require("joi");

const products = [
  { id: 1, name: "Product A", price: 100 },
  { id: 2, name: "Product B", price: 150 },
  { id: 3, name: "Product C", price: 200 },
];

//GET requests

router.get("/", (req, res) => {
  res.send(products);
});

router.get("/:id", (req, res) => {
  const product = products.find((p) => p.id == req.params.id);
  if (!product) {
    res.status(404).send("Product not found");
  }
  res.send(product);
});

//POST request
router.post("/", (req, res) => {
  const { error } = validateProduct(req.body);

  if (error) {
    return res.status(400).send(result.error.details[0].message);
  }

  const product = {
    id: products.length + 1,
    name: req.body.name,
    price: req.body.price,
  };
  products.push(product);
  res.send(product);
});

//PUT request
router.put("/:id", (req, res) => {
  const product = products.find((p) => p.id == req.params.id);
  if (!product) {
    return res.status(404).send("Product not found");
  }

  const { error } = validateProduct(req.body);

  if (error) {
    return res.status(400).send(result.error.details[0].message);
  }

  product.name = req.body.name;
  product.price = req.body.price;
  res.send(product);
});

//DELETE request
router.delete("/:id", (req, res) => {
  const product = products.find((p) => p.id == req.params.id);
  if (!product) {
    return res.status(404).send("Product not found");
  }

  const index = products.indexOf(product);
  products.splice(index, 1);
  res.send(product);
});

const validateProduct = (product) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    price: Joi.number().min(0).required(),
  });
  return schema.validate(product, { convert: false });
};

module.exports = router;
