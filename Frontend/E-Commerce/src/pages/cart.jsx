import {  toast } from 'react-toastify';
import {Link} from 'react-router-dom'
import axios from "axios";
import { useState } from "react";

export default function Cart({cartItems,setCartItems}){
    const [isComplete,setisComplete]=useState(false);

    const increaseQty=(item)=>{
        if (item.product.stock>item.qty){
            const updatedItems=cartItems.map((i)=>{
                if(i.product._id==item.product._id){
                    i.qty++
                }
                return i
            })
            setCartItems(updatedItems)
            
        }
      }
      const decreaseQty=(item)=>{
        if (item.qty>1){
            const updatedItems=cartItems.map((i)=>{
                if(i.product._id==item.product._id){
                    i.qty--
                }
                return i
            })
            setCartItems(updatedItems)
        }
      }

      const removeItem=(item)=>{
      
            const updatedItems=cartItems.filter((i)=>{
                if(i.product._id!==item.product._id){
                    return true
                }
                
            })

            setCartItems(updatedItems)
        
      }
      const placeOrderHandler = async () => {
        
        try {
          const response = await axios.post(`${import.meta.env.VITE_API_URL}/order`,
            cartItems
          
            );
          console.log(response.data)
          setCartItems([])
          setisComplete(true)
          toast("Order Placed Successfully ");

    
        } catch (error) {
          console.error(error);
        }
      };

return cartItems.length>0?<>
    <div className="container container-fluid">
        <h2 className="mt-5">Your Cart: <b>{cartItems.length} items</b></h2>
        
        <div className="row d-flex justify-content-between">
            <div className="col-12 col-lg-8">
               
                {cartItems.map((item,index)=>{
                return (<>
                 <hr />
                <div className="cart-item" key={index}>
                <div className="row">
                    
                    <div className="col-4 col-lg-3">
                        <img src={item.product.images[0].image} alt="Laptop" height="90" width="115"/>
                    </div>

                    <div className="col-5 col-lg-3">
                    <Link to={'/products/'+item.product._id} >{item.product.name}</Link>
                    </div>


                    <div className="col-4 col-lg-2 mt-4 mt-lg-0">
                        <p id="card_item_price">$ {item.product.price}</p>
                    </div>

                    <div className="col-4 col-lg-3 mt-4 mt-lg-0">
                        <div className="stockCounter d-inline">
                            <span className="btn btn-danger minus" onClick={()=>decreaseQty(item)} >-</span>
                            <input type="number" className="form-control count d-inline" value={item.qty} readOnly />

                            <span className="btn btn-primary plus" onClick={()=>increaseQty(item)}>+</span>
                        </div>
                    </div>

                    <div className="col-4 col-lg-1 mt-4 mt-lg-0">
                        <i id="delete_cart_item"onClick={()=>removeItem(item)} className="fa fa-trash btn btn-danger"></i>
                    </div>

                </div>
            </div></>)
                                
                            
                        })}
                
                <hr />
            </div>

            <div className="col-12 col-lg-3 my-4">
                <div id="order_summary">
                    <h4>Order Summary</h4>
                    <hr />
                    <p>Subtotal:  <span className="order-summary-values">{cartItems.reduce((acc,item)=>(acc+item.qty),0)} (Units)</span></p>
                    <p>Est. total: <span className="order-summary-values">${cartItems.reduce((acc,item)=>(acc+item.product.price*item.qty),0)}</span></p>
    
                    <hr />
                    <button id="checkout_btn" className="btn btn-primary btn-block" onClick={placeOrderHandler}>Place Order</button>
                </div>
            </div>
        </div>
    </div>
</>:!isComplete?<h1>Your Cart is Empty</h1>:<h1>Your Order has been Placed Successfully</h1>
}