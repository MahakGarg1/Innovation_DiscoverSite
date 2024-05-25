import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { categories } from './data/categories';
import './css/main.css';

const MainCategory = ({ setData }) => {
    const [openCategory, setOpenCategory] = useState(null);

    const toggleCategory = (category) => {
        setOpenCategory(openCategory === category ? null : category);
    };

    const handleCategoryMouseEnter = (category) => {
        setOpenCategory(category);
    };

    const handleCategoryMouseLeave = () => {
        setOpenCategory(null);
    };

    const handleSubcategoryClick = (subcategory) => {
        console.log(`Clicked subcategory: ${subcategory.name}`);
        // You can handle subcategory click as needed, e.g., navigate to subcategory page
    };

    return (
        <div className="main-category">
            {categories.map((category) => (
                <div
                    key={category.name}
                    className="category"
                    onMouseEnter={() => handleCategoryMouseEnter(category)}
                    onMouseLeave={handleCategoryMouseLeave}
                >
                    {/* Use name as key */}
                    <div className={`category-header ${openCategory === category ? 'open' : ''}`}>
                        <img src={category.image} alt={category.name} className="category-image" />
                        <span className="category-name">{category.name}</span>
                    </div>
                    {openCategory === category && category.subcategories && (
                        <div className="subcategory">
                            {category.subcategories.map((subcategory) => (
                                <Link
                                    key={subcategory.name} // Use name as key
                                    to={`/category/${category.name}/${subcategory.name}`} /* Use name for URL path */
                                    className="subcategory-link"
                                    onClick={() => handleSubcategoryClick(subcategory)}
                                >
                                    {subcategory.name}
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default MainCategory;
