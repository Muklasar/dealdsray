const express = require("express");

// router
const router = express.Router();

// middleware
// const { authCheck, adminCheck } = require("../middlewares/auth");

// controller
const { upload, remove } = require("../controller/cloudinary");

// router.post("/uploadimages", authCheck, adminCheck, upload);
// router.post("/removeimage", authCheck, adminCheck, remove);


router.post("/uploadimages", upload);
router.post("/removeimage", remove);

// exports
module.exports = router
