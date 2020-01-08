const router = require("express").Router();
const postsController = require("../../controllers/postsController");
const axios = require("axios");

router.route("/posts")
  .post(postsController.create);
router.route("/posts")
  .get(postsController.findAll);
router.route("/like")
  .post(postsController.setLike);
router.route("/getLikes/:id")
  .get(postsController.getLikes);
router.route("/comment")
  .post(postsController.setComment);
router.route("/comments/:id")
  .get(postsController.getComments);
module.exports = router;