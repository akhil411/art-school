const router = require("express").Router();
const schoolRoutes = require("./school");

router.use("/school", schoolRoutes);

module.exports = router;
