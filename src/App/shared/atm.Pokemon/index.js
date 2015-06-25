import React, { PropTypes } from 'react'
import Bulbasaur from './pokemon/bulbasaur'

const pokemon = {
  Bulbasaur
}

const Pokemon = React.createClass({

  propTypes: {
    name: PropTypes.string.isRequired,
  },

  render() {
    
    const $pkmn = pokemon[this.props.name]
    if (!$pkmn) return null

    return (
      <$pkmn />
    )
  }
})

export default Pokemon

////////////////////////////////////////////////////
//

