const router = require("express").Router();
const schoolRoutes = require("./school");
const userRoutes = require("./users");
const newsRoutes = require("./news");
const weatherRoutes = require("./weather");

router.use("/school", schoolRoutes);
router.use("/users", userRoutes);
router.use("/news", newsRoutes);
router.use("/weather", weatherRoutes);

module.exports = router;
