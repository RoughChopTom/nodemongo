let express = require('express');
let router = express.Router();
let authController = require('./controllers/authentication-controller');
let userCalcController = require('./controllers/user-calculations-controller');

router.post('/api/register', authController.register);
router.post('/api/login', authController.login);
router.post('/api/addCalculations/:id', userCalcController.addCalculations);
router.get('/api/getCalculations/:id', userCalcController.getCalculations);
router.put('/api/deleteCalculations/:id', userCalcController.deleteCalculations);

module.exports.router = router;