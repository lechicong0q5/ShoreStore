import React from 'react'

export default function Modal({ content, closeModal }) {
    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <div style={{
                backgroundColor: 'white',
                padding: '20px',
                borderRadius: '8px',
                maxWidth: '500px',
                width: '100%',
                textAlign: 'center'
            }}>
                <button onClick={closeModal} style={{
                    position: 'absolute',
                    top: '10px',
                    right: '20px',
                    fontSize: '24px',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '50px',
                    color: 'black',
                }}>&times;</button>
                <h2>{content.name}</h2>
                <img src={content.image} alt={content.name} style={{ width: '100%' }} />
                <p>{content.description}</p>
                <p>Price: {content.price} VND</p>
            </div>
        </div>
    );
}
