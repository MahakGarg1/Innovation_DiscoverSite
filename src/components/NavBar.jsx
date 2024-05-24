import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { items } from './data/products';
import { BsFillCartCheckFill } from 'react-icons/bs';
import './css/main.css';

const Navbar = ({ setData, cart }) => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const [priceRange, setPriceRange] = useState([0, 200000]); // Default price range
    const [priceFilterOpen, setPriceFilterOpen] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/search/${searchTerm}`);
        setSearchTerm('');
    };

    return (
        <header className="sticky-top">
            <div className="nav-bar">
                <Link to="/" className="brand">E-Cart</Link>
                <form onSubmit={handleSubmit} className="search-bar">
                    <input
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        type="text"
                        placeholder="Search Products"
                    />
                </form>
                <Link to="/cart" className="cart">
                    <button type="button" className="btn btn-primary position-relative">
                        <BsFillCartCheckFill style={{ fontSize: '1.5rem' }} />
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            {cart.length}
                            <span className="visually-hidden">unread messages</span>
                        </span>
                    </button>
                </Link>
            </div>
        </header>
    );
};

export default Navbar;
