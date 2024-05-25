import React from 'react';
import './css/main.css';

const MainLogo = ({ imgSrc }) => {
  return (
    <div className="main-logo">
      {imgSrc && <img src={imgSrc} alt="Main Logo" className="main-logo-img" />}
   
    </div>
  );
};

export default MainLogo;
