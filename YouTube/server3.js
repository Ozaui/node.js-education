const express = require("express");
const app = express();

app.set("view engine", "ejs");

const products = [
  {
    id: 1,
    name: "Product 1",
    price: 100,
  },
  {
    id: 2,
    name: "Product 2",
    price: 200,
  },
  {
    id: 3,
    name: "Product 3",
    price: 300,
  },
];

app.use("/detail/2", (req, res) => {
  //res.send("<h1>Home Page With Express</h1>");
  const productDetail = products.find((p) => p.id === 2);
  res.render("detail", { productDetail });
});

app.use("/", (req, res) => {
  res.render("products", { products: products });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
