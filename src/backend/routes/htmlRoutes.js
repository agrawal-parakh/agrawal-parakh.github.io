const express = require("express");
const pages = require("../controller/htmlController");
const router = express.Router();
router.route("/").get(pages.homePage);
router.route("/aboutus").get(pages.aboutUs);
router.route("/login").get(pages.login);
router.route("/signup").get(pages.signUp);
module.exports = router;
