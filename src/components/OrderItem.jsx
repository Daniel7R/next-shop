import React, {useContext} from 'react';
import Close from '@icons/icon_close.png';
import { AppContext } from '@context/AppContext';
import styles from '@styles/OrderItem.module.scss';
import Image from 'next/image';

const OrderItem = ({product}) => {

    const { deleteFromCart } = useContext(AppContext);

    return (
        <div className={styles.OrderItem}>
            <figure>
                <Image src={ product?.images[0] } alt={product?.title} width="90" height="80" />    
            </figure>
            <p>{product?.title}</p>
            <p>${product?.price}</p>
            <Image style={{cursor: "pointer"}} onClick={()=> deleteFromCart(product)} src={Close} alt='close' width="10" height="10" />
        </div>
    );
};

export {OrderItem};
