import React, { useContext } from 'react';
import Add2Cart from '@icons/bt_add_to_cart.svg';
import Added from '@icons/bt_added_to_cart.svg';
import styles from '@styles/ProductItem.module.scss';
import { AppContext } from '@context/AppContext';
import Image from 'next/image';

const ProductItem = ({product}) => {

    const { addToCart, state: {cart}, deleteFromCart } = useContext(AppContext);

    const handleClick = item => {
        if(!cart.includes(item)){
            addToCart(item);
        }else{
            deleteFromCart(item);
        }
    };

    return (
        <div className={styles['product-item']}>
            <Image loader={() => product.images[0]} src={product.images[0]} width="100%" height="100%" layout="responsive" alt={product.title} />
            <div className={styles['product-info']}>
                <div>
                    <p>${ product.price }</p>
                    <p>{product.title}</p>
                </div>
                <figure onClick={() => handleClick(product)}>
                {
                    cart.includes(product) ? (<Image src={Added} alt='added to cart' />): ( <Image src={Add2Cart} alt="add to cart" /> )
                }
                </figure>
            </div>
        </div>
    );
};

export {ProductItem};
