import React, { Component } from 'react';
import Character from './Character';
import CharacterSelect from './CharacterSelect';
import HouseSelect from './HouseSelect';

class CharacterContainer extends Component {
  constructor() {
    super();
    this.state = {
      characters: [],
      selectedCharacter: '',
      selectedHouse: ''
    };
  }

  componentDidMount() {
    fetch('http://hp-api.herokuapp.com/api/characters')
      .then(res => res.json())
      .then(result => {
        this.fillEmptyFields(result);
        this.setState({
          characters: result
        });
      });
  }

  fillEmptyFields = characters => {
    return characters.map(c => {
      Object.keys(c).forEach(key => {
        if (c[key] === '') {
          c[key] = 'Unknown';
        }
      });
    });
  };

  filterByHouse = () => {
    if (this.state.selectedHouse === '') {
      return this.state.characters;
    } else {
      return this.state.characters.filter(
        character => character.house === this.state.selectedHouse
      );
    }
  };

  setSelectedCharacter = name => {
    const selectedCharacter = this.state.characters.find(
      character => character.name === name
    );
    this.setState({
      selectedCharacter: selectedCharacter
    });
  };

  setSelectedHouse = house => {
    this.setState({
      selectedHouse: house,
      selectedCharacter: ''
    });
  };

  render() {
    return (
      <>
        <h1>Harry Potter Characters</h1>
        <HouseSelect
          setSelectedHouse={this.setSelectedHouse}
          characters={this.state.characters}
        />
        <CharacterSelect
          setSelectedCharacter={this.setSelectedCharacter}
          characters={this.filterByHouse()}
          selectedCharacter={this.state.selectedCharacter}
        />
        <Character c={this.state.selectedCharacter} />
      </>
    );
  }
}

export default CharacterContainer;
