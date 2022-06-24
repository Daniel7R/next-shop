import React from 'react';
import { Header } from '@components/Header.jsx';
import { ProductList } from '@containers/ProductList.jsx';

const Home = () => {
    return (
        <div>
            <Header/>
            <ProductList />
        </div>
    )
}

export { Home }
