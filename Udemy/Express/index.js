const express = require("express");

const app = express();

const path = require("path");

const userRouter = require("./routes/user");
const adminRouter = require("./routes/admin");

app.use("/libs", express.static(path.join(__dirname, "node_modules")));
app.use("/static", express.static(path.join(__dirname, "public")));

app.use("/admin", adminRouter);
app.use(userRouter);

app.listen(3000, function () {
  console.log("listening on port 3000");
});
