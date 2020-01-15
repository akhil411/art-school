const router = require("express").Router();
const enquiryController = require("../../controllers/enquiryController");
const axios = require("axios");

router.route("/enquiry")
    .post(enquiryController.submit);

router.route("/enquiry")
    .get(enquiryController.findAll);

module.exports = router;
