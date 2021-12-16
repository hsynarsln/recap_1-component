import React from 'react';
import aboutImg from '../assets/about.jpg';
import Welcome from '../components/Welcome';

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <Welcome name='About' img={aboutImg} />
    </div>
  );
};

export default About;
