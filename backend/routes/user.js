const router = require("express").Router();
const UserController = require('../controller/user.controller');

router.post('/adduser',UserController.addUserDetails);

module.exports = router;