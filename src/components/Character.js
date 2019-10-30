import React from 'react';

const Character = ({ c }) => {
  if (c === '') {
    return <div></div>;
  } else {
    return (
      <div>
        <img src={c.image} alt=""></img>
        <p>Name: {c.name}</p>
        <p>House: {c.house}</p>
        <p>Patronus: {c.patronus}</p>
      </div>
    );
  }
};

export default Character;
