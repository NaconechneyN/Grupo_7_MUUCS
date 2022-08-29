const express= require('express');
const router= express.Router();

const controllers = require('../controllers/mainControllers');


router.get('/', controllers.index);

router.get('/login', controllers.login);

router.get('/productCart', controllers.productCart);

router.get('/productDetail', controllers.productDetail);

router.get('/register', controllers.register);

router.get('/productEdi', controllers.productEdi);

router.get('/productList', controllers.productList);

router.get('/productCarga', controllers.productCarga);




module.exports = router;