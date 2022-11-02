const router = require("express").Router();
const user = require('../routes/user');

router.use('/create',user);

module.exports = router;