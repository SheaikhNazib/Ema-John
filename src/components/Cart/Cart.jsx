import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {

    console.log(cart)

    let totalPrice = 0;
    let totalShipping = 0;
    for(const product of cart){
        totalPrice+= product.price;
        totalShipping+=product.shipping
    }

    const tax = totalPrice*0.07;

    const grandTotal = totalPrice+tax;

    return (
        <div className='cart'>
            <h3 className='cart-details'>Order Summary</h3>
            <p>Selected items:{cart.length}</p>
            <p>Total price:${totalPrice}</p>
            <p>Total Shipping charge:${totalShipping}</p>
            <p>Tax:${tax.toFixed(2)}</p>
            <p>Grand total:${grandTotal.toFixed(2)}</p>

        </div>
    );
};

export default Cart;