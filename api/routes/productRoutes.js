const express= require('express');
const router= express.Router();
const controllers = require('../controllers/productControllers');


router.get('/', controllers.list);
router.get('/:id', controllers.detail);

module.exports = router;