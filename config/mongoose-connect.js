const mongoose = require("mongoose");
const dotenv = require("dotenv");
const config = require("config"); 
const dbgr = require("debug")("development:mongoose");

// const { MONGO_URI } = require("./config");
dotenv.config();

mongoose
  .connect(`${process.env.MONGO_URI}/scatch`)
  .then(() => {
    dbgr("connected");
  })
  .catch((err) => {
    dbgr(err);
  });

module.exports = mongoose.connection;

