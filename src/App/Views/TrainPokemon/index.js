import './style'
import React from 'react'
import { Navigation } from 'react-router'
import pokemonStore from 'pokemon.store'
import trainerStore from 'trainers.store'
import FlexBox from 'obj.FlexBox'
import Pokemon from 'atm.Pokemon'

const TrainPokemon = React.createClass({

  mixins: [ Navigation ],

  getInitialState() {
    return {
      starter: pokemonStore.getStarter(),
      trainers: trainerStore.getTrainers(),
      trainersFought: [],
    }
  },

  doBattle(trainer) {
    const {
      starter
    } = this.state
    const { pokemon } = trainer

    if (starter.level >= pokemon.level) {
      starter.level++
    } else {
      starter.level--
    }

    this.setState({
      starter
    })
    alert('you defeated ' + pokemon.name)
  },

  render() {
    const {
      starter,
      trainers,
    } = this.state


    if (!starter) {
      return (
      <FlexBox style={{height: '100%'}} alignItems='center' justify='center'>
        <FlexBox direction='column' alignItems='center'>
          <button onClick={()=>{this.transitionTo('SelectPokemon')}}>
            Select Pokemon To Train
          </button>
        </FlexBox>
      </FlexBox>
      )
    }
    let style = {
      container: {
        maxWidth: '400px',
        width: '100%'
      },
      level: {
        fontSize: '3em'
      }
    }
    return (
      <FlexBox style={{height: '100%'}} alignItems='center' justify='center' wrap="wrap">
        <FlexBox direction='column' alignItems='center' justify="center" style={style.container}>
          <h1 style={style.level}>
            { starter.level }
          </h1>
          <Pokemon name={ starter.name } />
        </FlexBox>
        <FlexBox alignItems='start' justify="center" style={style.container}>
          <ul>
            { _renderTrainers(trainers, this.doBattle) }
          </ul>
        </FlexBox>
      </FlexBox>
    )
  }
})

export default TrainPokemon


function _renderTrainers(trainers, onClick) {
  if (trainers.constructor !== Array) {
    return <span>Make sure you are passing in an Array of trainers</span>
  }
  return trainers.map((trainer) => {
    return (
      <li style={{cursor:'pointer'}}onClick={ onClick.bind(null, trainer) }>{ trainer.name }</li>
    )
  })
}



