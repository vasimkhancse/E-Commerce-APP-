const express=require('express');
const app=express();
const dotenv=require('dotenv');
const path=require('path');
const productRouter = require('./routes/product');
const orderRouter = require('./routes/order');
const connectDatabase = require('./config/connectDatabase');
const cors=require('cors')

dotenv.config({path:path.join(__dirname,'config','config.env')});

connectDatabase();

app.use(express.json());
app.use(cors());
  
app.use(productRouter);
app.use(orderRouter);


app.listen(process.env.PORT),()=>{
    console.log("server is running ");
}

