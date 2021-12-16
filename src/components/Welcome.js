import React from 'react';

const Welcome = props => {
  // console.log(props);
  const { name, img } = props; //! destructuring
  return (
    <div>
      <h2>Welcome to our {name} page:</h2>
      <img style={{ width: '100%' }} src={img} alt={name} />
    </div>
  );
};

export default Welcome;
