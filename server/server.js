const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb://localhost:27017/foodapp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.once("open", () => {
  console.log("Connected to MongoDB");
});

// Routes
const foodRoutes = require("./routes/foodRoutes");
app.use("/api/foods", foodRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
