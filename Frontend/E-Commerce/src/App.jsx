import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/home';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import ProductDetail from './pages/productDetail';
import { useState } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cart from './pages/cart';

function App() {
  const [cartItems,setCartItems]=useState([]);
  return (
    <>
      <div className='App'>
        <BrowserRouter>
        <div>
        <ToastContainer />
        <Header cartItems={cartItems}/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/search' element={<Home/>}/>
          <Route path='/products/:id' element={<ProductDetail cartItems={cartItems} setCartItems={setCartItems}/>}/>
          <Route path='/cart' element={<Cart cartItems={cartItems} setCartItems={setCartItems}/>}/>

        </Routes>
        </div>
        </BrowserRouter>
  
        <Footer/>
        </div>
    </>
  )
}

export default App
