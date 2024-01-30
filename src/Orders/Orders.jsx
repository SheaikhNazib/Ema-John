import React, { useState } from 'react';
import Cart from '../components/Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../components/ReviewItem/ReviewItem';
import './Order.css'
import { removeFromDb } from '../utilities/fakedb';


const Orders = () => {
    const savedCart = useLoaderData();
    const [cart, setCart] = useState(savedCart);

    const handleRemoveFromCart = (id) => {
        const remaining = cart.filter(product => product.id !== id)
        setCart(remaining);
        removeFromDb(id);
    }

    console.log(cart)
    return (
        <div>
            <h1 className='shop-container'>
                <div className='review-container'>
                    {
                        cart.map(product => <ReviewItem
                            key={product.id}
                            product={product}
                            handleRemoveFromCart={handleRemoveFromCart}
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