import React from 'react';

const HouseSelect = props => {
  let houses = props.characters
    .map(character => character.house)
    .reduce(function(accumulator, currentValue) {
      if (accumulator.indexOf(currentValue) === -1) {
        accumulator.push(currentValue);
      }
      return accumulator;
    }, []);

  return (
    <select onChange={event => props.setSelectedHouse(event.target.value)}>
      <option selected="selected" value="">
        Please choose...
      </option>
      {houses.map((house, index) => (
        <option value={house} key={index}>
          {house}
        </option>
      ))}
    </select>
  );
};

export default HouseSelect;
