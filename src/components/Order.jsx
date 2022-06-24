import React from 'react';
import Flecha from '@icons/flechita.svg';
import '@styles/Order.scss';
import Image from 'next/image';

const Order = () => {
    return (
        <div className='order'>
            <p>
                <span>01.03.22</span>
                <span>6 Articles</span>
            </p>
            <p>$560,00</p>
            <Image src={Flecha} width="15" height="10" alt="arrow" />
        </div>
    );
};

export {Order};
