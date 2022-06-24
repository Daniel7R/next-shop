import React from 'react';
import Close from '@cons/icon_close.png';
import {ProductInfo} from '@components/ProductInfo';
import '@styles/ProductDetail.scss';

const ProductDetail = () => {
    return (
        <aside className='product-detail'>
            <div className="product-detail-close">
                <img src={Close} alt="close" />
            </div>
            <ProductInfo />
        </aside>
    )
}

export {ProductDetail}
