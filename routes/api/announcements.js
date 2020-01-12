const router = require("express").Router();
const announcementController = require("../../controllers/announcementController");
const axios = require("axios");

router.route("/announcements")
.post(announcementController.create);

router.route("/announcements")
.get(announcementController.findAll);

router.route("/announcements/:id")
  .delete(announcementController.remove);

module.exports = router;
