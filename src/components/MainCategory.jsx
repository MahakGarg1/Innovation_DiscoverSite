import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from './data/categories';
import './css/main.css';

const MainCategory = ({ setData }) => {
    const handleCategoryClick = (category) => {
        setData(category.products);
    };

    return (
        <div className="main-category">
            {categories.map((category) => (
                <div key={category.id} className="category">
                    <Link to={`/category/${category.id}`} className="category-link">
                        {category.name}
                    </Link>
                    {category.subcategories && (
                        <div className="subcategory">
                            {category.subcategories.map((subcategory) => (
                                <Link key={subcategory.id} to={`/category/${subcategory.id}`} className="subcategory-link">
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
