import React from 'react'
import { Route, DefaultRoute } from 'react-router'
import App from '../App'
import SelectPokemon from '../App/Views/SelectPokemon'
import TrainPokemon from '../App/Views/TrainPokemon'

var routes = (
  <Route handler={App} >
    <DefaultRoute handler={SelectPokemon} />
    <Route name='SelectPokemon' path='/start' handler={SelectPokemon}/>
    <Route name='TrainPokemon' path='/train' handler={TrainPokemon}/>
  </Route>
)

export default routes