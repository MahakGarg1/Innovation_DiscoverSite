import React from 'react';
import './css/main.css';

const MainLogo = ({ imgSrc }) => {
  return (
    <div className="main-logo">
      {imgSrc && <img src={imgSrc} alt="Main Logo" className="main-logo-img" />}
      <h1>Welcome to E-Cart</h1>
    </div>
  );
};

export default MainLogo;
