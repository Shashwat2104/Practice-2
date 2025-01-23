const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/practice-2");
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error: ", error.message);
  }
};

module.exports = connectDB;
