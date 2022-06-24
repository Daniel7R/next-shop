import React from 'react';
import Image from 'next/image';
import Close from '@icons/icon_close.png';
import AddToCart from '@icons/bt_add_to_cart.svg';
import styles from '@styles/ProductInfo.module.scss';

const ProductInfo = () => {
    return (
        <aside className={styles['product-detail']}>
            <div className={styles['product-detail-close']}>
                <Image src={Close} width={"7"} height="12" alt="close" />
            </div>
            <Image width={"30"} height={"40"} src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike" />
            <div className={styles['product-info']}>
                <p>$40</p>
                <p>bike</p>
                <p>With its practical position, this bike also fulfills a decorative funcion</p>
                <button className='primary-btn add-to-cart-btn' >
                    <Image width={"12"} height={"15"} src={AddToCart} alt="add to cart" />
                    Añadir al carrito
                </button>
            </div>
        </aside>
    );
};

export {ProductInfo};
