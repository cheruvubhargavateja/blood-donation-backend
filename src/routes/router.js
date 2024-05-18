const express = require('express');
const router = express.Router()
const userRouter = require('./user-routes/router')

router.use('/user', userRouter);

module.exports = router;