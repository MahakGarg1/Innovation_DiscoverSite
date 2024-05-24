import React from 'react';
import './css/main.css';

const MainSuggested = ({ data, onAddToCart }) => {
    return (
        <div className="main-suggested">
            <h2>Suggested Products</h2>
            <div className="product-grid">
                {data.map((product) => (
                    <div key={product.id} className="product-card">
                        <img src={product.imgSrc} alt={product.title} />
                        <h3>{product.title}</h3>
                        <p>{product.description}</p>
                        <p>Price: ₹{product.price}</p>
                        <button onClick={() => onAddToCart(product)}>Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MainSuggested;
