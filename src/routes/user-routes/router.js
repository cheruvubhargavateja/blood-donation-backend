const express = require('express');
const userRouter = express.Router();
const getUsers = require('../../feature/user/getUser')

userRouter.get('/', getUsers)

module.exports = userRouter;