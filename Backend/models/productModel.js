const mongoose=require('mongoose');

const schema={
    name:String,
    price:String,
    description:String,
    ratings:String,
    images:[{image:String}],
    category:String,
    seller:String,
    stock:String,
    numOfReviews:String,
    createdAt:Date
}

const productSchema=new mongoose.Schema(schema);
const productModel=mongoose.model('Product',productSchema);

module.exports=productModel;
