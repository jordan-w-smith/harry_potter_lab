import React from 'react';
import { tsPropertySignature } from '@babel/types';

const CharacterSelect = props => (
  <select
    onChange={event => props.setSelectedCharacter(event.target.value)}
    value={props.selectedCharacter}
  >
    <option selected="selected" value="">
      Please choose...
    </option>
    {props.characters.map((character, index) => (
      <option value={character.name} key={index}>
        {character.name}
      </option>
    ))}
  </select>
);

export default CharacterSelect;
