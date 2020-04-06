const express = require("express");
const bodyParser = require("body-parser");
const { calculSum } = require("./controller");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use("/", express.static(__dirname + "/../client/build"));

app.post("/calcul", function (req, res) {
  const { value1, value2 } = req.body;
  return res.json(calculSum(value1, value2));
});

app.listen(process.env.PORT || 8080);
