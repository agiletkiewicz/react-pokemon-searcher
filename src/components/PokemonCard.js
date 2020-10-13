import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  render() {
    return (
      <Card>
        <div>
          <div className="image">
            <img alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">POKEMON NAME HERE{console.log(this.props.pokemon)}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              POKEMON HP HERE hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
