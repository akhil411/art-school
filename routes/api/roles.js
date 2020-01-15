const router = require("express").Router();
const rolesController = require("../../controllers/rolesController");
const axios = require("axios");

router.route("/roles")
  .get(rolesController.findAll);

module.exports = router;
