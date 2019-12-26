const router = require("express").Router();
const usersController = require("../../controllers/usersController");
const axios = require("axios");

router.route("/users")
  .get(usersController.findAll);

  router.route("/register")
  .post(usersController.register);

  router.route("/login")
  .post(usersController.login);

module.exports = router;