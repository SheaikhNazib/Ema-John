import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Cart = ({ cart }) => {

    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0;
    for (const product of cart) {
        product.quantity = product.quantity || 1;
        totalPrice += product.price * product.quantity;
        totalShipping += product.shipping
        quantity += product.quantity;
    }

    const tax = totalPrice * 0.07;

    const grandTotal = totalPrice + tax;

    return (
        <div className='cart'>
            <h6 className='cart-details'>Order Summary</h6>
            <p>Selected items:{quantity}</p>
            <p>Total price:${totalPrice}</p>
            <p>Total Shipping charge:${totalShipping}</p>
            <p>Tax:${tax.toFixed(2)}</p>
            <p>Grand total:${grandTotal.toFixed(2)}</p>
            <button className='btn-clear-cart'>
                Clear Cart
                <FontAwesomeIcon className='clear-cart-icon' icon={faTrashAlt} />
            </button>
            <button className='btn-review-order'>
                <span>Review Order</span>
                <FontAwesomeIcon className='review-order-icon' icon={faArrowRight} />
            </button>

        </div>
    );
};

export default Cart;