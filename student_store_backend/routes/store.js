const express = require("express");
const router = express.Router();
const Store = require("../models/store");

router.get("/", async (req, res, next) => {
  try {
    const products = Store.listProducts();
    res.status(200).json({ products });
  } catch (err) {
    console.log("oops, error!");
  }
});

module.exports = router;
