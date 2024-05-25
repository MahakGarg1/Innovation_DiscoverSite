import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BsFillCartCheckFill } from 'react-icons/bs';
import './css/main.css';
import products from './data/products.json';

const Navbar = ({ setData, cart }) => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [showToggleButton, setShowToggleButton] = useState(true);
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setShowToggleButton(scrollPosition === 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const results = products.items.filter(item =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(results);
        setSearchTerm('');
    };

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <header className="sticky-top">
            <div className="nav-bar">
                <Link to="/" className="brand1">Discover-Dollar</Link>
                <form onSubmit={handleSubmit} className="search-bar">
                    <input
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        type="text"
                        placeholder="Search Products"
                    />
                </form>
                {showToggleButton && (
                    <button className="theme-toggle-button" onClick={toggleTheme}>
                        {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                    </button>
                )}
            </div>
            {/* Display search results */}
            {searchResults.length > 0 ? (
    <div>
        <h2>Search Results</h2>
        <ul>
            {searchResults.map(item => (
                <li key={item.id}>
                    <Link to={`/product/${item.id}`}>
                        <img src={item.imgSrc} alt={item.name} />
                        <div>
                            <h3>{item.name}</h3>
                            <p>Price: ${item.price}</p>
                            <p>Description: {item.description}</p>
                        </div>
                    </Link>
                </li>
            ))}
        </ul>
    </div>
) : (
    <p>No products found</p>
)}

        </header>
    );
};

export default Navbar;
