import { OrderItem } from "@components/OrderItem";
import styles from '@styles/Checkout.module.scss';
import Head from "next/head";

const Checkout= () => {
    return (
        <>
        <Head>
            <title>Checkout</title>
        </Head>
        <div className={styles["checkout"]}>
            <div className={styles["checkout-container"]}>
                <h1 className={styles["title"]}>Mi orden</h1>
                <div className={styles["checkout-content"]}>
                    <div className={styles["order"]}>
                        <p>
                            <span>01.03.22</span>
                            <span>6 Articles</span>
                        </p>
                        <p>$560,00</p>
                    </div>
                </div>
                <OrderItem />
            </div>
        </div>
        </>
    );
};

export default Checkout;