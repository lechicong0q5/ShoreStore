import React from 'react'

export default function ProductItem({ item, setStateModal }) {
    return (
        <div
            className="product-item card col-2 container"
            onClick={() => setStateModal(item)}
            style={{ cursor: 'pointer', margin: '10px', padding: '15px', border: '1px solid #ddd' }}
        >
            <img src={item.image} style={{ width: "100px", height: 'auto' }} />
            <h5>{item.name}</h5>
            <p>Price: {item.price} VND</p>
        </div>
    );
}

