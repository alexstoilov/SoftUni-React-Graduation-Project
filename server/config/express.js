const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

module.exports = (app) => {
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());
  app.use(cookieParser());
  // app.use(cors());
  // app.options("*", cors());

  app.use(
    cors({
      origin: "*", // Allow all origins
    })
  );
};
