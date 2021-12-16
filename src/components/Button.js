import React from 'react';

const btnStyle = {
  borderRadius: '20px',
  fontSize: '20px',
  cursor: 'pointer',
  width: '30%',
  height: '3rem'
};

const divStyle = {
  display: 'flex',
  alignItem: 'center',
  justifyContent: 'center',
  padding: '10px'
};

const Button = props => {
  const { click, name, color, bgColor } = props;

  return (
    <div style={divStyle}>
      {/* //* öncelikle spread operatörü ile btnStyle'ı çağırıyoruz. daha sonra ilave olarak Header ve About.js'da tanımladığımız props ları çağırarak ekliyoruz. */}
      <button style={{ ...btnStyle, color: color, backgroundColor: bgColor }} onClick={click}>
        {name}
      </button>
    </div>
  );
};

export default Button;
