const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", { message: "Server launched successuflly" });
});

app.get("/about", (req, res) => {
  res.send("About page!");
});

module.exports = router;
