const express = require('express');
const router = express.Router();
const whastappController = require('../controllers/whastappController');


router
.get('/', whastappController.VerfiTocken)
.post('/', whastappController.ReciveMessage);


module.exports = router;

