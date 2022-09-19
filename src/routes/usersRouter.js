const express= require('express');
const router= express.Router();

const controllers = require('../controllers/usersControllers');



router.get('/login', controllers.login);

router.get('/register', controllers.register);





module.exports = router;