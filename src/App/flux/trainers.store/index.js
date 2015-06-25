import trainers from '../../../../provojs'

const Store = {
  getTrainers,
}

export default Store
/////////////////////////////////////////
//

function getTrainers() {
  console.log("from get", trainers)
  return trainers
}

function _arrayToMap(array) {
  let map = {}

  array.forEach(item => {
    map[item._id] = item
  })

  return map
}

