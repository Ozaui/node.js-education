const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());

const productsRouter = require("./routes/products");
const homeRouter = require("./routes/home");

app.use(
  cors({
    origin: "*", // Allow all origins
    methods: "GET, POST, PUT, DELETE", // Allow specific methods
  })
);

// app.use((req, res, next) => {
//   res.setHeader("Access-Controll-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
//   next();
// });

app.use("/api/products", productsRouter);
app.use("/", homeRouter);

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
