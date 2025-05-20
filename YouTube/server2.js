const express = require("express");

const app = express();

const PORT = 3000;

app.use("/", (req, res) => {
  //res.send("<h1>Home Page With Express</h1>");
  res.json({ name: "Test Doe", age: 30 });
});

app.use("/about", (req, res) => {
  //res.send("<h1>About Page With Express</h1>");
  res.json({ name: "John Doe", age: 30 });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
