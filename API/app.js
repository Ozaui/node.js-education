const express = require("express");
const app = express();
app.use(express.json());
const Joi = require("joi");

// http methods: get, post, put, delete

const products = [
  { id: 1, name: "Product A", price: 100 },
  { id: 2, name: "Product B", price: 150 },
  { id: 3, name: "Product C", price: 200 },
];

//GET requests
app.get("/", (req, res) => {
  res.send(products[0]);
});

app.get("/products", (req, res) => {
  res.send(products);
});

app.get("/products/:id", (req, res) => {
  const product = products.find((p) => p.id == req.params.id);
  if (!product) {
    res.status(404).send("Product not found");
  }
  res.send(product);
});

//POST request
app.post("/products", (req, res) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    price: Joi.number().min(0).required(),
  });
  const result = schema.validate(req.body);
  if (result.error) {
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

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
