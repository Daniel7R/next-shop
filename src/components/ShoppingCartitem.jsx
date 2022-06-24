import React from 'react';
import styles from '@styles/ShoppingCartItem.module.scss';
import Image from 'next/image';

const ShoppingCartitem = () => {
    return (
        <div className={styles['shopping-cart-item']}>
            <figure>
                <Image src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" width={"100%"} height={"100%"} alt="Bike" />
                <p>Bike</p>
                <p>$30,00</p>
            </figure>
        </div>
    );
};

export {ShoppingCartitem};
