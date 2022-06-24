import React, {useContext} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Flecha from '@icons/flechita.svg';
import { OrderItem } from '@components/OrderItem';
import { AppContext } from '@context/AppContext.js';
import styles from '@styles/MyOrder.module.scss';

const MyOrder= () => {

    const {state : {cart},toggleCart} = useContext(AppContext);

    const calcularTotal = ()=>{
        
        let suma = 0;

        for(let i=0;i<cart.length;i++){
            suma= suma + cart[i].price;
        }

        return suma;
    }

    return (
        <aside className={styles.MyOrder}>
            <div className={styles["title-container"]}>
                <Image src={Flecha} style={{cursor: "pointer"}} width="10" height="7" onClick={toggleCart} alt="arrow" />
                <p className={styles['title']}>Mi orden</p>
            </div>
            <div className={styles["my-order-content"]}>
                {
                    cart.map((item) => (
                        <OrderItem product={item} key={`order-item-${item.id}`} />
                    ))
                }
                
                <div className={styles["order"]}>
                    <p>
                        <span>Total</span>
                    </p>
                    <p>${calcularTotal()}</p>
                </div>
                <Link href="/checkout" role={"button"} ><a className={styles.PrimaryBtn}>Checkout</a></Link>
            </div>
        </aside>
    )
}

export { MyOrder };