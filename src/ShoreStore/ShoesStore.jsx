import React, { useState } from 'react';
import ProductList from './ProductList';
import Modal from './Modal';
import { products } from './data';

export default function ShoesStore() {
    const [productDetail, setProductDetail] = useState(null);


    const setStateModal = (product) => {
        setProductDetail(product);
    };


    const closeModal = () => {
        setProductDetail(null);
    };

    return (
        <div className="container">
            <h1 className="container text-center">Cửa Hàng Giày</h1>
            <ProductList productsData={products} setStateModal={setStateModal} />
            <>{productDetail ? <Modal content={productDetail} closeModal={closeModal} /> : null}</>
        </div>
    );
}


