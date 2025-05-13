import React from 'react';

const Button = ({ name, onClick }) => {
  return (
    <button 
      onClick={onClick}
      className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
      style={{ backgroundColor: name }}
    >
      {name.charAt(0).toUpperCase() + name.slice(1)}
    </button>
  );
};

export default Button