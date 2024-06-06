const orderModel = require("../models/orderModel");
const productModel = require("../models/productModel");


exports.createNewOrder=async(req,res,next)=>{
    const cartItems=req.body;
    const amount=Number(cartItems.reduce((prev,item)=>(prev+item.product.price* item.qty),0)).toFixed(2);
    const status='pending';

    const order =await orderModel.create({cartItems,status,amount});


    //updating product stock

    cartItems.forEach(async item => {
        const product=await productModel.findById(item.product._id)
        product.stock=product.stock - item.qty;
        await product.save();
    });
    res.json({
        success:true,
        order
    })
    }
    