import React from 'react';
import {OrderItem} from '@components/OrderItem';
import '@styles/Orders.scss';

const Orders = () => {
    return (
        <div className='orders'>
            <div className="orders-container">
                <h1 className='title'>Mis ordenes</h1>
                <div className="orders-content">
                    <OrderItem/>
                </div>
            </div>
        </div>
    )
}

export {Orders}
