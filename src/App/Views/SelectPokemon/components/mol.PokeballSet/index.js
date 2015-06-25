import './style'
import React, { PropTypes } from 'react'
import FlexBox from 'obj.FlexBox'
import Pokeball from 'atm.Pokeball'

const PokeballSet = React.createClass({

  propTypes: {
    pokemon: PropTypes.array.isRequired,
    selectedPokemonIndex: PropTypes.number.isRequired,
    onSelect: PropTypes.func
  },

  render() {
    
    return (
      <FlexBox className='PokeballSet' tag='ul' alignItems='center' justify='center'>
        { renderPokeballs(this.props) }
      </FlexBox>
    )
  }
})

export default PokeballSet

////////////////////////////////////////////////////
//

function renderPokeballs({
  pokemon = [], 
  selectedPokemonIndex = -1, 
  onSelect = () => {}
}) {

  return pokemon.map((p, i) => {
    let { index, type, name } = p
    const uid = `pokeball:${i}${index}`

    return (
      <li key={ uid }>

        <label htmlFor={ uid }>

            <input id={ uid }
              type="radio" 
              name="PokeballSet" 
              onChange={onSelect.bind(null, i)}/>

          <Pokeball pokemonType={ type } active={ index === selectedPokemonIndex} />

        </label>
      </li>
    )
  })
}
