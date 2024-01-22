import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const { name, img, price, seller, ratings } = props.product;
    const handleAddToCart = props.handleAddToCart;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-details'>
                <p className='name'>{name}</p>
                <p className='price'>Price: {price}</p>
                <p className='manufacturer'>Manufacturer: {seller}</p>
                <p className='ratings'>Ratings: {ratings}</p>
            </div>
            <button onClick={() => handleAddToCart(props.product)} className='btn-addToCart'>
                Add to cart 
                <FontAwesomeIcon icon={faCartShopping} /> 
                </button>
        </div>
    );
};

export default Product;