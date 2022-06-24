import React from 'react';
import { ProductItem } from '@components/ProductItem';
import styles from '@styles/ProductList.module.scss';
import { useGetProducts } from '../hooks/useGetProducs';

const API = 'https://api.escuelajs.co/api/v1/products';

const ProductList = () => {

    const products = useGetProducts(API);

    return (
        <section className={styles['main-container']}>
            <div className={styles['product-list']}>
                {
                    products.map(product => (product?.images.length >0 && product?.images[0] !== '') && <ProductItem product={product} key={product.id} />)
                }
            </div>
        </section>
    );
};
export { ProductList };
