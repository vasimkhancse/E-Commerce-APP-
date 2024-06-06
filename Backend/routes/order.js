const express=require('express');
const { createNewOrder } = require('../controllers/orderController');

const router=express.Router();


router.route('/order').post(createNewOrder);



module.exports=router;