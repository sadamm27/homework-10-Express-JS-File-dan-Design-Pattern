const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

const diskStorage = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, path.join(__dirname, "/upload"))
    },
    filename: (req,file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        + path.extname(file.originalname)
        cb(null, file.fieldname + '-' + uniqueSuffix)
    }
})

router.use("/upload", express.static(path.join(__dirname, "upload")))

router.post("/upload/image", multer({storeage: diskStorage}).single("image"), (req, res, next) => {
  const file = req.file.path;
  if(!file) {
    res.status(400).json({
        message: "no file is selected"
    })
  } else {
    res.status(200).json({
        message: "file uploaded"
    })
  }
})


module.exports = router;