const productModel = require("../models/productModel")

//Get Products API - http://localhost:8000/products
exports.getProducts=async(req,res,next)=>{

 const query= req.query.keyword?{
    name:{
        $regex:req.query.keyword,
        $options:'i'
    }
  }:{}

const products =await productModel.find(query);
res.json({
    success:true,
    products
})
}

//Get Products API - http://localhost:8000/products/id
exports.getSingleProduct=async(req,res,next)=>{
    try{
        const product=await productModel.findById(req.params.id)
        res.json({
            success:true,
            product
        })
    }
    catch(error){
        res.json({
            success:false,
            message:'unable to get product with that id'
        })
    }

    
    }