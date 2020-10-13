import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  constructor() {
    super(),
    this.state = {
      flipped: false
    }
  }

  toggle = () => {
    this.setState({ flipped: !this.state.flipped });
  }


  render() {
    return (
      <Card>
        <div onClick={this.toggle}>
          <div className="image">
            <img src={ this.state.flipped ? this.props.pokemon.sprites.back : this.props.pokemon.sprites.front} alt="oh no!" />
          </div>
          <div className="content">
          <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemon.hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
