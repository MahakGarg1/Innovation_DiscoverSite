import React from 'react';
import './css/main.css';

const FilterPage = ({ location }) => {
    const queryParams = new URLSearchParams(location.search);
    const filterName = queryParams.get('page_name');

    return (
        <div className="filter-page">
            <h1>{filterName} Filter Section</h1>
            <p>Can be developed later if given chance</p>
        </div>
    );
};

export default FilterPage;
