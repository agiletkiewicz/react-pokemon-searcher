import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  constructor() {
    super(),
    this.state = {
      pokemon: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
    .then(resp => resp.json())
    .then(parsed => this.setState({ pokemon: parsed }))
  }

  render() {
    return (
      <Card.Group itemsPerRow={6}>
        <h1>Hello From Pokemon Collection</h1>
        {this.state.pokemon.map(pokemon => (
          <PokemonCard pokemon={pokemon}/>
        ))}
      </Card.Group>
    )
  }
}

export default PokemonCollection
