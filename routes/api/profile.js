const express = require("express");
const router = express.Router();

//@route    GET api/profile/test
//@descrip  Tests profile route
//@access   Public route
router.get("/test", (req, res) => res.json({ msg: "profile Works" }));

module.exports = router;
