const express = require('express');
const helloWorld = require('../methods/helloWorld');

const router = express.Router();

router.get("/hello", helloWorld.hello);

module.exports = router;