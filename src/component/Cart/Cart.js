import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';

const Cart = ({ cart, handleClearCart }) => {

    console.log(cart)

    return (
        <div className='cart-container'>
            <div className="order-summry">
                <h2>Order Summery</h2>
                <Button onClick={handleClearCart}><FontAwesomeIcon icon={faClose}></FontAwesomeIcon></Button>
            </div>
            {
                cart.map(item => <div className="cart-contianer">
                    <div className="cart-image">
                        <img src={item.pairImage} alt="" height={80} />
                    </div>
                    <div className="cart-content">
                        <h3>{item.name}</h3>
                        <p>${item.price}</p>
                        <p>Quantity: {item.quantity}</p>
                    </div>


                </div>

                )
            }

        </div>
    );
};

export default Cart;