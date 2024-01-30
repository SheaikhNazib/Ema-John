import React from 'react';
import Cart from '../components/Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../components/ReviewItem/ReviewItem';
import './Order.css'


const Orders = () => {
    const cart = useLoaderData();
    console.log(cart)
    return (
        <div>
            <h1 className='shop-container'>
                <div className='review-container'>
                    {
                        cart.map(product => <ReviewItem
                            key={product.id}
                            product={product}
                        ></ReviewItem>)
                    }
                </div>
                <div className='cart-container'>
                    <Cart cart={cart}></Cart>
                </div>
            </h1>
        </div>
    );
};

export default Orders;