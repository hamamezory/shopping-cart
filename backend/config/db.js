require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("The MongoDB connection is successful");
  } catch (error) {
    console.error("The MongoDB connection is FAIL");
    process.exit(1);
  }
};

module.exports = connectDB;
