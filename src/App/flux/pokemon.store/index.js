import { starters } from './pokemon'

let _starter = null

const Store = {
  getStarters,
  getStarter,
  setStarter,
}

export default Store
/////////////////////////////////////////
//

function getStarters(id) {
  return starters
}

function getStarter() {
  return _starter
}

function setStarter(pkmn) {
  _starter = pkmn
}

function _arrayToMap(array) {
  let map = {}

  array.forEach(item => {
    map[item._id] = item
  })

  return map
}

