import React, { useRef, useState, useEffect } from 'react';
import './css/main.css';

const MainSuggested = ({ data, onAddToCart }) => {
    const scrollRef = useRef(null);
    const [startIndex, setStartIndex] = useState(0);
    const [visibleProducts, setVisibleProducts] = useState([]);
    const [productsPerScreen, setProductsPerScreen] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            const containerWidth = scrollRef.current.clientWidth;
            const cardWidth = 250; // Adjust this based on your card width
            const numProducts = Math.floor(containerWidth / cardWidth);
            setProductsPerScreen(numProducts);
            setVisibleProducts(data.slice(startIndex, startIndex + numProducts));
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [data, startIndex]);

    const scrollLeft = () => {
        if (scrollRef.current && startIndex > 0) {
            scrollRef.current.scrollLeft -= 250; // Adjust scroll amount as needed
            setStartIndex(startIndex - productsPerScreen);
        }
    };

    const scrollRight = () => {
        if (scrollRef.current && startIndex + productsPerScreen < data.length) {
            scrollRef.current.scrollLeft += 250; // Adjust scroll amount as needed
            setStartIndex(startIndex + productsPerScreen);
        }
    };

    return (
        <div className="main-suggested">
            <h2>Suggested Products</h2>
            <div className="product-container">
                {startIndex > 0 && (
                    <button className="scroll-button left-button" onClick={scrollLeft}>
                        &lt;
                    </button>
                )}
                <div className="product-grid" ref={scrollRef}>
                    {visibleProducts.map((product) => (
                        <div key={product.id} className="product-card">
                            <img src={product.imgSrc} alt={product.title} style={{ width: '250px', height: '250px' }}/>
                            <h3>{product.title}</h3>
                            <p>{product.description}</p>
                            <p>Price: ₹{product.price}</p>
                            <button onClick={() => onAddToCart(product)}>Add to Cart</button>
                        </div>
                    ))}
                </div>
                {startIndex + productsPerScreen < data.length && (
                    <button className="scroll-button right-button" onClick={scrollRight}>
                        &gt;
                    </button>
                )}
            </div>
        </div>
    );
};

export default MainSuggested;
