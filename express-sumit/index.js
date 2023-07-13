/** @format */

const express = require("express");
const router = express.Router();
const app = express();

app.use(router);
app.use(express.static(`${__dirname}/public/`));

router.get("/about", (req, res) => {
  res.send("this is home port");
});

router.post("/", (req, res) => {
  res.send("this is sample port");
});

app.listen(3000, () => {
  console.log("server running at 3000 port");
});
