import React from 'react';

const Welcome = props => {
  // console.log(props);
  const { name, img } = props; //! destructuring
  return (
    <div>
      <h2>Welcome to our {name} page:</h2>
      <img src={img} alt={name} />
    </div>
  );
};

export default Welcome;
