const mongoose=require('mongoose');

const schema={
    cartItems:Array,
    amount:String,
    status:String,
    createdAt:Date
}

const orderSchema=new mongoose.Schema(schema);
const orderModel=mongoose.model('Order',orderSchema);

module.exports=orderModel;
