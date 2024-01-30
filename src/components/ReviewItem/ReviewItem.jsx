import React from 'react';
import './ReviewItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faCartShopping } from '@fortawesome/free-solid-svg-icons'


const ReviewItem = ({ product }) => {
    // console.log(product);
    const { id, img, name, price, quantity } = product;
    return (
        <div className='review-item'>
            <img src={img} alt="" />

            <div className='review-details'>
                <p>{name}</p>
                <p>Price: <span className='price-color'>${price}</span></p>
                <p>Quantity: <span className='price-color'>${quantity}</span></p>
            </div>

            <button className='delete-btn'>
                <FontAwesomeIcon className='delete-icon' icon={faTrashAlt} />
                {/* <FontAwesomeIcon  icon={faCartShopping} /> */}
            </button>
        </div>
    );
};

export default ReviewItem;