
import { Fragment, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { useState } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

export default function Home(){
     const [products,setProducts]=useState([]);
     const [searchParams,setSearchParams]=useSearchParams();

     useEffect(() => {
        const fetchProducts = async () => {
          try {
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/products?`+searchParams);
            setProducts(response.data.products);
            console.log(response.data.products);
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchProducts();
      }, [searchParams]);


    return <Fragment>

    <h1 id="products_heading">Latest Products</h1>

    <section id="products" className="container mt-5">
      <div className="row">

        {products.map((product,index)=><ProductCard key={index} product={product}/>)}


      </div>
    </section>


    </Fragment>
}