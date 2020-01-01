const router = require("express").Router();
const schoolRoutes = require("./school");
const userRoutes = require("./users");
const newsRoutes = require("./news");
const weatherRoutes = require("./weather");
const rolesRoutes = require("./roles");
const postsRoutes = require("./posts");
const uploadsRoutes = require("./uploads");

router.use("/school", schoolRoutes);
router.use("/users", userRoutes);
router.use("/news", newsRoutes);
router.use("/weather", weatherRoutes);
router.use("/roles", rolesRoutes);
router.use("/posts", postsRoutes);
router.use("/uploads", uploadsRoutes)

module.exports = router;
