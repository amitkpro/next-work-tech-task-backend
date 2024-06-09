const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })
const userController = require("../controller/index")
const express = require('express');
const router = express.Router();

router.post("/addUser",userController.addUser)
router.get("/getUser",userController.getAllUsers)

module.exports = router