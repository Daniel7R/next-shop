import React from 'react';
import '@styles/Checkout.scss';
import {OrderItem} from '@components/OrderItem';

const Checkout = () => {
    return (
        <div className='checkout'>
            <div className="checkout-container">
                <h1 className="title">Mi orden</h1>
                <div className="checkout-content">
                    <div className="order">
                        <p>
                            <span>01.03.22</span>
                            <span>6 Articles</span>
                        </p>
                        <p>$560,00</p>
                    </div>
                </div>
                <OrderItem/>
            </div>
        </div>
    )
}

export {Checkout}
