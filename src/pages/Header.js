import React from 'react';
import headerImg from '../assets/header.jpg';
import Welcome from '../components/Welcome';

const Header = () => {
  return (
    <div>
      <h1>Header</h1>
      <Welcome name='Header' img={headerImg} />
    </div>
  );
};

export default Header;
