// camelcase
// spacing is not allowed in file name 


const express= require('express');
const router = express.Router();
const {adminController } = require('../../controllers/adminController')



router.post('/getorders',adminController)

module.exports = router;  // named export 