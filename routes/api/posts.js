const router = require("express").Router();
const postsController = require("../../controllers/postsController");
const axios = require("axios");

router.route("/posts")
  .post(postsController.create);
router.route("/posts")
.get(postsController.findAll);

module.exports = router;