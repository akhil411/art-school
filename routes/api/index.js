const router = require("express").Router();
const schoolRoutes = require("./school");
const userRoutes = require("./users");

router.use("/school", schoolRoutes);
router.use("/users", userRoutes);

module.exports = router;
