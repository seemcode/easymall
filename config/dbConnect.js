const { default: mongoose } = require("mongoose");
const dotenv = require("dotenv").config();

const dbConnect = () => {
  try {
    const DB = process.env.DATABASE.replace(
      "<password>",
      process.env.DATABASE_PASSWORD
    );
    const conn = mongoose.connect(DB, {
      dbName: "easymall",
    });
    console.log("Database Connection Successfull");
  } catch (error) {
    console.log("Database Error");
  }
};

module.exports = dbConnect;
