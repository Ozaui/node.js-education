const express = require("express");
const app = express();
const mongoose = require("mongoose");

const home = require("./routes/home");
const products = require("./routes/products");

const productSchema = require("./models/product");
const categorySchema = require("./models/category");

app.use(express.json());

app.use("/api/products", products);
app.use("/", home);

const userName = "ozaymyildiz";
const password = "!Password102030";
const dbName = "shopdb";

(async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${userName}:${password}@cluster0.4sb2bpx.mongodb.net/${dbName}?retryWrites=true&w=majority&appName=Cluster0`
    );
    console.log("MongoDB bağlantısı başarılı.");
  } catch (err) {
    console.error("MongoDB bağlantısı kurulurken hata oluştu:", err);
  }
})();

app.listen(3000, () => {
  console.log("listening on port 3000");
});
