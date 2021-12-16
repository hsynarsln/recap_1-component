import React from 'react';
import aboutImg from '../assets/about.jpg';
import Button from '../components/Button';
import Welcome from '../components/Welcome';

const About = () => {
  const handleClick = () => {
    alert('Navigating to about page details');
  };

  return (
    <div>
      <h1>About</h1>
      <Welcome name='About' img={aboutImg} />
      <Button name='About' click={handleClick} />
    </div>
  );
};

export default About;
