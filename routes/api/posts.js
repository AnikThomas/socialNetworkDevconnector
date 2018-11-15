const express = require("express");
const router = express.Router();

//@route    GET api/posts/test
//@descrip  Tests post route
//@access   Public route
router.get("/test", (req, res) => res.json({ msg: "posts Works" }));

module.exports = router;
