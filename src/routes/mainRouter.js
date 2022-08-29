const express= require('express');
const router= express.Router();

const controllers = require('../controllers/mainControllers');


router.get('/', controllers.index);

router.get('/login', controllers.login);

router.get('/productCart', controllers.productCart);

router.get('/productDetail', controllers.productDetail);

router.get('/register', controllers.register);

module.exports = router;