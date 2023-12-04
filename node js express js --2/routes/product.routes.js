const express = require("express");
const { productController } = require("../controllres");
const routes = express.Router();

routes.get("/get", productController.getuser);

module.exports = routes;     