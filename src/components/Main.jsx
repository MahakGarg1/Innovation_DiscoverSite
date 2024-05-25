import React from 'react';
import MainCategory from './MainCategory';
import MainLogo from './MainLogo';
import MainSuggested from './MainSuggested';
import './Main.css';

const Main = () => {
  const mainLogoImgSrc = "https://www.discoverdollar.com/hubfs/image%203.svg";

  return (
    <div className="main">
      <MainCategory />
      <MainLogo imgSrc={mainLogoImgSrc} />
      <MainSuggested />
    </div>
  );
}

export default Main;
