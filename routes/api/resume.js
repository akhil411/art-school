const router = require("express").Router();
const resumeController = require("../../controllers/resumeController");
const axios = require("axios");

router.route("/resume")
    .post(resumeController.submit);

module.exports = router;
