const express = require("express");
const Food = require("../models/Food");

const router = express.Router();

// Get all foods
router.get("/", async (req, res) => {
  const foods = await Food.find();
  res.json(foods);
});

// Create a new food
router.post("/", async (req, res) => {
  const newFood = new Food(req.body);
  const savedFood = await newFood.save();
  res.json(savedFood);
});

module.exports = router;
