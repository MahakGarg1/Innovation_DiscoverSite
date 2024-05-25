import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar';
import MainCategory from './components/MainCategory';
import MainLogo from './components/MainLogo';
import MainSuggested from './components/MainSuggested';
import FilterPage from './components/FilterPage';
import { items } from './components/data/products';
import './components/css/main.css';
import './components/css/animations.css'; // Include additional animations here

const App = () => {
    const [data, setData] = useState(items);
    const [cart, setCart] = useState([]);
    const [isDarkMode, setIsDarkMode] = useState(false);

    const handleAddToCart = (item) => {
        setCart([...cart, item]);
    };

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.setAttribute('data-theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
        }
    }, [isDarkMode]);

    return (
        <Router>
            <Navbar setData={setData} cart={cart} />
            <div className="container">
                <button className="theme-toggle-button" onClick={toggleTheme}>
                    {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                </button>
                <Routes>
                    <Route path="/" element={
                        <>
                            <MainCategory setData={setData} />
                            <MainLogo />
                            <MainSuggested data={data} onAddToCart={handleAddToCart} />
                        </>
                    } />
                    <Route path="/filter-page" element={<FilterPage />} />
                    {/* Add additional routes as necessary */}
                </Routes>
            </div>
        </Router>
    );
};

export default App;
