import './style'
import React, { PropTypes } from 'react'
import cn from 'classnames'

const Pokeball = React.createClass({

  propTypes: {
    pokemonType: PropTypes.string,
    active: PropTypes.bool,
  },

  classify() {
    const { 
      pokemonType,
      active
    } = this.props

    return cn({
      [`Pokeball`]: true,
      [`Pokeball-isActive`]: active, 
      [`Pokeball-${pokemonType}`]: !!pokemonType,
    })
  },

  render() {
    return (
      <svg className={this.classify()}
       width="200px" height="200px" viewBox="0 0 250.000000 250.000000"
       preserveAspectRatio="xMidYMid meet">
        <g transform="translate(0.000000,250.000000) scale(0.100000,-0.100000)"
        fill="#d3d3d3" stroke="none">
          <path d="M1141 2030 c-336 -52 -604 -311 -666 -643 l-7 -37 205 0 205 0 6 26
          c10 40 68 125 110 162 145 127 367 127 512 0 42 -37 100 -122 110 -162 l6 -26
          205 0 205 0 -7 37 c-67 361 -374 629 -740 647 -49 3 -114 1 -144 -4z"/>
          <path d="M1181 1465 c-26 -8 -62 -32 -88 -57 -91 -90 -94 -215 -5 -310 90 -97
          217 -101 314 -10 64 60 86 128 68 210 -17 75 -82 146 -153 167 -60 18 -78 18
          -136 0z"/>
          <path d="M475 1113 c56 -302 277 -539 580 -624 112 -32 278 -32 390 0 303 85
          524 322 580 624 l7 37 -205 0 -205 0 -6 -26 c-10 -40 -68 -125 -110 -162 -145
          -127 -367 -127 -512 0 -42 37 -100 122 -110 162 l-6 26 -205 0 -205 0 7 -37z"/>
        </g>
      </svg>
    )
  }
})

export default Pokeball

////////////////////////////////////////////////////
//

