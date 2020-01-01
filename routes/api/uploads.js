const router = require("express").Router();
const uploadsController = require("../../controllers/uploadsController");
const axios = require("axios");

router.route("/uploads")
  .post(uploadsController.create);

module.exports = router;