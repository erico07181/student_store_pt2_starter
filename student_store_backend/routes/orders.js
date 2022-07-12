const express = require("express");
const router = express.Router();
const Order = require("../models/order");

router.get("/", async (req, res, next) => {
  try {
    const products = Order.listOrdersForUser();
    res.status(200).json({ products });
  } catch (err) {
    console.log("oops, error!");
  }
});

router.post("/", async (req, res, next) => {
  try {
    const order = Order.createOrder();
    res.status(200).json({ order });
  } catch (err) {
    console.log("oops, error!");
  }
});

module.exports = router;
