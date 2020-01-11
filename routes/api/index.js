const router = require("express").Router();
const userRoutes = require("./users");
const newsRoutes = require("./news");
const weatherRoutes = require("./weather");
const rolesRoutes = require("./roles");
const postsRoutes = require("./posts");
const uploadsRoutes = require("./uploads");
const enquiryRoutes = require("./enquiry");
const announcementsRoutes = require("./announcements");

router.use("/users", userRoutes);
router.use("/news", newsRoutes);
router.use("/weather", weatherRoutes);
router.use("/roles", rolesRoutes);
router.use("/posts", postsRoutes);
router.use("/uploads", uploadsRoutes);
router.use("/enquiry", enquiryRoutes);
router.use("/announcements", announcementsRoutes);
module.exports = router;
