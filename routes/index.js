const express = require("express");

const appRoute = express.Router();
const authRoute = require("./auth.route");
const productRouter = require("./product.route");
const categoryRouter = require("./category.route");
const searchRouter = require("./search.route");

appRoute.use("/auth", authRoute);
appRoute.use("/product", productRouter);
appRoute.use("/category", categoryRouter);
appRoute.use("/search", searchRouter);

module.exports = appRoute;
