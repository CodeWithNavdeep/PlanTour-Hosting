import React, { useState } from 'react';
import '../styles/ProductItems.css';
function ProductItems(props) {
    const info = `${props.items.desc.substring(0,200)}...`;
    const[btn , setBtn] = useState("Read More");
    const[desc , SetDesc] = useState(info); 
    let value = 0;
    function deleteCardHandler(){
        value = props.val
        props.deleteCard(value);
    }
    function showContentHandler(){
      if(btn==="Read More"){
        SetDesc(props.items.desc);
        setBtn("Show Less");
      }
      else{
        SetDesc(info);
        setBtn("Read More");
      }
    }
  return (
    <div className='ProductItems-storage'>
        <div className='ProductItems-imgDiv'>
        <img  src={props.items.img} alt={props.items.place} className='ProductItems-img'/>    
        <div className='ProductItems-details'>
        <div className='ProductItems-price'>&#8377; {props.items.price}</div>
        <div className='ProductItems-place'>{props.items.place}</div>
        <div className='ProductItems-desc-box'>
            <div className='ProductItems-desc'>{desc}<span style = {{color: '#12B0E8', cursor:"pointer"}} onClick = {showContentHandler}>&nbsp;{btn}</span></div>
        </div>
        </div>
        <button className='ProductItems-btn' onClick = {deleteCardHandler}>Not Interested</button>
        </div>
    </div>
  );
}

export default ProductItems;
