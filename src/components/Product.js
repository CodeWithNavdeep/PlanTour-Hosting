import React from 'react';
import '../styles/Product.css';
import ProductItems from './ProductItems';
function Product(props) {
    function deleteCardfurther(val){
        props.deleteCard(val);
    }
  return (
    <div className='Product-storage'>
        {props.items.map((item , index) => {
        return <ProductItems key = {index} items = {item} val = {index} deleteCard = {deleteCardfurther}></ProductItems>;
        })}
    </div>
  );
}

export default Product;
