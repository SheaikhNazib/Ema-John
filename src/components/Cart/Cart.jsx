import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    
    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0;
    for(const product of cart){
        product.quantity = product.quantity||1;
        totalPrice+= product.price * product.quantity;
        totalShipping+=product.shipping
        quantity+=product.quantity;
    }

    const tax = totalPrice*0.07;

    const grandTotal = totalPrice+tax;

    return (
        <div className='cart'>
            <h6 className='cart-details'>Order Summary</h6>
            <p>Selected items:{quantity}</p>
            <p>Total price:${totalPrice}</p>
            <p>Total Shipping charge:${totalShipping}</p>
            <p>Tax:${tax.toFixed(2)}</p>
            <p>Grand total:${grandTotal.toFixed(2)}</p>

        </div>
    );
};

export default Cart;