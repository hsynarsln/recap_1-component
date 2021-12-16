import React from 'react';

const btnStyle = {
  color: 'white',
  background: 'red'
};

const Button = props => {
  const { click, name } = props;

  return (
    <div>
      <button style={btnStyle} onClick={click}>
        {name}
      </button>
    </div>
  );
};

export default Button;
