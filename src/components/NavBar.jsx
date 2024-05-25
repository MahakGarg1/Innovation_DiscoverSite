import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BsFillCartCheckFill } from 'react-icons/bs';
import './css/main.css';

const Navbar = ({ setData, cart }) => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [showToggleButton, setShowToggleButton] = useState(true);

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
        navigate(`/search/${searchTerm}`);
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
        </header>
    );
};

export default Navbar;
