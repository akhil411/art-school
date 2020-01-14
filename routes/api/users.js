const router = require("express").Router();
const usersController = require("../../controllers/usersController");
const axios = require("axios");

router.route("/users")
  .get(usersController.findAll);

  router.route("/register")
  .post(usersController.register);

  router.route("/login")
  .post(usersController.login);

  router.route("/users/:id")
  .get(usersController.findbyID);

  router.route("/students/:id")
  .get(usersController.findStudents);

  router.route("/password")
  .post(usersController.updatePassword);

module.exports = router;
