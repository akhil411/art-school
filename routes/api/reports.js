const router = require("express").Router();
const reportsController = require("../../controllers/reportsController");
const axios = require("axios");

router.route("/reports")
.post(reportsController.create);
router.route("/reports/:id")
  .get(reportsController.getReports)
  .delete(reportsController.remove)

router.route("/student-reports/:id")
  .get(reportsController.getStudentReports)

module.exports = router;
