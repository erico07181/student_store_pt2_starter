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
    res.status(200);
  } catch (err) {
    console.log("oops, error!");
  }
});
