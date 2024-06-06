import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Search(){

    const [keyword,setkeyword]=useState('')
    const navigate=useNavigate();

    const searchHandler=()=>{
      navigate('/search?keyword='+keyword)
    }

    return <> <div className="input-group">
    <input
      type="text"
      id="search_field"
      className="form-control"
      onChange={(e)=>setkeyword(e.target.value)}
      onBlur={searchHandler}
      placeholder="Enter Product Name ..."
    />
    <div className="input-group-append">
      <button id="search_btn" className="btn" onClick={searchHandler}>
        <i className="fa fa-search" aria-hidden="true"></i>
      </button>
    </div>
  </div></>}