import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { categories } from './data/categories';
import './css/main.css';

const MainCategory = ({ setData }) => {
    const [selectedSubcategory, setSelectedSubcategory] = useState(null);

    const handleCategoryClick = (category) => {
        setSelectedSubcategory(null); // Clear selected subcategory when clicking on a category
        if (category.subcategories) {
            // Handle category with subcategories
            setData(category.products);
        } else {
            // Handle category without subcategories
            console.log(`Clicked category: ${category.name}`);
        }
    };

    const handleSubcategoryClick = (subcategory) => {
        setSelectedSubcategory(subcategory);
        console.log(`Clicked subcategory: ${subcategory.name}`);
    };

    return (
        <div className="main-category">
            {categories.map((category) => (
                <div key={category.name} className="category"> {/* Use name as key */}
                    <Link
                        to={`/category/${category.name}`} /* Use name for URL path */
                        className="category-link"
                        onClick={() => handleCategoryClick(category)}
                    >
                        <img src={category.image} alt={category.name} className="category-image" />
                        <span className="category-name">{category.name}</span>
                    </Link>
                    {category.subcategories && (
                        <div className="subcategory">
                            {category.subcategories.map((subcategory) => (
                                <Link
                                    key={subcategory.name} // Use name as key
                                    to={`/category/${category.name}/${subcategory.name}`} /* Use name for URL path */
                                    className={`subcategory-link ${selectedSubcategory === subcategory ? 'selected' : ''}`}
                                    onClick={() => handleSubcategoryClick(subcategory)}
                                >
                                    {subcategory.name}
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            ))}
            {selectedSubcategory && (
                <p className="selected-subcategory">
                    <strong>{selectedSubcategory.name}</strong> clicked!
                </p>
            )}
        </div>
    );
};

export default MainCategory;
