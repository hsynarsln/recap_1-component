import React from 'react';
import headerImg from '../assets/header.jpg';
import Button from '../components/Button';
import Welcome from '../components/Welcome';

const Header = () => {
  const handleClick = () => {
    alert('Navigating to header page details');
  };

  return (
    <div>
      <h1>Header</h1>
      <Welcome name='Header' img={headerImg} />
      <Button name='Header' click={handleClick} color='#fff' bgColor='black' />
    </div>
  );
};

export default Header;
